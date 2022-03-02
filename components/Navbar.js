import { IoSearchOutline } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { BiChat } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { MdVerified, MdOutlineLogout } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import { IconContext } from "react-icons";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbrand">
          <div className="nav-brand__logo"></div>
          <div className="nav-brand__title"> </div>
        </div>
        <div className="nav-middle">
          <div className="nav-search__icon">
            <BsSearch size={16} color="blue" />
          </div>
          <input type="search" placeholder={"Szukaj"} className="nav-search" />
        </div>
        <div className="nav-end">
          <div className="nav-activity__cover">
            <div className="nav-message__icon-cover">
              <BiChat size={22} className="svg" />
            </div>
            <div className="nav-notification__icon-cover">
              <IoNotificationsOutline size={20} color={"red"} />
              <div className="notification-bg"></div>
            </div>
          </div>
          <div className="nav-profile__cover">
            <div className="nav-profile__img">
              <div className="nav-profile__img-inner">
                <div className="nav-profile__img-inner__title">AK</div>
              </div>
            </div>
            <div className="nav-profile__name-cover">
              <div className="nav-profile__title">Adam Kowalski</div>
              <div className="nav-profile__title-cover">
                <div className="nav-profile__icon__cover">
                  <MdVerified size={14} className="verilogo" />
                </div>
                <div className="nav-profile__username">Zweryfikowany</div>
              </div>
            </div>
            <div className="nav-profile__dd-icon">
              <IoIosArrowDown size={18} className="arrowd" />
            </div>
            <div className="nav-profile__logout-btn__cover">
              <FiLogOut size={20} color={"#eeeeee"} className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
