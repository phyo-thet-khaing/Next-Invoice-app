"use client";

import { useEffect } from "react";
import DashboardSideBar from "./DashboardSideBar";
import useAccountStore from "@/store/useAccountStore";
import { useRouter } from "next/navigation";

const DashboardLayout = ({ children }) => {
  // const { token } = useAccountStore();
  // console.log(token);

  // useEffect(() => {
  //   if (token) {
  //     console.log("you have been");
  //   } else {
  //     console.log("you do not have");
  //   }
  // }, [token]);

  // instanly no wait for data to show
  const { token } = useAccountStore.getState();

  const router = useRouter();

  useEffect(() => {
    if (!token) {
      return router.push("/login");
    }
  }, []);

  return (
    <>
      <main className="p-5 font-montserrat">{children} </main>

      {/* <div className="col-span-2">
          <DashboardSideBar />
        </div>
        <div className="col-span-10">{children}</div> */}
    </>
  );
};

export default DashboardLayout;
