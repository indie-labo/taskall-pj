import '../assets/css/style.css'
import headerLogo from '../assets/img/common/l-header__logo.png';
import headerNotification from '../assets/img/common/l-header__notification.png';
import headerSetting from '../assets/img/common/l-header__setting.png';
import headerProfile from '../assets/img/common/l-header__profile.png';

const Header = () => {
  return(
    <header className="lHeader">
      <div className="lHeader__logo">
        <img className="lHeader__logo__img" src={headerLogo} alt="" />
        <p>Taskall</p>
      </div>
      <div className="lHeader__menu">
        <div className="lHeader__notification">
          <img className="lHeader__notification__img" src={headerNotification} alt="" />
          <p className="lHeader__notification__number">5</p>
        </div>
        <div className="lHeader__setting">
          <img className="lHeader__setting__img" src={headerSetting} alt="" />
        </div>
        <div className="lHeader__profile">
          <img className="lHeader__profile__img" src={headerProfile} alt="" />
          <div className="lHeader__profile__status"></div>
        </div>
      </div>
    </header>
  );
}

export default Header
