export interface Props {
  children?: any;
  onClick?: any;
  className?: any;
  userId?: string | any;
}
export interface FetchedUser {
  accountBalance?: string;
  accountNumber?: string;
  createdAt?: string | number | Date | any;
  education?: {
    duration?: string;
    employmentStatus?: string;
    level?: string;
    loanRepayment?: string;
    monthlyIncome?: string[];
    officeEmail: string;
    sector: string;
  };
  email?: string;
  guarantor?: {
    address: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  id?: string;
  lastActiveDate: string;
  orgName: string;
  phoneNumber: string;
  profile: {
    address: string;
    avatar: string;
    bvn: string;
    currency: string;
    firstName: string;
    gender: string;
    lastName: string;
    phoneNumber: string;
  };
  socials?: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  userName?: string;
}

export interface GeneralContextType {
  sideNav: boolean;
  onTogglesideNav: () => void;
  onRemoveSideNav: () => void;
  fetchAllUsers: () => void;
  users: FetchedUser[];
  userSelectModal: boolean;
  onToggleSelectUserModal: () => void;
  onRemoveUserSelectModal: () => void;
  showTableFilter: boolean;
  onToggleShowTableFilter: () => void;
  onRemoveTableFilter: () => void;
  adminDashboardSideNavSelected: string;
  onSelectDashboardSideNavArea: (section: string) => void;
  adminSelectedUserId: string;
  onAdminSelectedUserId: (id: string) => void;
  selectedUserId: string;
  onSetSelectedUserId: (id: string) => void;
  fetchParticularUser: (id: string) => void;
  selectedUser: FetchedUser;
}
interface SyntheticEvent<T> {
  currentTarget: EventTarget & T;
}
