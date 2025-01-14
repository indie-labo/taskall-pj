// Dashboard.js
import { useNavigate, Outlet, Link } from 'react-router-dom';

const Dashboard = ({ logout }: { logout: () => void }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
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