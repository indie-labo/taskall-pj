import '../assets/css/style.css';
import headerLogo from '../assets/img/icon_tetoria.png';
import headerNotification from '../assets/img/icon_notification.png';
import headerSetting from '../assets/img/icon_setting.png';
import headerProfile from '../assets/img/icon_profile.png';

const Header: React.FC = () => {
  return(
    <header className="l_header">
      <div className="l_header__logo">
        <img className="l_header__logo__img" src={headerLogo} alt="" />
        <p>Taskall</p>
      </div>
      <div className="l_header__menu">
        <div className="l_header__notification">
          <button className="btnNotification"><img src={headerNotification} alt="" /></button>
          <p className="notificationNum">5</p>
        </div>
        <div className="l_header__setting">
          <button className="btnSetting"><img src={headerSetting} alt="" /></button>
        </div>
        <div className="l_header__profile">
          <button className="btnProfile"><img src={headerProfile} alt="" /></button>
        </div>
      </div>
    </header>
  );
}

export default Header
