'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowsSpin } from 'react-icons/fa6';
import { MdOutlineTask } from 'react-icons/md';
import { CiStopwatch } from 'react-icons/ci';
import Image from 'next/image';

import TaskDetailsHeader from './TaskDetailsHeader';

const TaskDetails = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    router.push('/');
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="relative w-full">
      {/* Background Banner */}
      <Image
        src="/images/banner-img.png"
        alt="Dashboard Banner"
        width={1920}
        height={600}
        className="w-full h-[200px] "
      />

      {/* Navbar on top of image */}
      <nav className="absolute top-0 left-0 w-full px-[60px] pt-[47px] flex justify-between items-center z-10">
        {/* Title */}
        <div className="text-xl font-bold  flex items-center gap-2 text-white">
          <CiStopwatch className="text-2xl text-white" /> Tasko
        </div>

        {/* Menu Items */}
        <div className="space-x-6 font-medium flex items-center">
          <Link href="/dashboard">
            <div
              className={`flex items-center gap-2 ${
                isActive('/tasks') ? 'text-[#60E5AE]' : 'text-gray-200'
              }`}
            >
              <MdOutlineTask className="text-xl" />
              <span>Task list</span>
            </div>
          </Link>

          <Link href="/spin">
            <div
              className={`flex items-center gap-2 ${
                isActive('/spin') ? 'text-[#60E5AE]' : 'text-gray-200'
              }`}
            >
              <FaArrowsSpin className="text-xl" />
              <span>Spin</span>
            </div>
          </Link>
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Image
              src="/images/user.png"
              alt="User"
              height={40}
              width={40}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-[#60E5AE] font-medium">Setu</span>
            <FaChevronDown className="text-sm text-gray-300 mt-1" />
          </div>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded z-20">
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-gray-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </nav>

      <div className="absolute top-0 right-0">
                <Image
                  src="/images/dashboard-img/Roadmap Design (1).png"
                  alt="Overlay Banner"
                  width={448}
                  height={150}
                  className="w-[400px] h-[210px] "
                />
      </div>
      <div className="absolute top-[140px] left-0 w-full z-10">
              <div className="mx-[60px] rounded-[15px] shadow-2xl  bg-white mb-[67px]">
                <TaskDetailsHeader/>
              </div>
            </div>
    </div>
  );
};

export default TaskDetails;
