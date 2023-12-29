import Link from "next/link";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { GoGear } from "react-icons/go";
import { IoLockOpenOutline, IoLogOutOutline } from "react-icons/io5";
import { LuBook } from "react-icons/lu";

export const Sidebar = () => {
  return (
    <aside className="p-6 bg-white w-72 rounded">
      <div>
        <p className="text-sm text-deepGray uppercase">dashboard</p>
        <div className="space-y-2 mt-2">
          <Link
            href="/profile"
            className="font-semibold text-fill-primary flex items-center gap-2 bg-[#E3DCFF] px-3 py-2 rounded-md"
          >
            <AiOutlineHome size={18} />
            Dashboard
          </Link>

          <Link
            href="/profile"
            className="text-primary flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <FaRegUser size={18} />
            My Profile
          </Link>
          <Link
            href="/profile"
            className="text-primary flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <LuBook size={18} />
            Enrolled Courses
          </Link>
        </div>
      </div>

      <div className="mt-5">
        <p className="text-sm text-deepGray uppercase">Account Settings</p>
        <div className="space-y-2 mt-2">
          <Link
            href="/settings"
            className="text-primary flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <GoGear size={18} />
            Edit Profile
          </Link>
          <Link
            href="/profile"
            className="text-primary flex items-center gap-2 px-3 py-2 rounded-md"
          >
            <IoLockOpenOutline size={18} />
            Security
          </Link>
          <button className="text-primary flex items-center gap-2 px-3 py-2 rounded-md">
            <IoLogOutOutline size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
};
