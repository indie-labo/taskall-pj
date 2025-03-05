import React, { useState, useEffect } from 'react';
import '@/assets/css/style.css';
import iconClose from '@/assets/img/icon_close.png';

interface AddTask {
  task: string;
  date: string;
  assign: Array<string>;
  status: string;
  tags: Array<string>;
  remarks: string;
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
  const [assign, setAssign] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [remarks, setRemarks] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

// assignとtagsに入力された値を配列に変換
  const handleAssignChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAssign(e.target.value.split(","));
  };
  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTags(Array.from(e.target.selectedOptions, (option) => option.value));
  };

  // タスク追加時、jsonに値を送る処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 空白の場合、値を送信しない
    if (!task ) {
      setErrorMessage('※タスク名を入力してください');
      return;
    }

    setErrorMessage('');

    // 新しいタスクを作成し、親コンポーネントに渡す
    props.onAddTask({ task, date, assign, status, tags, remarks });

    // 入力フィールドをリセット
    setTask("");
    setDate("");
    setAssign([]);
    setStatus("");
    setTags([]);
    setRemarks("");
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
              <input className="field" type="text" value={assign.join(",")} onChange={handleAssignChange} />
            </li>

            <li className="block">
              <p className="item">*ステータス</p>
              <select className="field" value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value=""></option>
                <option value="未着手">未着手</option>
                <option value="進行中">進行中</option>
                <option value="完了">完了</option>
              </select>
            </li>

            <li className="block">
              <p className="item">*タグ</p>
              <select className="field" value={tags.join(",")} onChange={handleTagsChange}>
                <option value=""></option>
                <option value="work">work</option>
                <option value="private">private</option>
                <option value="other">other</option>
              </select>
            </li>

            <li className="block">
              <p className="item">*Notes</p>
              <textarea className="field textArea" value={remarks} onChange={(e) => setRemarks(e.target.value)} />
            </li>
          </ul>

          {/* 未入力項目があった場合のエラーメッセージ */}
          {errorMessage && <p style={{ marginBottom: '15px', fontSize: '14px', color: 'red' }}>{errorMessage}</p>}

          <button className="btnSubmit" type="submit">追加</button>
        </form>
      </div>
    </div>
  );
}

export default TableSideView
