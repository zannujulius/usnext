import React from "react";
import Link from "next/link";
import { MdAccountBalanceWallet } from "react-icons/md";

function SideNav({}) {
  return (
    <div className="sidenav-container">
      <Link href={"/"} className="sidenav-link">
        <div className="sidenav-item">
          <div className="sidenav-item__img-cover">
            <MdAccountBalanceWallet size={17} color={"red"} />
          </div>
          <div className="sidenav-item__title">Portfel</div>
        </div>
      </Link>
    </div>
  );
}

export default SideNav;
