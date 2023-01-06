import React, { useContext } from "react";
import classes from "src/components/auth/admin/UserDetails/UserDetailsContents/GeneralDetails/GeneralDetails.module.scss";
import GeneralContext from "src/context/general-context";

function GeneralDetails() {
  const genCtx = useContext(GeneralContext);

  const userDetails = genCtx?.selectedUser;
  return (
    <div className={classes.main_wrapper}>
      <div
        className={`${classes.child_element} ${classes.personal_info_wrapper}`}
      >
        <p className={classes.desc}>Personal Information</p>
        <div className={classes.data_wrapper}>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>full Name</div>
            <div
              className={classes.data}
            >{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName}`}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Phone Number</div>
            <div className={classes.data}>{userDetails?.phoneNumber}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Email Address</div>
            <div className={classes.data}>
              {userDetails?.email?.toLowerCase()}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Bvn</div>
            <div className={classes.data}>{userDetails?.profile?.bvn}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Gender</div>
            <div className={classes.data}>{userDetails?.profile?.gender}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Marital status</div>
            <div className={classes.data}>Single</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Children</div>
            <div className={classes.data}>None</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Type of residence</div>
            <div className={classes.data}>Parent’s Apartment</div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.child_element} ${classes.education_and_employment_wrapper}`}
      >
        <p className={classes.desc}>Education and Employment</p>
        <div className={classes.data_wrapper}>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>level of education</div>
            <div className={classes.data}>{userDetails?.education?.level}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>employment status</div>
            <div className={classes.data}>
              {userDetails?.education?.employmentStatus}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>sector of employment</div>
            <div className={classes.data}>{userDetails?.education?.sector}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Duration of employment</div>
            <div className={classes.data}>
              {userDetails?.education?.duration}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>office email</div>
            <div className={classes.data}>
              {userDetails?.education?.officeEmail}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Monthly income</div>
            <div className={classes.data}>
              {`${userDetails?.profile?.currency} ${userDetails?.education?.monthlyIncome?.[0]} - 
              ${userDetails?.profile?.currency} ${userDetails?.education?.monthlyIncome?.[0]}`}
            </div>
          </div>

          <div className={classes.singleData}>
            <div className={classes.data_desc}>loan repayment</div>
            {`${userDetails?.profile?.currency} ${userDetails?.education?.loanRepayment}`}
            <div className={classes.data}></div>
          </div>
        </div>
      </div>
      <div className={`${classes.child_element} ${classes.socials_wrapper}`}>
        <p className={classes.desc}>Socials</p>
        <div className={classes.data_wrapper}>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Twitter</div>
            <div className={classes.data}> {userDetails?.socials?.twitter}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Facebook</div>
            <div className={classes.data}>{userDetails?.socials?.facebook}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Instagram</div>
            <div className={classes.data}>
              {userDetails?.socials?.instagram}
            </div>
          </div>
        </div>
      </div>
      <div className={`${classes.child_element} ${classes.guarantor_wrapper}`}>
        <p className={classes.desc}>Guarantor</p>
        <div className={classes.data_wrapper}>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>full Name</div>
            <div
              className={classes.data}
            >{`${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName}`}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Phone Number</div>
            <div className={classes.data}>
              {userDetails?.guarantor?.phoneNumber}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Email Address</div>
            <div className={classes.data}>debby@gmail.com</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Relationship</div>
            <div className={classes.data}>Sister</div>
          </div>
        </div>
      </div>
      <div
        className={`${classes.child_element} ${classes.foot_personal_info_wrapper}`}
      >
        {/* <p className={classes.desc}>Personal Information</p> */}
        <div className={classes.data_wrapper}>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>full Name</div>
            <div
              className={classes.data}
            >{`${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName}`}</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Phone Number</div>
            <div className={classes.data}>
              {userDetails?.guarantor?.phoneNumber}
            </div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Email Address</div>
            <div className={classes.data}>debby@gmail.com</div>
          </div>
          <div className={classes.singleData}>
            <div className={classes.data_desc}>Relationship</div>
            <div className={classes.data}>Sister</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeneralDetails;
