import React, { useContext } from "react";
import classes from "src/components/auth/admin/TopNav/TopNav.module.scss";
import { FiAlignLeft, FiX } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillCaretDownFill } from "react-icons/bs";
import logo from "src/asset/dashboard/logo.png";
import admin_user_img from "src/asset/dashboard/admin-user-img.png";
import GeneralContext from "src/context/general-context";
import { useNavigate } from "react-router-dom";

function TopNav() {
  const genCtx = useContext(GeneralContext);
  const location = useNavigate();
  return (
    <div className={classes.main_wrapper}>
      <div className={classes.first_child}>
        <div
          className={classes.sideNav_dropdown_icon}
          onClick={() => {
            genCtx?.onTogglesideNav();
          }}
        >
          {genCtx?.sideNav ? <FiX /> : <FiAlignLeft />}
        </div>
        <img
          src={logo}
          alt="logo"
          className={classes.logo_img}
          onClick={() => location("/users")}
        />
      </div>
      <div className={classes.second_child}>
        <div className={classes.search_bar_wrapper}>
          <input placeholder="Search for anything" type="text" required />
          <div className={classes.search_icon_wrapper}>
            <AiOutlineSearch className={classes.search_icon} />
          </div>
        </div>
      </div>
      <div className={classes.third_child}>
        <p className={classes.docs}>Docs</p>
        <IoNotificationsOutline className={classes.notification_icon} />
        <img
          src={admin_user_img}
          alt="admin-user-img"
          className={classes.avatar_img}
        />
        <p className={classes.admin_name}>Adedeji</p>
        <BsFillCaretDownFill
          className={classes.profile_options_dropdown_icon}
        />
      </div>
    </div>
  );
}

export default TopNav;
