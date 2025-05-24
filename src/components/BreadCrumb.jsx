import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";
import React from "react";

const BreadCrumb = ({ currentPageName = "New Page", links = [] }) => {
  return (
    <div>
      <nav className="flex mb-5" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li className="inline-flex items-center">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <Home className="size-4" />
              Home
            </Link>
          </li>
          {links.map((el, index) => (
            <li key={index + "link"}>
              <div className="flex items-center">
                <ChevronRight className="size-4" />
                <Link
                  href={el.path}
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  {el.title}
                </Link>
              </div>
            </li>
          ))}
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="size-4" />
              <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                {currentPageName}
              </span>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
