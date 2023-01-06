import React from "react";
import classes from "src/components/auth/admin/Modals/FilterUserModal/FilterUsersModal.module.scss";

function FilterUsersModal() {
  // const [dateInputFocused, setDateInputFocused] = useState(false);
  const onSubmitFilterForm = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };
  return (
    <div className={classes.main_wrapper}>
      <form onSubmit={() => onSubmitFilterForm}>
        <div className={classes.form_group}>
          <label>Organization</label>
          <div className={classes.select_wrapper}>
            <select name="organizations" id="organizations">
              <option value="" defaultValue="select">
                Select
              </option>
              <option value="Lendsqr">Lendsqr</option>
              <option value="Lapo"></option>
              <option value="Millennial Trust">Millennial Trust</option>
              <option value="Lendigo">Lendigo</option>
            </select>
          </div>
        </div>
        <div className={classes.form_group}>
          <label>Username</label>
          <input type="text" placeholder="User" />
        </div>
        <div className={classes.form_group}>
          <label>Email</label>
          <input type="email" placeholder="Email" />
        </div>
        <div className={classes.form_group}>
          <label>Date</label>
          <div className={classes.input_wrapper}>
            <input
              // onFocus={() => setDateInputFocused(true)}
              // onBlur={() => setDateInputFocused(false)}
              // type={dateInputFocused ? "date" : "text"}
              type="date"
              placeholder="Date"
            />
          </div>
        </div>
        <div className={classes.form_group}>
          <label>Phone Number</label>
          <input type="text" placeholder="Phone Number" />
        </div>
        <div className={classes.form_group}>
          <label>Status</label>
          <div className={classes.select_wrapper}>
            <select name="organizations" id="status">
              <option value="" defaultValue="select">
                Select
              </option>
              <option value="Inactive">Inactive</option>
              <option value="Pending">Pending</option>
              <option value="Blacklisted">Blacklisted</option>
              <option value="Active">Active</option>
            </select>
          </div>
        </div>
        <div className={classes.form_btns}>
          <button type="submit">Reset</button>
          <button>Filter</button>
        </div>
      </form>
    </div>
  );
}

export default FilterUsersModal;
