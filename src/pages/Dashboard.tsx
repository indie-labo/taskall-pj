import { Sidebar, Header, MainView } from '@/common/index';
// import { useDispatch } from "react-redux";
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Outlet, Link } from 'react-router-dom';
// import { logout } from "@/features/userSlice";
// import { signOut } from "firebase/auth";
// import { auth } from "@/lib/firebase";

const Dashboard = () => {
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const onLogout = () => dispatch(logout());

    return (
      <div className='l_common'>
        <Sidebar />
        <div className='l_mainWrap'>
          <Header />
          <MainView />
        </div>
    </div>
    );
};

export default Dashboard;