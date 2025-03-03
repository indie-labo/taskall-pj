import { Link, useLocation } from 'react-router-dom';
import '@/assets/css/style.css';

const Sidebar: React.FC = () => {
  const pathname = useLocation().pathname
  
  return(
    <aside className="l_side">
      <div className="l_side__heading">ADMIN APP</div>

      <div className="l_side__main">
        <ul className="l_side__main__list">
          <li className="l_side__main__list__item">
            <Link to="/" className={`l_side__main__list__item__text ${pathname === "/" ? "active" : ""}`}>
              Dash board
            </Link>
          </li>
          <li className="l_side__main__list__item">
            <Link to="table" className={`l_side__main__list__item__text ${pathname === "/table" ? "active" : ""}`}>
              Tables
            </Link>
          </li>
          <li className="l_side__main__list__item">
            <Link to="kanban" className={`l_side__main__list__item__text ${pathname === "/kanban" ? "active" : ""}`}>
              Kanban
            </Link>
          </li>
          <li className="l_side__main__list__item">
            <Link to="gantt" className={`l_side__main__list__item__text ${pathname === "/gantt" ? "active" : ""}`}>
              Gantt chart
            </Link>
          </li>
          <li className="l_side__main__list__item">
            <Link to="chat" className={`l_side__main__list__item__text ${pathname === "/chat" ? "active" : ""}`}>
              Chat
            </Link>
          </li>
          <li className="l_side__main__list__item">
            <Link to="file" className={`l_side__main__list__item__text ${pathname === "/file" ? "active" : ""}`}>
              File Manager
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
