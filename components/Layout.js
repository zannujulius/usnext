import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { BsCheckLg } from "react-icons/bs";

const Layout = ({ children }) => {
  const data = [
    {
      title: "",
      caption: "",
    },
  ];
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "fixed",
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
        <div className="right-container">
          <div className="right-title">ETAPY SPRAWY</div>
          {[1, 2, 3].map((_, i) => (
            <div className="rcc" key={i}>
              <div className="rcic">
                <BsCheckLg
                  size={8}
                  style={{
                    fill: "white",
                  }}
                />
              </div>
              <div className="rcctc">
                <div className="rcct">Otwarcie sprawy</div>
                <div className="rccct">Gotowe</div>
              </div>
            </div>
          ))}
          {[1, 2].map((_, i) => (
            <div className="rcc" key={i}>
              <div
                className="rcic"
                style={{
                  background: "transparent",
                  border: "1px solid #ddd",
                  padding: "10px",
                }}
              >
                {/* <BsCheckLg
                  size={8}
                  style={{
                    fill: "white",
                  }}
                /> */}
              </div>
              <div className="rcctc">
                <div className="rcct">Otwarcie sprawy</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
