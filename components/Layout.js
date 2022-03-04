import Navbar from "./Navbar";
import SideNav from "./SideNav";
import { BsCheckLg } from "react-icons/bs";
import { useState } from "react";

const Layout = ({ children }) => {
  const data = [
    {
      title: "",
      caption: "",
    },
  ];
  const [lci, setLci] = useState(0);
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
          {[1, 2, 3, 4, 5].map((_, i) => (
            <div className="rcc" key={i} onClick={() => setLci(i)}>
              {lci == i ? (
                <div className="rcic">
                  <BsCheckLg
                    size={8}
                    style={{
                      fill: "white",
                    }}
                  />
                </div>
              ) : (
                <div className="rcic inactive"></div>
              )}
              <div className="rcctc">
                <div className="rcct">Otwarcie sprawy</div>
                <div className="rccct">Gotowe</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Layout;
