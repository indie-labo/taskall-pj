import React, { useState, useEffect } from 'react';
import '../assets/css/style.css';
import iconClose from '../assets/img/icon_close.png';

interface AddTask {
  task: string;
  date: string;
  name: string;
  status: string;
  tag: string;
  notes: string;
}

interface TableSideViewProps {
  isOpen: boolean;
  onClose: () => void;
  onAddTask: (task: AddTask) => void;
}

const TableSideView: React.FC<TableSideViewProps> = (props) => {
  // タスク追加時のstate管理
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [tag, setTag] = useState("");
  const [notes, setNotes] = useState("");

  // タスク追加時、jsonに値を送る処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 空白の場合、値を送信しない
    if (!task || !date || !name || !status || !tag || !notes) return;

    // 新しいタスクを作成し、親コンポーネントに渡す
    props.onAddTask({ task, date, name, status, tag, notes });

    // 入力フィールドをリセット
    setTask("");
    setDate("");
    setName("");
    setStatus("");
    setTag("");
    setNotes("");
  }


  // サイドビューを閉じる
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
        <p className="title">新規タスクの追加</p>

        <form className="inputArea" onSubmit={handleSubmit}>
          <ul className="blockWrap">
            <li className="block">
              <p className="item">*タスク名</p>
              <input className="field" type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            </li>

            <li className="block">
              <p className="item">*日付</p>
              <input className="field" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
            </li>

            <li className="block">
              <p className="item">*担当者</p>
              <input className="field" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </li>

            <li className="block">
              <p className="item">*ステータス</p>
              <input className="field" type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </li>

            <li className="block">
              <p className="item">*タグ</p>
              <input className="field" type="text" value={tag} onChange={(e) => setTag(e.target.value)} />
            </li>

            <li className="block">
              <p className="item">*Notes</p>
              <textarea className="field textArea" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </li>
          </ul>

          <button className="btnSubmit" type="submit">追加</button>
        </form>
      </div>
    </div>
  );
}

export default TableSideView
