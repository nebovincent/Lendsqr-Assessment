import React from "react";
import classes from "src/components/auth/admin/Users/SelectUserDropDown/SelectUserDropDown.module.scss";
import { BiDotsVerticalRounded } from "react-icons/bi";
// import UserSelectModal from "src/components/auth/admin/Modals/UserSelectModal/UserSelectModal";
import { SlEye } from "react-icons/sl";
import { FiUserX } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";

function SelectUserDropDown() {
  return (
    <div className={classes.dropdown_wrapper}>
      <button className={classes.dropdown_btn_wrapper}>
        <BiDotsVerticalRounded />
      </button>

      <div className={classes.content_main_wrapper}>
        <div className={classes.content_main_wrapper_child}>
          <div className={classes.content_row_wrapper}>
            <div className={classes.icon_wrapper}>
              <SlEye />
            </div>
            <div className={classes.content_text}>View Details</div>
          </div>
          <div className={classes.content_row_wrapper}>
            <div className={classes.icon_wrapper}>
              <FiUserX />
            </div>
            <div className={classes.content_text}>Blacklist User</div>
          </div>
          <div className={classes.content_row_wrapper}>
            <div className={classes.icon_wrapper}>
              <GrUserExpert />
            </div>
            <div className={classes.content_text}>Activate User</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectUserDropDown;
