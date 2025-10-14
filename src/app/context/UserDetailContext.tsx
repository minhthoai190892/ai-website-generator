import { createContext } from "react";
import { UserDetailType } from "../utils/UserDetailType";
interface UserDetailContextType {
  userDetail: UserDetailType | null;
  setUserDetail: (userDetail: UserDetailType | null) => void;
}
export const UserDetailContext = createContext<UserDetailContextType | null>(
  null
);
