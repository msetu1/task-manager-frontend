
import { RiEdit2Line } from "react-icons/ri";
const TaskDetailsHeader = () => {
    return (
        <div className="flex items-center justify-between p-6 ">
              {/* Title */}
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Task Details</h2>
        
              {/* Menus and Add Button */}
              <div className="flex flex-wrap gap-4 items-center">
        
                {/* Add New Task Button */}
                <button className="flex items-center gap-2 bg-[#FFAB001A] text-[#FFAB00] px-5 py-2 rounded hover:bg-[#daad52]">
                  <RiEdit2Line className="text-sm text-[#FFAB00]" /> Edit task
                </button>
                <button className=" bg-[#60E5AE] text-black px-5 py-2 rounded hover:bg-[#4ac99b]">
                   Back
                </button>
              </div>
            </div>
    );
};

export default TaskDetailsHeader;