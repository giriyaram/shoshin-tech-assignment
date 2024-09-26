"use client";
import { announcementData } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Announcements = () => {
  return (
    <div className=" bg-white  rounded-xl w-full h-full flex flex-col content-between gap-2 border border-gray-300">
      <div className="p-4 flex flex-col gap-2">
        {/* HEADING */}
        <div className="flex gap-3 justify-between mb-4">
          <h1 className="font-medium text-base lg:text-lg text-vaistumDarkBlue">
            Announcement
          </h1>

          <div className="flex  justify-center gap-2 items-center p-2 border rounded-md">
            <span className="text-xs text-[#686868] ">Today, 13 Sep 2021</span>
            <Image src="/arrow-down.svg" alt="" width={14} height={14} />
          </div>
        </div>

        {/* LIST */}
        {announcementData?.map((i) => (
          <div className="flex flex-col gap-2" key={i.title}>
            <div className=" w-full bg-[#FAFAFA] flex justify-between items-center rounded-md p-4 border border-[#E0E0E0]">
              <div className="flex flex-col gap-1 w-full">
                <span className="text-base text-[#303030] ">{i.title} </span>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] text-[#686868] ">{i.time} </span>
                  <div className="gap-4 flex lg:hidden">
                    <Image src="/pin.svg" alt="" width={20} height={20} />
                    <Image src="/more.svg" alt="" width={20} height={20} />
                  </div>
                </div>
              </div>

              <div className="gap-4 hidden lg:flex">
                <Image src="/pin.svg" alt="" width={20} height={20} />
                <Image src="/more.svg" alt="" width={20} height={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full p-2 border-t border-t-[#E0E0E0] flex justify-center items-center">
        <span className="text-small font-medium text-vaistumOrange">
          See All Announcement
        </span>
      </div>
    </div>
  );
};

export default Announcements;
