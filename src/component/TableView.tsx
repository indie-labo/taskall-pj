import '../assets/css/style.css';
import { useState } from 'react';
import { TableSideView } from './index.ts';
import iconSearch from '../assets/img/icon_search.png';
import iconReload from '../assets/img/icon_reload.png';
import iconPlus from '../assets/img/icon_plus.png';

const TableView: React.FC = () => {
  const [isSideViewOpen, setIsSideViewOpen] = useState(false);

  const toggleSideView = () => {
    setIsSideViewOpen((prev) => !prev);
  };


  //一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  const data = [
    { task: "test1", date: "2025/01/01", name: "AAA", status: "進行中", tag: "work", notes: "test test test" },
    { task: "test2", date: "2025/02/01", name: "BBB", status: "完了", tag: "private", notes: "TEST TEST TEST" },
    { task: "test3", date: "2025/03/01", name: "CCC", status: "未着手", tag: "other", notes: "**************" },
    { task: "test4", date: "2025/04/01", name: "aaa", status: "アーカイブ", tag: "other", notes: "11111111111" },
    { task: "test5", date: "2025/05/01", name: "bbb", status: "進行中", tag: "work", notes: "aaaaaaaaaaaaaa" },
  ];

  return(
    <div className="p_tableView">
      {/* モーダル(TableSideView) */}
      <TableSideView isOpen = {isSideViewOpen} onClose={toggleSideView} />

      <div className="p_tableView__heading">
        <p className="p_tableView__heading__title">All List</p>

        <div className="p_tableView__heading__iconWrap">
          <button><img className="iconSearch" src={iconSearch} alt="" /></button>
          <button><img className="iconReload" src={iconReload} alt="" /></button>
          <button onClick={toggleSideView}><img className="iconPlus" src={iconPlus} alt="" /></button>
        </div>
      </div>

      <table className="p_tableView__list">
        <thead className="p_tableView__list__title">
          <tr>
            <th className="task">タスク名</th>
            <th className="date">日付</th>
            <th className="name">担当者</th>
            <th className="status">ステータス</th>
            <th className="tag">タグ</th>
            <th className="notes">Notes</th>
          </tr>
        </thead>

        <tbody className="p_tableView__list__contents">
          {data.map((item, index) => (
            <tr key={index.toString()}>
              <td>{item.task}</td>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.status}</td>
              <td>{item.tag}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView
