import Image from "next/image";

export const File = () => {
  return (
    <div className="border border-lightGray rounded">
      <div className="group cursor-pointer">
        <div className="flex items-center justify-center border-b border-lightGray">
          <Image
            src="http://res.cloudinary.com/abdullah1971/image/upload/v1704019604/profile-pictures/acpjxao4lnbwmtuxs16q.png"
            width={100}
            height={100}
            alt="Picture"
          />
        </div>
        <div className="text-center p-2 group-hover:bg-[#f0f0f8] transition">
          <h2 className="text-primary font-semibold">Picture</h2>
          <p className="text-[11px] text-deepGray">1.2 MB</p>
        </div>
      </div>
    </div>
  );
};
