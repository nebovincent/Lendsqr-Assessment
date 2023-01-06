import React, { useContext, useState } from "react";
import classes from "src/components/auth/admin/Users//UsersTable/UsersTable.module.scss";
import { BiFilter, BiDotsVerticalRounded } from "react-icons/bi";
import GeneralContext from "src/context/general-context";
import { FetchedUser } from "src/types/types";
import moment from "moment";
import UserSelectModal from "src/components/auth/admin/Modals/UserSelectModal/UserSelectModal";
import FilterUsersModal from "src/components/auth/admin/Modals/FilterUserModal/FilterUsersModal";
import useOutsideClick from "src/hooks/useOutsideClick";
// import OutsideClickHandler from "react-outside-click-handler";

function UsersTable({ currentItems }: any) {
  const genCtx = useContext(GeneralContext);
  // const [users, setUsers] = useState(genCtx?.users);
  const [userSelectModal, setUserSelectModal] = useState<null | string>(null);
  const onShowUserSelectModal = (id: string) => {
    console.log(id, userSelectModal);
    if (id === userSelectModal) {
      setUserSelectModal(null);
    } else {
      setUserSelectModal(id);
    }
  };

  const onHideUserSelectModal = () => {
    console.log("here");
    setUserSelectModal(null);
  };
  const ref = useOutsideClick(onHideUserSelectModal);

  return (
    <div className={classes.table_wrapper}>
      {genCtx?.showTableFilter && (
        <div className={classes.table_filter}>
          <FilterUsersModal />
        </div>
      )}
      {genCtx?.users.length === 0 ? (
        <div className={classes.no_users_yet}>No Users Available</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Organization</div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Username</div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Email </div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Phone Number</div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Date Joined</div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
              <th scope="col">
                <div>
                  <div className={classes.th_text}>Status</div>
                  <div
                    className={classes.icon_wrapper}
                    onClick={() => {
                      genCtx?.onToggleShowTableFilter();
                    }}
                  >
                    <BiFilter />
                  </div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((user: FetchedUser) => {
              return (
                <tr key={user.id}>
                  <td data-label="Organization">{user.orgName}</td>
                  <td data-label="Username">{user.userName}</td>
                  <td data-label="Email">{user.email}</td>
                  <td data-label="Phone-Number">{user.phoneNumber}</td>
                  <td data-label="Date-Joined">
                    {moment(new Date(user?.createdAt)).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </td>
                  <td
                    data-label="Status"
                    className={classes.user_status_and_edit}
                  >
                    <div
                      className={`${classes.user_status} ${classes.user_status_pending}`}
                    >
                      <div>Pending</div>
                    </div>

                    {/* <OutsideClickHandler
                      onOutsideClick={() => {
                        console.log("here....");
                        onHideUserSelectModal();
                      }}
                    > */}
                    <div className={classes.select_user_wrapper}>
                      <div
                        className={classes.select_user_icon}
                        onClick={() => onShowUserSelectModal(user.id || "")}
                      >
                        <BiDotsVerticalRounded />
                      </div>

                      {userSelectModal === user.id && (
                        <div className={classes.select_user_modal} ref={ref}>
                          <UserSelectModal userId={user.id} />
                        </div>
                      )}
                    </div>
                    {/* </OutsideClickHandler> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UsersTable;
