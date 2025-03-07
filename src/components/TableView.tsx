import { useState, useEffect } from 'react';
import { collection, onSnapshot } from "firebase/firestore";
import { db } from '@/lib/firebase';
import { TableSideView } from './index';
import '@/assets/css/style.css';
import iconSearch from '@/assets/img/icon_search.png';
import iconReload from '@/assets/img/icon_reload.png';
import iconPlus from '@/assets/img/icon_plus.png';
import iconClose from '@/assets/img/icon_close.png';

interface Task {
  task   : string;
  date   : string;
  assign : Array<string>;
  status : string;
  tags   : Array<string>;
  remarks: string;
}

const TableView: React.FC = () => {
  // SideView開閉状態のstate管理
  const [isSideViewOpen, setIsSideViewOpen] = useState(false);

  // タスクのstate管理
  const [tasks, setTasks] = useState<Task[]>([]);

  // タスク編集時のstate管理
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [remarks, setRemarks] = useState("");

  // タスクの詳細エリア(detailWrap)のstate管理
  const [isActive, setIsActive] = useState(false);


  // ---------------------------------------------------------------
  // FireStoreの"tasks"コレクションの監視とState管理
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
      const taskList: Task[] = querySnapshot.docs.map((doc) => {
        const date = new Date(doc.data().date.seconds * 1000)
        const yyyy = `${date.getFullYear()}`;
        const MM = `0${date.getMonth() + 1}`.slice(-2);
        const dd = `0${date.getDate()}`.slice(-2);
        
        return {
          task   : doc.data().task,
          date   : `${yyyy}/${MM}/${dd}`,
          assign : doc.data().assign,
          status : doc.data().status,
          tags   : doc.data().tags,
          remarks: doc.data().remarks
        }
      })
      console.log(taskList)
      setTasks(taskList)
    })
    
    return () => unsubscribe()
  }, [])

  // サイドビューの開閉
  const toggleSideView = () => {
    setIsSideViewOpen((prev) => !prev);
  };

  // タスクを追加する
  const handleAddTask = (newTask: Task) => {
    setTasks((prevData) => [...prevData, newTask]);
  }

  // タスクを削除する
  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("タスクを削除しますか？");
    if (confirmDelete) {
      setTasks(prevData => prevData.filter((_, i) => i !== index));
    }
  }

  // 担当者に入力された値を配列に変更
  const handleAssignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssign(e.target.value.split(","));
  };
  // タグ選択の処理
  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags((prevTags) => [...new Set([...prevTags, ...selectedValues])]);
  };
  // 選択中のタグを削除する
  const handleRemoveTag = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  // タスクの詳細エリア(detailWrap)の表示切り替え
  const handleClickHidden = () => {
    setIsActive(false);
  };

  const handleClickOpen = () => {
    setIsActive(true);
  };


  // ---------------------------------------------------------------
  return(
    <div className="p_tableView">
      {/* モーダル(TableSideView) */}
      <TableSideView 
        isOpen = {isSideViewOpen} onClose={toggleSideView} onAddTask={handleAddTask} 
        // onAssignChange = {handleAssignChange} onTagsChange = {handleTagsChange} onRemoveTag = {handleRemoveTag}
      />

      <div className="p_tableView__taskWrap">
        <div className="p_tableView__taskWrap__heading">
          <p className="p_tableView__taskWrap__heading__title">All List</p>

          <div className="p_tableView__taskWrap__heading__btnWrap">
            <button className="btnSearch"><img src={iconSearch} alt="" /></button>
            <button className="btnReload"><img src={iconReload} alt="" /></button>
            <button className="btnAdd" onClick={toggleSideView}><img src={iconPlus} alt="" /></button>
          </div>
        </div>

        <div className="p_tableView__taskWrap__list">
          <table className="p_tableView__taskWrap__list__theadContents">
            <thead className="p_tableView__taskWrap__list__theadContents__title">
              <tr>
                <th className="blankSpace"></th>
                <th className="task">タスク名</th>
                <th className="date">日付</th>
                <th className="assign">担当者</th>
                <th className="status">ステータス</th>
                <th className="tags">タグ</th>
                <th className="remarks">Notes</th>
              </tr>
            </thead>
          </table>

          <div className="p_tableView__taskWrap__list__listOverflow">
            <table className="p_tableView__taskWrap__list__tbodyContents">
              <tbody className="p_tableView__taskWrap__list__tbodyContents__contents">
                {tasks.map((item, index) => (
                  <tr key={index.toString()} onClick={handleClickOpen}>
                    <td className="btnArea">
                      <button className="btnDelete" onClick={() => handleDelete(index)}><img src={iconClose} alt="" /></button>
                    </td>
                    <td className="task">{item.task}</td>
                    <td className="date">{item.date}</td>
                    <td className="assign">{item.assign.join(',')}</td>
                    <td className="status">{item.status}</td>
                    <td className="tags">{item.tags.join(',')}</td>
                    <td className="remarks">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p_tableView__detailWrap">
        <div>
          <div className="p_tableView__detailWrap__heading">
            <div id="detailBtnWrap" className={`btnWrap ${isActive ? "active" : ""}`}>
              <button className="cancelButton" onClick={handleClickHidden}>キャンセル</button>
              <button className="saveButton" type="submit">保存</button>
            </div>
          </div>

          <div id="detailContents" className={`p_tableView__detailWrap__contents ${isActive ? "active" : ""}`}>
            <form className="inputArea">
              <ul className="blockWrap">
                <li className="block">
                  <p className="item">*タスク名</p>
                  <input className="field" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
                </li>

                <li className="block">
                  <p className="item">*日付</p>
                  <input className="field" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </li>

                <li className="block">
                  <p className="item">*担当者</p>
                  <input className="field" type="text" value={assign.join(",")} onChange={handleAssignChange} />
                </li>

                <li className="block">
                  <p className="item">*ステータス</p>
                  <select className="field" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value=""></option>
                    <option value="未着手">未着手</option>
                    <option value="進行中">進行中</option>
                    <option value="完了">完了</option>
                  </select>
                </li>

                <li className="block">
                  <p className="item">*タグ</p>
                  <select className="field tag" multiple value={tags} onChange={handleTagsChange}>
                    <option value="work">work</option>
                    <option value="private">private</option>
                    <option value="other">other</option>
                  </select>

                  {/* 選択中のタグを表示 */}
                  <div className="selectTag">
                    {tags.map((tag) => (
                      <span className="itemTag" key={tag}>
                        {tag}
                        <button className="btnRemoveTag" onClick={() => handleRemoveTag(tag)}> ×</button>
                      </span>
                    ))}
                  </div>
                </li>

                <li className="block">
                  <p className="item">*Notes</p>
                  <textarea className="field textArea" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

    </div>
  );
}

export default TableView
