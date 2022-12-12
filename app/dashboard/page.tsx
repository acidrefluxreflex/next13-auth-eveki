import ProtectedRoute from "../components/ProtectedRoute";
import LogoutButton from "../components/Logout";
import Link from "next/link";

const Dashboard = () => {
  return (
 <div>
      <div>This route is protected</div>
      <LogoutButton />
      <Link href="/dashboard/setting">
        setting
      </Link>
      </div>
  );
};

export default Dashboard;
