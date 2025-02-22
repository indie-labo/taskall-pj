import '../assets/css/style.css';
import headerLogo from '../assets/img/common/l-header__logo.png';
import headerNotification from '../assets/img/common/l-header__notification.png';
import headerSetting from '../assets/img/common/l-header__setting.png';
import headerProfile from '../assets/img/common/l-header__profile.png';

const Header: React.FC = () => {
  return(
    <header className="l_header">
      <div className="l_header__logo">
        <img className="l_header__logo__img" src={headerLogo} alt="" />
        <p>Taskall</p>
      </div>
      <div className="l_header__menu">
        <div className="l_header__notification">
          <img className="l_header__notification__img" src={headerNotification} alt="" />
          <p className="l_header__notification__number">5</p>
        </div>
        <div className="l_header__setting">
          <img className="l_header__setting__img" src={headerSetting} alt="" />
        </div>
        <div className="l_header__profile">
          <img className="l_header__profile__img" src={headerProfile} alt="" />
          <div className="l_header__profile__status"></div>
        </div>
      </div>
    </header>
  );
}

export default Header
