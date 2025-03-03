import { Outlet } from 'react-router-dom';
import '@/assets/css/style.css';

const MainView: React.FC = () => {
  return(
    <main className="l_mainView">
      <div className="l_mainView__contents">
        {<Outlet />}
      </div>
    </main>
  );
}

export default MainView
