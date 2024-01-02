"use client";

import { getSidebarItems } from "@/app/constants/sidebarItems";
import { useAppSelector } from "@/app/redux";

import { FaRegUser } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import { HiOutlineServer } from "react-icons/hi2";
import { IoLockOpenOutline, IoLogOutOutline } from "react-icons/io5";
import { Icon } from "../icon";
import { NavLink } from "../nav-link";

export const Sidebar = () => {
  const { user } = useAppSelector((state) => state.auth) || {};
  return (
    <aside className="p-6 bg-white w-72 rounded">
      <div>
        <p className="text-sm text-deepGray uppercase">dashboard</p>
        <div className="space-y-2 mt-2">
          {user?.role &&
            getSidebarItems(user.role)?.map((item: any, key: number) => (
              <NavLink
                key={key}
                href={item?.path}
                extraClasses="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md"
                activeClassName="bg-[#E3DCFF] text-fill-primary "
              >
                <Icon icon={item.icon} />
                {item.name}
              </NavLink>
            ))}
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-deepGray uppercase">Media Management</p>
        <div className="space-y-2 mt-2">
          <NavLink
            href="/dashboard/file-manager"
            extraClasses="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md"
            activeClassName="bg-[#E3DCFF] text-fill-primary"
          >
            <HiOutlineServer size={18} />
            File Manager
          </NavLink>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-deepGray uppercase">Account Settings</p>
        <div className="space-y-2 mt-2">
          <NavLink
            href="/dashboard/profile"
            extraClasses="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md"
            activeClassName="bg-[#E3DCFF] text-fill-primary"
          >
            <FaRegUser size={18} />
            My Profile
          </NavLink>
          <NavLink
            href="/dashboard/settings"
            extraClasses="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md"
            activeClassName="bg-[#E3DCFF] text-fill-primary"
          >
            <GoGear size={18} />
            Edit Profile
          </NavLink>

          <NavLink
            href="/dashboard/security"
            extraClasses="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md"
            activeClassName="bg-[#E3DCFF] text-fill-primary"
          >
            <IoLockOpenOutline size={18} />
            Security
          </NavLink>

          <button className="text-sm text-primary flex items-center gap-2 px-3 py-2 rounded-md">
            <IoLogOutOutline size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};
