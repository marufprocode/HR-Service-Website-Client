import { Sidebar } from "flowbite-react";
import React from "react";
import {HiChartPie, HiCollection, HiLogout, HiDocumentAdd} from "react-icons/hi"
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <li>
              <Link to="/dashboard/add-service" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiDocumentAdd className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ml-3 whitespace-nowrap">Add Services</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/my-reviews" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                <HiCollection className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"/>
                <span className="flex-1 ml-3 whitespace-nowrap">My Reviews</span>
              </Link>
            </li>
            <Sidebar.Item icon={HiLogout}>
              Sign Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default SideBar;
