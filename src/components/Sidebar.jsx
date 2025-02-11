import {
  HomeIcon,
  UsersIcon,
  UserPlusIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

import { NavLink } from "react-router-dom";

const sidebarLinks = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
  },
  {
    name: "New Admission",
    href: "/newadmission",
    icon: UserPlusIcon,
  },
  {
    name: "All Students",
    href: "/allstudents",
    icon: UsersIcon,
  },
  {
    name: "Attendance",
    href: "/attendance",
    icon: ShieldCheckIcon,
  },
];

function Sidebar() {
  return (
    <div className="sticky top-0 flex h-screen w-full flex-col justify-between border-r border-gray-200 bg-emerald-700 px-1 py-5 xl:py-12 xl:px-2">
      <div className="ie-logo px-3 py-0 text-center xl:text-left">
        <div className="text-xl font-medium text-gray-900 xl:px-3 xl:text-2xl">
          <span className="block xl:hidden">AD</span> 
          <span className="hidden xl:block">Admin</span>
        </div>
      </div>
      <div className="ie-menu mt-8 h-full">
        <div className="flex flex-col items-center gap-3 p-1 xl:items-stretch xl:px-3">
          {sidebarLinks.map((item) => {
            return (
              <NavLink to={item.href} key={item.name} className="group">
                {({ isActive }) => {
                  return (
                    <span
                      className={`flex items-center gap-3 rounded-md px-3 py-2 transition-all ${
                        isActive ? "bg-gray-100" : "group-hover:bg-gray-50"
                      }`}
                    >
                      <item.icon
                        className={`h-5 stroke-2 ${
                          isActive
                            ? "stroke-blue-700"
                            : "stroke-black group-hover:stroke-blue-700"
                        }`}
                      />
                      <span
                        className={`hidden text-base font-semibold xl:block ${
                          isActive
                            ? "text-gray-900"
                            : "text-black-500 group-hover:text-gray-900"
                        }`}
                      >
                        {item.name}
                      </span>
                    </span>
                  );
                }}
              </NavLink>
            );
          })}
        </div>
      </div>
      <div className="ie-user hidden items-center gap-2 px-3 xl:flex">
        <UserCircleIcon className="h-12 stroke-gray-700 stroke-1 group-hover:stroke-blue-700" />
        <div className="ie-userDetails">
          <div className="flex justify-between gap-2">
            <span className="text-base font-semibold text-gray-700">Admin</span>
            <div className="group flex cursor-pointer items-center gap-1 rounded-full bg-gray-100 px-2 py-1 transition-all hover:bg-gray-50">
              <ArrowLeftOnRectangleIcon className="h-4 stroke-gray-700 stroke-[1.5] group-hover:stroke-red-700" />
              <span className="text-xs font-medium text-gray-700 group-hover:text-red-700">
                Logout
              </span>
            </div>
          </div>
          <span className="mt-1 block text-sm font-medium text-gray-700">
            Logged in as Admin
          </span>
        </div>
      </div>
      <div className="ie-userMobile p-1 xl:hidden">
        <span className="flex flex-col items-center rounded-md bg-gray-50 px-3 py-2">
          <ArrowLeftOnRectangleIcon className="h-5 stroke-gray-700 stroke-2 group-hover:stroke-red-700" />
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
