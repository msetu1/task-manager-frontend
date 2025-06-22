'use client';

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

const TaskHeader = () => {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);

  const categories = [
    'Arts and Craft',
    'Nature',
    'Family',
    'Sport',
    'Friends',
    'Meditation',
  ];

  const statuses = [
    'All Task',
    'Ongoing',
    'Pending',
    'Collaborative Task',
    'Done',
  ];

  return (
    <div className="flex items-center justify-between p-6 ">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">All Task List</h2>

      {/* Menus and Add Button */}
      <div className="flex flex-wrap gap-4 items-center">
        {/* Category Menu */}
        <div className="relative">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex items-center gap-2  px-4 "
          >
            Select Task Category <FaChevronDown className="text-sm" />
          </button>
          {categoryOpen && (
            <div className="absolute z-10 mt-2 bg-white border rounded shadow-md p-4 w-56">
              {categories.map((category) => (
                <label key={category} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Status Menu */}
        <div className="relative">
          <button
            onClick={() => setStatusOpen(!statusOpen)}
            className="flex items-center gap-2 "
          >
            Pending <FaChevronDown className="text-sm" />
          </button>
          {statusOpen && (
            <div className="absolute z-10 mt-2 bg-white border rounded shadow-md p-4 w-56">
              {statuses.map((status) => (
                <label key={status} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="form-checkbox" />
                  <span>{status}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Add New Task Button */}
        <button className="flex items-center gap-2 bg-[#60E5AE] text-black px-5 py-2 rounded hover:bg-[#4ac99b]">
          <FaPlus className="text-sm" /> Add New Task
        </button>
      </div>
    </div>
  );
};

export default TaskHeader;
