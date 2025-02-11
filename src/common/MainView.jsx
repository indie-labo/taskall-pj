import {TableView, KanbanView} from '../component/index'
import '../assets/css/style.css'

const MainView = (props) => {
  const renderView = () => {
    switch (props.view) {
      case "table":
        return <TableView />;
      case "kanban":
        return <KanbanView />;
      default:
        return <p>hoge</p>;
    }
  };

  return(
    <main className="lMainView">
      <div className="lMainView__contents">
        {renderView()}
      </div>
    </main>
  );
}

export default MainView
