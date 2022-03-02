import Navbar from "./Navbar";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Navbar />
      <div className="container">
        <div className="left-container">
          <div className="left-content">
            <SideNav />
          </div>
        </div>
        <div className="content">
          <div className="content-container">{children}</div>
        </div>
        <div className="right-container"></div>
      </div>
    </div>
  );
};

export default Layout;
