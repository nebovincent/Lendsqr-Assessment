import React, { useState, useEffect } from "react";
import { Props, FetchedUser, GeneralContextType } from "src/types/types";
// import { useLocation } from "react-router-dom";
// const GeneralContext = React.createContext({
//   sideNav: false,
//   onTogglesideNav: () => {},
//   onRemoveSideNav: () => {},
//   fetchAllUsers: () => {},
//   users: [{}],
// });

const GeneralContext = React.createContext<GeneralContextType | null>(null);

export const GeneralContextProvider = (props: Props) => {
  const [sideNav, setSideNav] = useState(false);
  const [users, setUsers] = useState<FetchedUser[]>([]);
  const [userSelectModal, setUserSelectModal] = useState(false);
  const [showTableFilter, setShowTableFilter] = useState(false);
  const [adminDashboardSideNavSelected, setAdminDashboardSideNavSelected] =
    useState("users");
  const [adminSelectedUserId, setAdminSelectedUserId] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState<any>({});

  const onTogglesideNav = () => {
    setSideNav(!sideNav);
  };
  const fetchAllUsers = async () => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
    };
    const response = await fetch(
      "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users",
      {
        method: "GET",
        headers: headers,
      }
    );
    const res = await response.json();

    if (typeof res == "object") {
      setUsers(res);
    }
    // console.log(res);
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);
  const onRemoveSideNav = () => {
    setSideNav(false);
  };
  const onToggleSelectUserModal = () => {
    setUserSelectModal(!userSelectModal);
  };
  const onRemoveUserSelectModal = () => {
    setUserSelectModal(false);
  };
  const onToggleShowTableFilter = () => {
    setShowTableFilter(!showTableFilter);
  };

  const onRemoveTableFilter = () => {
    setShowTableFilter(false);
  };

  const onSelectDashboardSideNavArea = (section: string) => {
    setAdminDashboardSideNavSelected(section);
  };
  const onAdminSelectedUserId = (id: string) => {
    setAdminSelectedUserId(id);
  };

  const onSetSelectedUserId = (id: string) => {
    setSelectedUserId(id);
  };

  const fetchParticularUser = async (id: string) => {
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
    };

    const response = await fetch(
      `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`,
      {
        method: "GET",
        headers: headers,
      }
    );

    const res = await response.json();

    if (typeof res == "object") {
      setSelectedUser(res);
    }
  };

  return (
    <GeneralContext.Provider
      value={{
        sideNav,
        onTogglesideNav,
        onRemoveSideNav,
        fetchAllUsers,
        users,
        userSelectModal,
        onRemoveUserSelectModal,
        onToggleSelectUserModal,
        showTableFilter,
        onToggleShowTableFilter,
        onRemoveTableFilter,
        adminDashboardSideNavSelected,
        onSelectDashboardSideNavArea,
        adminSelectedUserId,
        onAdminSelectedUserId,
        selectedUserId,
        onSetSelectedUserId,
        fetchParticularUser,
        selectedUser,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
