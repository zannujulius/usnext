import React from "react";
import Link from "next/link";
import { MdAccountBalanceWallet, MdAdd, MdBarChart, MdMap, MdNavigation, MdShoppingBasket } from "react-icons/md";

function SideNav({}) {
  return (
    <div className="sidenav-container">
      <Link href={"/"} className="sidenav-link">
        <div className="sidenav-item active">
          <div className="sidenav-item__img-cover">
            <MdAccountBalanceWallet size={17} />
          </div>
          <div className="sidenav-item__title">Portfel</div>
        </div>
      </Link>
      <Link href={"/"} className="sidenav-link">
        <div className="sidenav-item">
          <div className="sidenav-item__img-cover">
            <MdAdd size={17} />
          </div>
          <div className="sidenav-item__title">Zolog sprowg</div>
        </div>
      </Link>
      <details className="tree-nav__item is-expandable" open>
        <summary className="tree-nav__item-title">
        <div className="sidenav-item__img-cover">
          <MdShoppingBasket size={17} />
        </div>
        Sprowy
        </summary>
        <div className="tree-nav__item">
        <Link href={"/"} className="sidenav-link">
          <div className="sidenav-item">
            <div className="sidenav-item__img-cover">
            </div>
            <div className="sidenav-item__title">#Zobotrending</div>
          </div>
        </Link>
        <Link href={"/"} className="sidenav-link">
          <div className="sidenav-item">
            <div className="sidenav-item__img-cover">
            </div>
            <div className="sidenav-item__title">#Whietztrending</div>
          </div>
        </Link>
        </div>
      </details>

      <Link href={"/"} className="sidenav-link">
        <div className="sidenav-item">
          <div className="sidenav-item__img-cover">
            <MdMap size={17} />
          </div>
          <div className="sidenav-item__title">Gieldo</div>
        </div>
      </Link>
      <details className="tree-nav__item is-expandable" open>
        <summary className="tree-nav__item-title">
        <div className="sidenav-item__img-cover">
          <MdBarChart size={17} />
        </div>
        Monitoring
        </summary>
        <div className="tree-nav__item">
        <Link href={"/"} className="sidenav-link">
          <div className="sidenav-item">
            <div className="sidenav-item__img-cover">
            </div>
            <div className="sidenav-item__title">Mdj billions portfolio</div>
          </div>
        </Link>
        <Link href={"/"} className="sidenav-link">
          <div className="sidenav-item">
            <div className="sidenav-item__img-cover">
            </div>
            <div className="sidenav-item__title">Reporty firm</div>
          </div>
        </Link>
        <Link href={"/"} className="sidenav-link">
          <div className="sidenav-item">
            <div className="sidenav-item__img-cover">
            </div>
            <div className="sidenav-item__title">Reporty sprew</div>
          </div>
        </Link>
        </div>
      </details>

      <div className="hashtag-nav">
        <div className="hashtag-nav__container">
          <div className="hashtag-nav__title">
            Twojie powiadama
          </div>
          <div className="hashtag-nav__content">
            #system #zdoraskinia #profit #wiandonicci #prizzipomanie
          </div>
        </div>
        <div className="hashtag-nav__container">
          <div className="hashtag-nav__title">
            Edukacjio
          </div>
          <div className="hashtag-nav__content">
            #prandaca #pomenac #szchidilone
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
