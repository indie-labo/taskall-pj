import { TableView } from '../component/index.ts';
import '../assets/css/style.css';

interface MainViewProps {
  view: string;
}

const MainView: React.FC<MainViewProps> = (props) => {
  const renderView = () => {
    switch (props.view) {
      case "initialState":
        return <p>Hello World</p>
      case "table":
        return <TableView />;
      default:
        return <p>Coming soon...</p>;
    }
  };

  return(
    <main className="l_mainView">
      <div className="l_mainView__contents">
        {renderView()}
      </div>
    </main>
  );
}

export default MainView
