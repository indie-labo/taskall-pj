import { useDispatch } from "react-redux"
import { useNavigate, Outlet, Link } from 'react-router-dom'
import { logout } from "@/features/userSlice"
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase"

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logout());

    return (
        <div>
            <h2>Hello user welcome to Dashboard</h2>
            <h3>This page is protected</h3><br />
            <Link to="home">Go To HOME</Link>
            <Outlet />
            <button onClick={async () => signOut(auth)}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;