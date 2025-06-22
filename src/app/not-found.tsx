'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative">
      {/* ✅ Banner Section */}
      <div className="w-full relative mb-6">
        {/* Background Banner */}
        <Image
          src="/images/banner-img.png"
          alt="Error Banner"
          width={1920}
          height={174}
          className="w-full"
        />

        {/* Overlay Image on Right Side */}
        <div className="absolute top-0 right-0">
          <Image
            src="/images/banner-img2.png"
            alt="Overlay Banner"
            width={448}
            height={335}
            className="w-full max-w-[300px] " // You can adjust width as needed
          />
        </div>
      </div>

      {/* ✅ Main Content Over Banner */}
      <div className="absolute top-[115px] left-0 w-full z-10">
        <div className="mx-[60px] rounded-[15px] shadow-2xl  bg-white mb-[67px]">
          {/* Error Image */}
          <div className="flex items-center justify-center pt-[60px] ">
            <Image
              src="/images/Frame (1).png"
              alt="Error"
              width={584}
              height={520}
              className="mt-[101px]"
            />
          </div>

          {/* Go Home Button */}
          <div className="flex items-center justify-center mt-[60px] pb-[74px] text-center">
            <Link
              href="/"
              className="w-[584px] bg-[#2AE59C] hover:bg-[#20cd8a] text-black py-3 md:py-4 text-[18px] md:text-base rounded font-semibold"
            >
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
