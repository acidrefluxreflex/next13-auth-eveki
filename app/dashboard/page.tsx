import ProtectedRoute from "../components/ProtectedRoute";
import LogoutButton from "../components/Logout";

const Dashboard = () => {
  return (
    <ProtectedRoute>
      <div>This route is protected</div>
      <LogoutButton />
    </ProtectedRoute>
  );
};

export default Dashboard;
