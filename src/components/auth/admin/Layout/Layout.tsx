import React, { useContext, useEffect, useState } from "react";
import SideNav from "src/components/auth/admin/SideNav/SideNav";
import TopNav from "src/components/auth/admin/TopNav/TopNav";
import classes from "src/components/auth/admin/Layout/Layout.module.scss";
// import Users from "src/components/auth/admin/Users/Users/Users";
import GeneralContext from "src/context/general-context";
// import UserDetails from "src/components/auth/admin/UserDetails/UserDetails";
import { Props } from "src/types/types";
import { useLocation } from "react-router-dom";

function Layout({ children }: Props) {
  const [layout, setLayout] = useState(true);
  const [onLoginPage, setOnloginPage] = useState(false);
  const genCtx = useContext(GeneralContext);
  const router = useLocation();


  useEffect(() => {
    if (router.pathname === "/") {
      setLayout(false);
      setOnloginPage(true);
    }
  }, [router.pathname]);

  return (
    <div className={`${classes.main_wrapper} `}>
      <div className={`${!layout && classes.hideLayout}`}>
        <TopNav />
      </div>
      <div className={classes.main_content_wrapper}>
        <div
          className={`${classes.sideNav} ${
            genCtx?.sideNav ? classes.showSideNav : classes.hideSideNav
          } ${!layout && classes.hideLayout}`}
        >
          <SideNav />
        </div>

        <div
          className={`${classes.main_content} ${
            onLoginPage && classes.main_content_width_admin_dashboard
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
