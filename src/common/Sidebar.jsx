import '../assets/css/style.css'

const Sidebar = (props) => {
  return(
    <aside className="lSide">
      <div className="lSide__heading">ADMIN APP</div>

      <div className="lSide__main">
        <ul className="lSide__main__list">
          <li className="lSide__main__list__item">
            <a href="" className="lSide__main__list__item__text">Dash board</a>
          </li>
          <li className="lSide__main__list__item">
            <a href="" className="lSide__main__list__item__text">Chats</a>
          </li>
          <li className="lSide__main__list__item">
            <button onClick={() => props.setView("table")} className={`lSide__main__list__item__text ${props.activeView === "table" ? "active" : ""}`}>
              Tables
            </button>
          </li>
          <li className="lSide__main__list__item">
            <button onClick={() => props.setView("kanban")} className={`lSide__main__list__item__text ${props.activeView === "kanban" ? "active" : ""}`}>
              Kanban
            </button>
          </li>
          <li className="lSide__main__list__item">
            <a href="" className="lSide__main__list__item__text">File Manager</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
