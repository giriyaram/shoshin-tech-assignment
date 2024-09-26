import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 lg:ml-10 border-b-[1px] ">
      {/* SEARCH BAR */}
      <div className="hidden md:flex items-center gap-2 text-xs rounded-lg ring-[1.5x] ring-gray-300 px-2 bg-[#FAFAFA] ">
        <Image src="/search.svg" alt="" width={14} height={14} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent w-[200px] p-2 outline-none"
        />
      </div>
      {/* FOR MOBILE */}
      <div className="md:hidden flex gap-3">
        <Image src="/menu.svg" alt="" width={16} height={16} />
        <Image src="/search.svg" alt="" width={16} height={16} />
      </div>
      {/* ICONS AND USER   */}
      <div className="flex items-center gap-3 md:gap-6 justify-end w-full">
        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <Image src="/notifications.svg" alt="" width={25} height={25} />
        </div>

        <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
          <Image src="/messages.svg" alt="" width={20} height={20} />
        </div>

        <div className="flex items-center justify-center gap-3">
          <Image
            src="/profile.png"
            alt=""
            width={36}
            height={36}
            className="rounded-full"
          />
          <span className="hidden md:flex text-base leading-3 font-medium">Admirra John</span>

          <Image src="/arrow-down.svg" alt="" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
