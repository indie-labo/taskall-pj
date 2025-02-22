import '../assets/css/style.css';

interface SidebarProps {
  setView: (view: string) => void;
  activeView: string;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
  return(
    <aside className="l_side">
      <div className="l_side__heading">ADMIN APP</div>

      <div className="l_side__main">
        <ul className="l_side__main__list">
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("dashBoard")} className={`l_side__main__list__item__text ${props.activeView === "dashBoard" ? "active" : ""}`}>
              Dash board
            </button>
          </li>
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("table")} className={`l_side__main__list__item__text ${props.activeView === "table" ? "active" : ""}`}>
              Tables
            </button>
          </li>
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("kanban")} className={`l_side__main__list__item__text ${props.activeView === "kanban" ? "active" : ""}`}>
              Kanban
            </button>
          </li>
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("gantt")} className={`l_side__main__list__item__text ${props.activeView === "gantt" ? "active" : ""}`}>
              Gantt chart
            </button>
          </li>
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("chats")} className={`l_side__main__list__item__text ${props.activeView === "chats" ? "active" : ""}`}>
              Chats
            </button>
          </li>
          <li className="l_side__main__list__item">
            <button onClick={() => props.setView("fileMg")} className={`l_side__main__list__item__text ${props.activeView === "fileMg" ? "active" : ""}`}>
              File Manager
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
