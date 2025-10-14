"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { UserDetailContext } from "./context/UserDetailContext";
import { UserDetailType } from "./utils/UserDetailType";
interface ProviderType {
  children: React.ReactNode;
}
export default function Provider({ children }: ProviderType) {
  const [userDetail, setUserDetail] = useState<UserDetailType | null>(null);
  useEffect(() => {
    const createNewUser = async () => {
      try {
        const result = await axios.post("/api/users", {});
        setUserDetail(result.data.user);
      } catch (error) {
        console.log("Error create new user", error);
      }
    };
    createNewUser();
  }, []);
  console.log(userDetail);

  return (
    <div>
      <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
        {children}
      </UserDetailContext.Provider>
    </div>
  );
}
