import Header from "./Header";
import SideBar from "./SideBar";
import Welcome from "./Welcome";

const Dashboard = () => {
  return (
    <div className="relative [background:linear-gradient(#03123d,_#03123d),_linear-gradient(251.62deg,_#071047,_#fa1c8d)] w-full h-[696px] overflow-hidden text-left text-xs text-darkslateblue font-heading-semi-bold">
      {/* Header code Here */}
      <Header />
      {/* sidebar code here */}
      <SideBar />
      {/* Welcome page */}
      <Welcome />
    </div>
  );
};

export default Dashboard;
