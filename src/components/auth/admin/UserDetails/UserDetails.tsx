import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "src/components/auth/admin/UserDetails/UserDetails.module.scss";
import goBackIcon from "src/asset/dashboard/go-back-vector.svg";
import avatarImg from "src/asset/dashboard/UserDetails/avatar.svg";
import emptyStarIcon from "src/asset/dashboard/UserDetails/empty_star.svg";
import filledStarIcon from "src/asset/dashboard/UserDetails/filled_star.svg";
import GeneralDetails from "src/components/auth/admin/UserDetails/UserDetailsContents/GeneralDetails/GeneralDetails";
import { useParams } from "react-router-dom";
import GeneralContext from "src/context/general-context";
// import { FetchedUser } from "src/types/types";
import Documents from "./UserDetailsContents/Documents/Documents";
import BankDetails from "./UserDetailsContents/BankDetails/BankDetails";
import Loans from "src/components/auth/admin/UserDetails/UserDetailsContents/Loans/Loans";
import Savings from "src/components/auth/admin/UserDetails/UserDetailsContents/Savings/Savings";
import AppAndSystem from "src/components/auth/admin/UserDetails/UserDetailsContents/AppAndSystem/AppAndSystem";

function UserDetails() {
  const navigate = useNavigate();
  const genCtx = useContext(GeneralContext);
  let { id }: string | any = useParams();
  const userDetails = genCtx?.selectedUser;
  const [userDetailsContent, SetUserDetailsContent] = useState({
    AppAndSystem: false,
    BankDetails: false,
    Documents: false,
    GeneralDetails: true,
    Loans: false,
    Savings: false,
  });
  useEffect(() => {
    genCtx?.fetchParticularUser(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={classes.main_wrapper}>
      <div
        className={classes.back_to_users_wrapper}
        onClick={() => navigate(-1)}
      >
        <img src={goBackIcon} alt="goBackIcon" />

        <div className={classes.text}>Back to Users</div>
      </div>
      <div className={classes.actions_btn_wrapper}>
        <p className={classes.desc}>User Details</p>
        <div className={classes.actions_btns}>
          <button>Blacklist User</button>
          <button>Activate User</button>
        </div>
      </div>
      <div className={classes.content_main_wrapper}>
        <div className={classes.head_card_wrapper}>
          <div>
            <div className={classes.avatar_name_LendsQRaccount_wrapper}>
              <div className={classes.img_wrapper}>
                <img
                  src={
                    userDetails?.profile?.avatar
                      ? userDetails?.profile?.avatar
                      : avatarImg
                  }
                  alt="avatarImg"
                />
              </div>

              <div className={classes.name_account_wrapper}>
                <div
                  className={classes.name}
                >{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName}`}</div>
                <div className={classes.LendsQRaccount}>
                  {userDetails?.accountNumber}
                </div>
              </div>
            </div>
            <div className={classes.user_tier_wrapper}>
              <div className={classes.text}>User’s Tier</div>
              <div className={classes.stars_icon_wrapper}>
                <img src={emptyStarIcon} alt="emptyStarIcon" />
                <img src={filledStarIcon} alt="emptyStarIcon" />
                <img src={filledStarIcon} alt="emptyStarIcon" />
              </div>
            </div>
            <div className={classes.bank_account_wrapper}>
              <div className={classes.account_balance}>
                {`${userDetails?.profile?.currency} ${userDetails?.accountBalance}`}
              </div>
              <div className={classes.account_number}>
                9912345678/Providus Bank
              </div>
            </div>
          </div>

          <div>
            <div
              className={`${classes.general_details_nav} ${classes.nav_element} `}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: false,
                  BankDetails: false,
                  Documents: false,
                  GeneralDetails: true,
                  Loans: false,
                  Savings: false,
                });
              }}
            >
              General Details
            </div>
            <div
              className={`${classes.documents_nav} ${classes.nav_element} `}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: false,
                  BankDetails: false,
                  Documents: true,
                  GeneralDetails: false,
                  Loans: false,
                  Savings: false,
                });
              }}
            >
              Documents
            </div>
            <div
              className={`${classes.bank_details_nav} ${classes.nav_element} `}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: false,
                  BankDetails: true,
                  Documents: false,
                  GeneralDetails: false,
                  Loans: false,
                  Savings: false,
                });
              }}
            >
              Bank Details
            </div>
            <div
              className={`${classes.loans_nav} ${classes.nav_element}`}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: false,
                  BankDetails: false,
                  Documents: false,
                  GeneralDetails: false,
                  Loans: true,
                  Savings: false,
                });
              }}
            >
              Loans
            </div>
            <div
              className={`${classes.savings_nav} ${classes.nav_element}`}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: false,
                  BankDetails: false,
                  Documents: false,
                  GeneralDetails: false,
                  Loans: false,
                  Savings: true,
                });
              }}
            >
              Savings
            </div>
            <div
              className={`${classes.app_and_system_nav} ${classes.nav_element} `}
              onClick={() => {
                SetUserDetailsContent({
                  AppAndSystem: true,
                  BankDetails: false,
                  Documents: false,
                  GeneralDetails: false,
                  Loans: false,
                  Savings: false,
                });
              }}
            >
              App and System
            </div>
          </div>
        </div>
        <div className={classes.content_wrapper}>
          {userDetailsContent?.GeneralDetails && <GeneralDetails />}
          {userDetailsContent?.Documents && <Documents />}
          {userDetailsContent?.BankDetails && <BankDetails />}
          {userDetailsContent?.Loans && <Loans />}
          {userDetailsContent?.Savings && <Savings />}
          {userDetailsContent?.AppAndSystem && <AppAndSystem />}
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
