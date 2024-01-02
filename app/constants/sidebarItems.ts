import { AiOutlineHome } from "react-icons/ai";
import { BiCube } from "react-icons/bi";
import { MdOutlineCollectionsBookmark } from "react-icons/md";

import { USER_ROLES } from ".";

export const instructorMenus = [];

export const sidebarItems = {
  instrutor: [
    {
      name: "Dashboard",
      path: "/instructor",
      icon: AiOutlineHome,
    },
    {
      name: "My Courses",
      path: "/instructor/courses",
      icon: MdOutlineCollectionsBookmark,
    },
    {
      name: "Assignments",
      path: "/instructor/assignments",
      icon: BiCube,
    },
  ],
  admin: [],
  user: [],
};

export const getSidebarItems = (role: string) => {
  if (role !== undefined) {
    if (role === USER_ROLES.ADMIN) {
      return sidebarItems.admin;
    } else if (role === USER_ROLES.INSTRUCTOR) {
      return sidebarItems.instrutor;
    } else if (role === USER_ROLES.USER) {
      return sidebarItems.user;
    }
  } else {
    return [];
  }
};
