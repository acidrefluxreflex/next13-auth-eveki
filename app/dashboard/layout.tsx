import ProtectedRoute from "../components/ProtectedRoute";
import SideMenu from "../components/SideMenu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (<ProtectedRoute>
    <div className="flex flex-row">
    <SideMenu />
    <div className="divider lg:divider-horizontal"/> 
    {children}
    </div>
    </ProtectedRoute>);
}
