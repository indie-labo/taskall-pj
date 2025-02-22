import '../assets/css/style.css';
import { useState } from 'react';
import { TableSideView } from './index.ts';
import iconSearch from '../assets/img/icon_search.png';
import iconReload from '../assets/img/icon_reload.png';
import iconPlus from '../assets/img/icon_plus.png';
import iconClose from '../assets/img/icon_close.png';
import iconEllipsis from '../assets/img/icon_ellipsis.png';

interface AddTask {
  task: string;
  date: string;
  name: string;
  status: string;
  tag: string;
  notes: string;
}

const TableView: React.FC = () => {
  const [isSideViewOpen, setIsSideViewOpen] = useState(false);

  // 一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  const [data, setData] = useState<AddTask[]>(
    [
      { task: "test1", date: "2025/01/01", name: "AAA", status: "未着手", tag: "work", notes: "test test test" },
      { task: "test2", date: "2025/02/01", name: "BBB", status: "進行中", tag: "private", notes: "TEST TEST TEST" },
      { task: "test3", date: "2025/03/01", name: "CCC", status: "完了", tag: "other", notes: "**************" },
      { task: "test4", date: "2025/04/01", name: "aaa", status: "完了", tag: "other", notes: "11111111111" },
      { task: "test5", date: "2025/05/01", name: "bbb", status: "完了", tag: "work", notes: "aaaaaaaaaaaaaa" },
    ]
  );

  // サイドビューの開閉
  const toggleSideView = () => {
    setIsSideViewOpen((prev) => !prev);
  };

  // タスクを追加する
  const handleAddTask = (newTask: AddTask) => {
    setData((prevData) => [...prevData, newTask]);
  }

  // タスクを削除する
  const handleDelete = (index: number) => {
    const confirmDelete = window.confirm("タスクを削除しますか？");
    if (confirmDelete) {
      setData(prevData => prevData.filter((_, i) => i !== index));
    }
  };

  return(
    <div className="p_tableView">
      {/* モーダル(TableSideView) */}
      <TableSideView isOpen = {isSideViewOpen} onClose={toggleSideView} onAddTask={handleAddTask} />

      <div className="p_tableView__taskWrap">
        <div className="p_tableView__taskWrap__heading">
          <p className="p_tableView__taskWrap__heading__title">All List</p>

          <div className="p_tableView__taskWrap__heading__iconWrap">
            <button><img className="iconSearch" src={iconSearch} alt="" /></button>
            <button><img className="iconReload" src={iconReload} alt="" /></button>
            <button onClick={toggleSideView}><img className="iconPlus" src={iconPlus} alt="" /></button>
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
                {data.map((item, index) => (
                  <tr key={index.toString()}>
                    <td className="btnArea">
                      <button className="btnDelete" onClick={() => handleDelete(index)}><img src={iconClose} alt="" /></button>
                    </td>
                    <td className="task">{item.task}</td>
                    <td className="date">{item.date}</td>
                    <td className="name">{item.name}</td>
                    <td className="status">{item.status}</td>
                    <td className="tag">{item.tag}</td>
                    <td className="notes">{item.notes}</td>
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
            <br />Notesもリストから消してこっちに持ってくる。
          </p>

          <button className="btnDelete">削除</button>
        </div>
      </div>

    </div>
  );
}

export default TableView
