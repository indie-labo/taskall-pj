import { useDispatch } from "react-redux"
import { useNavigate, Outlet, Link } from 'react-router-dom'
import { logout } from "@/features/userSlice"

const Dashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onLogout = () => dispatch(logout());
    const handleLogout = () => {
        onLogout();
        navigate('/login');
    };

    return (
        <div>
            <h2>Hello user welcome to Dashboard</h2>
            <h3>This page is protected</h3><br />
            <Link to="home">Go To HOME</Link>
            <Outlet />
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Dashboard;