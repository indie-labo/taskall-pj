import React, { useEffect } from 'react';
import '../assets/css/style.css';
import iconClose from '../assets/img/icon_close.png';

interface TableSideViewProps {
  isOpen: boolean;
  onClose: () => void;
}

const TableSideView: React.FC<TableSideViewProps> = (props) => {
  // ボタンがクリックされたときにサイドビューを閉じる処理
  useEffect(() => {
    const closeButton = document.getElementById("closeButton") as HTMLButtonElement;
    const targetElement = document.getElementById("sideView") as HTMLElement;

    const handleClick = () => {
      targetElement.classList.remove("open");
      props.onClose();
    };

    closeButton?.addEventListener("click", handleClick);

    return () => {
      closeButton?.removeEventListener("click", handleClick);
    };
  }, [props.onClose]);

  return(
    <div id="sideView" className={`p_tableView__sideView ${props.isOpen ? "open" : ""}`}>
      <div className="p_tableView__sideView__smoke"></div>

      <div className="p_tableView__sideView__contents">
        <button id="closeButton"><img className="iconClose" src={iconClose} alt="" /></button>
        <p>サイドビュー</p>
      </div>
    </div>
  );
}

export default TableSideView
