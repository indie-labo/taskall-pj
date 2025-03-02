import { collection, onSnapshot } from "firebase/firestore";
import { db } from '@/lib/firebase'
import { useState, useEffect } from 'react';
import { TableSideView } from './index.ts';
import '@/assets/css/style.css';
import iconSearch from '@/assets/img/icon_search.png';
import iconReload from '@/assets/img/icon_reload.png';
import iconPlus from '@/assets/img/icon_plus.png';
import iconClose from '@/assets/img/icon_close.png';
import iconEllipsis from '@/assets/img/icon_ellipsis.png';

interface Task {
  task: string;
  date: string;
  assign: Array<string>;
  status: string;
  tags: Array<string>;
  remarks: string;
}

const TableView: React.FC = () => {
  const [isSideViewOpen, setIsSideViewOpen] = useState(false);

  // 一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  const [tasks, setTasks] = useState<Task[]>([]);

  // サイドビューの開閉
  const toggleSideView = () => {
    setIsSideViewOpen((prev) => !prev);
  };

  // タスクを追加する
  const handleAddTask = (newTask: AddTask) => {
    setTasks((prevData) => [...prevData, newTask]);
  }

  // タスクを削除する
  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("タスクを削除しますか？");
    if (confirmDelete) {
      setTasks(prevData => prevData.filter((_, i) => i !== index));
    }
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "tasks"), (querySnapshot) => {
      const taskList: Task[] = querySnapshot.docs.map((doc) => {
        const date = new Date(doc.data().date.seconds * 1000)
        const yyyy = `${date.getFullYear()}`;
        const MM = `0${date.getMonth() + 1}`.slice(-2);
        const dd = `0${date.getDate()}`.slice(-2);
        
        return {
          task: doc.data().task,
          date: `${yyyy}/${MM}/${dd}`,
          assign: doc.data().assign,
          status: doc.data().status,
          tags: doc.data().tags,
          remarks: doc.data().remarks
        }
      })
      console.log(taskList)
      setTasks(taskList)
    })
    
    return () => unsubscribe()
  }, [])

  return(
    <div className="p_tableView">
      {/* モーダル(TableSideView) */}
      <TableSideView isOpen = {isSideViewOpen} onClose={toggleSideView} onAddTask={handleAddTask} />

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
                <th className="name">担当者</th>
                <th className="status">ステータス</th>
                <th className="tag">タグ</th>
                <th className="notes">Notes</th>
              </tr>
            </thead>
          </table>

          <div className="p_tableView__taskWrap__list__listOverflow">
            <table className="p_tableView__taskWrap__list__tbodyContents">
              <tbody className="p_tableView__taskWrap__list__tbodyContents__contents">
                {tasks.map((item, index) => (
                  <tr key={index.toString()}>
                    <td className="btnArea">
                      <button className="btnDelete" onClick={() => handleDelete(index)}><img src={iconClose} alt="" /></button>
                    </td>
                    <td className="task">{item.task}</td>
                    <td className="date">{item.date}</td>
                    <td className="name">{item.assign.join(',')}</td>
                    <td className="status">{item.status}</td>
                    <td className="tag">{item.assign.join(',')}</td>
                    <td className="notes">{item.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="p_tableView__detailWrap">
        <div className="p_tableView__detailWrap__heading">
          <div className="p_tableView__detailWrap__heading__btnWrap">
            <button className="btnEllipsis"><img src={iconEllipsis} alt="" /></button>
          </div>
        </div>

        <div className="p_tableView__detailWrap__contents">
          <p>
            選択したタスクの詳細を表示。
            <br />タスクの削除はここからできるようにする。
            <br />＊いまはタスク横の×ボタンで削除
            <br />Notesもリストから消してこっちに持ってくる。
          </p>

          <button className="btnDelete">削除</button>
        </div>
      </div>

    </div>
  );
}

export default TableView
