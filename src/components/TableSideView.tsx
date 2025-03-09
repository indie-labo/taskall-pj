import React, { useState, useEffect } from 'react';
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore"; 
import { db } from '@/lib/firebase';
import '@/assets/css/style.css';
import iconClose from '@/assets/img/icon_close.png';

interface TableSideViewProps {
  isOpen: boolean;
  onClose: () => void;
  // onAssignChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onTagsChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // onRemoveTag: (tag: string) => void;
}

const TableSideView: React.FC<TableSideViewProps> = (props) => {
  // 新規タスク追加時のstate管理
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [assign, setAssign] = useState<string[]>([]);
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [remarks, setRemarks] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  // ---------------------------------------------------------------
  // タスク追加処理
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // タスク名が空白の場合、値を送信しない
    if (!task ) {
      setErrorMessage('※タスク名を入力してください');
      return;
    }
    setErrorMessage('');

    const timestamp = Timestamp.fromDate(new Date(date))
    await addDoc(collection(db, "tasks"), {
      task,
      status,
      assign,
      tags,
      remarks,
      date: timestamp,
      create_at: serverTimestamp()
    })

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

  // 担当者選択の処理
  const handleAssignChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setAssign((prevAssign) => [...new Set([...prevAssign, ...selectedValues])]);
  };
  // 選択中の担当者を削除する
  const handleRemoveAssign = (assign: string) => {
    setAssign((prevAssign) => prevAssign.filter((t) => t !== assign));
  };

  // タグ選択の処理
  const handleTagsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValues = Array.from(e.target.selectedOptions, (option) => option.value);
    setTags((prevTags) => [...new Set([...prevTags, ...selectedValues])]);
  };
  // 選択中のタグを削除する
  const handleRemoveTag = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };


  // ---------------------------------------------------------------
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
              <select className="field multiSelect" multiple value={assign} onChange={handleAssignChange}>
                <option value="hoge">hoge</option>
                <option value="fuga">fuga</option>
                <option value="piyo">piyo</option>
              </select>

              {/* 選択中のタグを表示 */}
              <div className="selectItemWrap">
                {assign.map((name) => (
                  <span className="selectItem" key={name}>
                    {name}
                    <button className="btnRemoveItem" onClick={() => handleRemoveAssign(name)}> ×</button>
                  </span>
                ))}
              </div>
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
              <select className="field multiSelect" multiple value={tags} onChange={handleTagsChange}>
                <option value="work">work</option>
                <option value="private">private</option>
                <option value="other">other</option>
              </select>

              {/* 選択中のタグを表示 */}
              <div className="selectItemWrap">
                {tags.map((tag) => (
                  <span className="selectItem" key={tag}>
                    {tag}
                    <button className="btnRemoveItem" onClick={() => handleRemoveTag(tag)}> ×</button>
                  </span>
                ))}
              </div>
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
