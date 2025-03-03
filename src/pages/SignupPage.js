"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("@/assets/css/style.css");
// ※コメントアウトしてるやつはLoginpage.tsx からのコピー。不要なものは最後に消す
// ==========================================================
// import React, { useState } from 'react'
// import { useNavigate, useLocation } from 'react-router-dom'
// import {
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   GoogleAuthProvider,
//   browserLocalPersistence,
//   browserSessionPersistence
// } from 'firebase/auth'
// import { auth } from '@/lib/firebase'
// import Message from '@/lib/message.json'
// import { UserState, selectUser } from '@/features/userSlice'
// import { useSelector } from 'react-redux'
// ==========================================================

var SignupPage = function SignupPage() {
  // ==========================================================
  // const [email, setEmail] = useState<string>('')
  // const [password, setPassword] = useState<string>('')
  // const [passView, setPassView] = useState<string>('password')
  // const [viewChecked, setViewChecked] = useState<boolean>(false)
  // const [holdChecked, setHoldChecked] = useState<boolean>(false)
  // const [message, setMessage] = useState<string | null>(null)

  // const navigate = useNavigate()
  // const location = useLocation()
  // // const { from }: { from: string }  = location.state as { from: string } || { from: null }
  // const user: UserState = useSelector(selectUser)
  // const errorMessages: {[key: string]: string} = Message.firebase.error

  // const switchPassView = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setViewChecked(event.target.checked)
  //   setPassView(viewChecked ? 'text' : 'password')
  // }

  // const switchHoldView = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setHoldChecked(event.target.checked)
  // }

  // const signInEmail = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   try {
  //     await auth.setPersistence(holdChecked ? browserLocalPersistence : browserSessionPersistence)
  //     await signInWithEmailAndPassword(auth, email, password)
  //   } catch (error: any) {
  //     const errorCode: string = error.code
  //     switch (errorCode) {
  //       case "auth/invalid-email":
  //         setMessage(errorMessages[errorCode])
  //         break
  //     } 
  //   }
  // }

  // const signInGoolge = async (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault()
  //   try {
  //     const provider = new GoogleAuthProvider()
  //     provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
  //     await signInWithPopup(auth, provider)
  //   } catch (error: any) {
  //     const errorCode: string = error.code
  //     switch (errorCode) {
  //       case "auth/invalid-email":
  //         setMessage(errorMessages[errorCode])
  //         break
  //     } 
  //   }
  // }
  // ==========================================================

  return /*#__PURE__*/React.createElement("div", {
    className: "p_signup"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "\u65B0\u898F\u767B\u9332"), /*#__PURE__*/React.createElement("div", {
    className: "contentsBg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "contents"
  }, /*#__PURE__*/React.createElement("div", {
    className: "layout"
  }, /*#__PURE__*/React.createElement("div", {
    className: "signupId"
  }, /*#__PURE__*/React.createElement("label", {
    className: "labelId",
    htmlFor: "userId"
  }, "\u304A\u5BA2\u69D8ID\uFF08\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\uFF09"), /*#__PURE__*/React.createElement("input", {
    className: "inputId",
    type: "text",
    id: "userId",
    name: "userId"
  })), /*#__PURE__*/React.createElement("div", {
    className: "signupPass"
  }, /*#__PURE__*/React.createElement("div", {
    className: "first"
  }, /*#__PURE__*/React.createElement("label", {
    className: "labelPass",
    htmlFor: "userPass"
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), /*#__PURE__*/React.createElement("input", {
    className: "inputPass",
    type: "text",
    id: "usePass",
    name: "userPass"
  }), /*#__PURE__*/React.createElement("input", {
    className: "inputCheck",
    type: "checkbox",
    id: "view",
    name: "view"
  }), /*#__PURE__*/React.createElement("label", {
    className: "labelCheck",
    htmlFor: "view"
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B")), /*#__PURE__*/React.createElement("div", {
    className: "second"
  }, /*#__PURE__*/React.createElement("label", {
    className: "labelPass",
    htmlFor: "userPass"
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9\uFF08\u518D\u5165\u529B\uFF09"), /*#__PURE__*/React.createElement("input", {
    className: "inputPass",
    type: "text",
    id: "usePass",
    name: "userPass"
  }), /*#__PURE__*/React.createElement("input", {
    className: "inputCheck",
    type: "checkbox",
    id: "view",
    name: "view"
  }), /*#__PURE__*/React.createElement("label", {
    className: "labelCheck",
    htmlFor: "view"
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u8868\u793A\u3059\u308B"))), /*#__PURE__*/React.createElement("div", {
    className: "signupBtn"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn"
  }, "\u65B0\u898F\u767B\u9332")), /*#__PURE__*/React.createElement("div", {
    className: "pageBack"
  }, /*#__PURE__*/React.createElement("button", {
    className: "btn"
  }, "\u623B\u308B"))))));
};
var _default = exports.default = SignupPage;