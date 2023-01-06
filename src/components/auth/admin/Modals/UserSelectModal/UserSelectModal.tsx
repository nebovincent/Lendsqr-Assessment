import React, { useContext} from "react";
import classes from "src/components/auth/admin/Modals/UserSelectModal/UserSelectModal.module.scss";
import { SlEye } from "react-icons/sl";
import { FiUserX } from "react-icons/fi";
import { GrUserExpert } from "react-icons/gr";
import GeneralContext from "src/context/general-context";
import { Props } from "src/types/types";
import { useNavigate } from "react-router-dom";
// import useOutsideClick from "src/hooks/useOutsideClick";
// import OutsideClickHandler from "react-outside-click-handler";

function UserSelectModal({ userId }: Props) {
  const genCtx = useContext(GeneralContext);
  const navigate = useNavigate();
 

  // const ref = useOutsideClick(genCtx?.onRemoveUserSelectModal);
  return (
    <div className={classes.main_wrapper}>
      <div className={classes.main_wrapper_child}>
        <div
          className={classes.content_row_wrapper}
          onClick={() => {
            genCtx?.onAdminSelectedUserId(userId);
            navigate(`/user-details/${userId}`);
            console.log("got here");
          }}
        >
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
  );
}

export default UserSelectModal;
