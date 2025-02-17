import {TableView, KanbanView} from '../component/index.ts';
import '../assets/css/style.css';

interface MainViewProps {
  view: string;
}

const MainView: React.FC<MainViewProps> = (props) => {
  const renderView = () => {
    switch (props.view) {
      case "table":
        return <TableView />;
      case "kanban":
        return <KanbanView />;
      default:
        return <p>test</p>;
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
