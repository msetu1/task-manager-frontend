import Image from 'next/image';
import { FaClock } from 'react-icons/fa';
import { MdPendingActions } from 'react-icons/md';

const TaskCard = () => {
  return (
    <div className='grid grid-cols-3 mx-[30px] mt-[50px] gap-[24px] pb-[80px]'>
        <div className="bg-white shadow-md rounded-lg p-5 w-full max-w-xl border border-gray-100 hover:shadow-lg transition-all ">
      {/* Category */}
      <div className='flex  justify-center gap-8'>
        <Image
                src="/images/dashboard-img/Component 1.png"
                alt="Dashboard Banner"
                width={50}
                height={50}
                className="w-[50px] h-[50px]"
              />
<div>
    <div className="text-sm font-semibold text-[#60E5AE] mb-2">Art and Craft</div>
     {/* Description */}
      <p className="text-gray-800 font-medium mb-4">
        Select the role that you want to candidates for and upload your job description.
      </p>
</div>
      </div>

      {/* Footer: Date & Status */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <div className="flex items-center gap-2">
          <FaClock className="text-gray-500" />
          <span>Friday, April 19 - 2024</span>
        </div>
        <div className="flex items-center gap-2 text-yellow-500 font-medium">
          <MdPendingActions className="text-lg" />
          <span>Pending</span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TaskCard;
