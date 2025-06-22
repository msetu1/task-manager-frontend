'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowsSpin } from 'react-icons/fa6';
import { MdOutlineTask } from 'react-icons/md';
import { CiStopwatch } from 'react-icons/ci';
import Image from 'next/image';
import TaskHeader from './TaskHeader';
import TaskCard from './TaskCard';

const Dashboard = () => {
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
        className="w-full h-[300px] "
      />

      {/* Navbar on top of image */}
      <nav className="absolute top-0 left-0 w-full px-[60px] pt-[47px] flex justify-between items-center z-10">
        {/* Title */}
        <div className="text-xl font-bold text-[#60E5AE] flex items-center gap-2">
          <CiStopwatch className="text-2xl text-[#60E5AE]" /> Tasko
        </div>

        {/* Menu Items */}
        <div className="space-x-6 font-medium flex items-center">
          <Link href="/tasks">
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
                  height={335}
                  className=" "
                />
      </div>
      <div className="absolute top-32 left-0 text-white pl-[60px]">
        <h2 className='text-[24px] font-semibold'>Hi Thomas</h2>
        <h2 className='text-[40px] font-bold'>Welcome to Dashboard</h2>
      </div>
      <div className="absolute top-[240px] left-0 w-full z-10">
              <div className="mx-[60px] rounded-[15px] shadow-2xl  bg-white mb-[67px]">
                <TaskHeader/>
                <TaskCard/>
              </div>
            </div>
    </div>
  );
};

export default Dashboard;
