import '../assets/css/style.css'

const Sidebar = () => {
  return(
    <aside className="lSide">
      <div className="lSide__heading">ADMIN APP</div>

      <div className="lSide__main">
        <ul className="lSide__main__list">
          <li className="lSide__main__list__item">
            <a href="#" className="lSide__main__list__item__text active">Dash board</a>
          </li>
          <li className="lSide__main__list__item">
            <a href="#" className="lSide__main__list__item__text">Chats</a>
          </li>
          <li className="lSide__main__list__item">
            <a href="#" className="lSide__main__list__item__text">Tables</a>
          </li>
          <li className="lSide__main__list__item">
            <a href="#" className="lSide__main__list__item__text">Kanban</a>
          </li>
          <li className="lSide__main__list__item">
            <a href="#" className="lSide__main__list__item__text">File Manager</a>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar
