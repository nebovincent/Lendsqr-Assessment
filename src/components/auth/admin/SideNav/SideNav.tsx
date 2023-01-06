import React from "react";
import classes from "src/components/auth/admin/SideNav/SideNav.module.scss";
import switch_org_svg from "src/asset/dashboard/sideNav/switch-org.svg";
import dashboard_svg from "src/asset/dashboard/sideNav/dashboard.svg";
import users_svg from "src/asset/dashboard/sideNav/users.svg";
// import guarantors_svg from "src/asset/dashboard/sideNav/guarantors.svg";
import loans_svg from "src/asset/dashboard/sideNav/loans.svg";
import decision_models_svg from "src/asset/dashboard/sideNav/decision-models.svg";
import savings_svg from "src/asset/dashboard/sideNav/savings.svg";
import loan_requests_svg from "src/asset/dashboard/sideNav/loan_requests.svg";
import white_list_svg from "src/asset/dashboard/sideNav/whitelist.svg";
import karma_svg from "src/asset/dashboard/sideNav/karma.svg";
import organization_svg from "src/asset/dashboard/sideNav/organization.svg";
import loan_products_svg from "src/asset/dashboard/sideNav/loan-products.svg";
import savings_products_svg from "src/asset/dashboard/sideNav/savings-products.svg";
import fees_and_charges_svg from "src/asset/dashboard/sideNav/fees-and-charges.svg";
import transactions_svg from "src/asset/dashboard/sideNav/transactions.svg";
import services_svg from "src/asset/dashboard/sideNav/services.svg";
import service_account_svg from "src/asset/dashboard/sideNav/service-account.svg";
import settlements_svg from "src/asset/dashboard/sideNav/settlements.svg";
import reports_svg from "src/asset/dashboard/sideNav/reports.svg";
import preferences_svg from "src/asset/dashboard/sideNav/preferences.svg";
import fees_and_pricing_svg from "src/asset/dashboard/sideNav/fees-and-pricing.svg";
import audit_logs_svg from "src/asset/dashboard/sideNav/audit-logs.svg";
// import GeneralContext from "src/context/general-context";
import FadeIn from "react-fade-in";
import { useNavigate } from "react-router-dom";

function SideNav() {
  // const genCtx = useContext(GeneralContext);
  const location = useNavigate();

  return (
    <div className={classes.main_wrapper}>
      <div className={classes.main_child}>
        <FadeIn delay={200}>
          <div className={classes.select_org_wrapper}>
            <img src={switch_org_svg} alt="switch_org_svg" />
            <select name="organizations" id="organizations">
              <option value="" defaultValue="Switch Organization">
                Switch Organization
              </option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lapo">Lapo</option>
              <option value="Millennial Trust">Millennial Trust</option>
              <option value="Lendigo">Lendigo</option>
            </select>
          </div>
          <div className={classes.dashboard_wrapper}>
            <div className={classes.icon_wrapper}>
              <img src={dashboard_svg} alt="dashboard_svg" />
            </div>
            <div className={classes.desc} onClick={() => location("/users")}>
              Dashboard
            </div>
          </div>

          <div className={classes.admin_nav_section}>
            <p className={classes.text}>Customers</p>
            <div
              className={classes.admin_nav_sub_section}
              onClick={() => {
                location("users");
              }}
            >
              <div className={classes.icon_wrapper}>
                <img src={users_svg} alt="users_svg" />
              </div>
              <div className={classes.desc}>Users</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={users_svg} alt="users_svg" />
              </div>
              <div className={classes.desc}>Guarantors</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={loans_svg} alt="loans_svg" />
              </div>
              <div className={classes.desc}>Loans</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={decision_models_svg} alt="decision_models_svg" />
              </div>
              <div className={classes.desc}>Decision Models</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={savings_svg} alt="savings_svg" />
              </div>
              <div className={classes.desc}>Savings</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={loan_requests_svg} alt="loan_requests_svg" />
              </div>
              <div className={classes.desc}>Loan Requests</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={white_list_svg} alt="white_list_svg" />
              </div>
              <div className={classes.desc}>Whitelist</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={karma_svg} alt="karma_svg" />
              </div>
              <div className={classes.desc}>Karma</div>
            </div>
          </div>
          <div className={classes.admin_nav_section}>
            <p className={classes.text}>Businesses</p>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={organization_svg} alt="organization_svg" />
              </div>
              <div className={classes.desc}>Organization</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={loan_products_svg} alt="loan_products_svg" />
              </div>
              <div className={classes.desc}>Loan Products</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={savings_products_svg} alt="savings_products_svg" />
              </div>
              <div className={classes.desc}>Savings Products</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={fees_and_charges_svg} alt="fees_and_charges_svg" />
              </div>
              <div className={classes.desc}>Fees and Charges</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={transactions_svg} alt="transactions_svg" />
              </div>
              <div className={classes.desc}>Transactions</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={services_svg} alt="services_svg" />
              </div>
              <div className={classes.desc}>Services</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={service_account_svg} alt="service_account_svg" />
              </div>
              <div className={classes.desc}>Service Account</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={settlements_svg} alt="settlements_svg" />
              </div>
              <div className={classes.desc}>Settlements</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={reports_svg} alt="reports_svg" />
              </div>
              <div className={classes.desc}>Reports</div>
            </div>
          </div>
          <div className={classes.admin_nav_section}>
            <p className={classes.text}>Settings</p>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={preferences_svg} alt="preferences_svg" />
              </div>
              <div className={classes.desc}>Preferences</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={fees_and_pricing_svg} alt="fees_and_pricing_svg" />
              </div>
              <div className={classes.desc}>Fees and Pricing</div>
            </div>
            <div className={classes.admin_nav_sub_section}>
              <div className={classes.icon_wrapper}>
                <img src={audit_logs_svg} alt="audit_logs_svg" />
              </div>
              <div className={classes.desc}>Audit Logs</div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default SideNav;
