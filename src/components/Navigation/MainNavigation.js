import React, { useState } from "react";
import Header from "./Header/Header";
import SideBarNavigation from "./SideBar/SideBarNavigation";
import "./MainNavigation.css";

export default function MainNavigation() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const openSidebarHandler = () => {
    setIsOpenSidebar(true);
  };
  const closeSidebarHandler = () => {
    setIsOpenSidebar(false);
  };
  return (
    <div>
      <div className="header-wrapper">
        <Header openSidebar={openSidebarHandler} />
      </div>
      <SideBarNavigation
        closeSidebar={closeSidebarHandler}
        isOpen={isOpenSidebar}
      />
    </div>
  );
}
