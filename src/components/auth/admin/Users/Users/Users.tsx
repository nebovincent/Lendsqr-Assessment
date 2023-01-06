import React, { useContext, useState } from "react";
import classes from "src/components/auth/admin/Users/Users/Users.module.scss";
import usersVectorImg from "src/asset/dashboard/users.svg";
import activeUsersVectorImg from "src/asset/dashboard/active-users.svg";
import usersWithLoans from "src/asset/dashboard/users-with-loans.svg";
import usersWithSavings from "src/asset/dashboard/users-with-savings.svg";
import UsersTable from "src/components/auth/admin/Users/UsersTable/UsersTable";
import GeneralContext from "src/context/general-context";
import ReactPaginate from "react-paginate";
import { FetchedUser } from "src/types/types";


function Users() {
  const genCtx = useContext(GeneralContext);

  // for pagination

  const [itemsPerPage, setItemsPerPage] = useState(10);
  const items: FetchedUser[] | any = genCtx?.users;
  // const [items, setItems] = useState(genCtx?.users);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)

  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items?.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items?.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items?.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  // for pagination

  return (
    <div className={classes.main_wrapper}>
      <h1>Users</h1>
      <div className={classes.userboxes}>
        <div className={classes.userbox}>
          <img src={usersVectorImg} alt="usersVectorImg" />

          <h3>Users</h3>
          <p>2,453</p>
        </div>
        <div className={classes.userbox}>
          <img src={activeUsersVectorImg} alt="usersVectorImg" />

          <h3>Active Users</h3>
          <p>2,453</p>
        </div>
        <div className={classes.userbox}>
          <img src={usersWithLoans} alt="usersVectorImg" />

          <h3>Users with Loans</h3>
          <p>12,453</p>
        </div>
        <div className={classes.userbox}>
          <img src={usersWithSavings} alt="usersVectorImg" />

          <h3>Users with Savings</h3>
          <p>102,453</p>
        </div>
      </div>
      <UsersTable currentItems={currentItems} />
      {genCtx?.users && genCtx?.users?.length > 0 && (
        <div className={classes.pagination_main_wrapper}>
          <div className={classes.select_per_page}>
            <div className={classes.text}>Showing</div>
            <div className={classes.select_wrapper}>
              <select
                name="numberPerPage"
                id="numberPerPage"
                onChange={(e: any) => {
                  setItemsPerPage(e.target.value);
                }}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
            <div className={classes.text}>out of {genCtx?.users.length}</div>
          </div>

          <div className={classes.paginator_main_wrapper}>
            <ReactPaginate
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={undefined}
              className={classes.paginator}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Users;
