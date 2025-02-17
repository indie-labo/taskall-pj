import '../assets/css/style.css';
import iconSearch from '../assets/img/icon_search.png';
import iconReload from '../assets/img/icon_reload.png';
import iconPlus from '../assets/img/icon_plus.png';

const TableView: React.FC = () => {
  //一旦json形式でデータ定義。最終的にはDBからデータ取得してくるようにする。
  const data = [
    { taskName: "test1", date: "2025/01/01", tag: "work", status: "進行中", notes: "test1test1test1" },
    { taskName: "test2", date: "2025/02/01", tag: "Private", status: "完了", notes: "test2test2test2" },
    { taskName: "test3", date: "2025/03/01", tag: "work", status: "完了", notes: "test3test3test3" },
    { taskName: "test4", date: "2025/04/01", tag: "Private", status: "保留", notes: "test4test4test4" },
    { taskName: "test5", date: "2025/05/01", tag: "work", status: "進行中", notes: "test5test5test5" },
  ];

  return(
    <div className="p_tableView">
      <div className="p_tableView__heading">
        <p className="p_tableView__heading__title">All List</p>

        <div className="p_tableView__heading__iconWrap">
          <img className="iconSearch" src={iconSearch} alt="" />
          <img className="iconReload" src={iconReload} alt="" />
          <img className="iconPlus" src={iconPlus} alt="" />
        </div>
      </div>

      <table className="p_tableView__list">
        <thead className="p_tableView__list__title">
          <tr>
            <th className="task">タスク名</th>
            <th className="date">日付</th>
            <th className="tag">タグ</th>
            <th className="status">ステータス</th>
            <th className="notes">Notes</th>
          </tr>
        </thead>

        <tbody className="p_tableView__list__contents">
          {data.map((item, index) => (
            <tr key={index.toString()}>
              <td>{item.taskName}</td>
              <td>{item.date}</td>
              <td>{item.tag}</td>
              <td>{item.status}</td>
              <td>{item.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableView
