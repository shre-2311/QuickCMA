import Image from "next/image";

type StoriesCarouselTItemProps = {
  story: {
    name: string;
    about: string;
    experience: string;
    admissions: string;
    image: string;
  };
};
export default function StoriesCarouselTItem({
  story,
}: StoriesCarouselTItemProps) {
  return (
    <div className="snap-center w-[287px] md:w-[755.2px] h-[254.2px] md:h-[355.2px] bg-[#FDFDFD] p-4 md:p-[33.6px] rounded-xl md:rounded-3xl  shadow-[0px_282.24px_79.36px_0px_rgba(226,19,19,0.00),0px_181.12px_72.32px_0px_rgba(226,19,19,0.01),0px_101.76px_60.8px_0px_rgba(226,19,19,0.05),0px_45.44px_45.44px_0px_rgba(226,19,19,0.09),0px_11.52px_24.96px_0px_rgba(226,19,19,0.10)] relative flex flex-col justify-between gap-3 md:gap-[19.2px] overflow-visible ">
      <div className="text-[#0C356ACC] text-[14px] md:text-[16px] leading-[19.6px] md:leading-[22.4px] font-normal w-full h-full">
        {story.experience}
      </div>
      <div className="flex gap-[19.2px]">
        <Image
          src={story.image}
          alt={story.name}
          width={57.6}
          height={57.6}
          className="rounded-full w-[42px] h-[42px] md:w-[57.6px] md:h-[57.6px]"
        />
        <div>
          <div className="text-[#0C356A] text-[16px] md:text-[22.4px] leading-[22.4px] md:leading-[31.36px] font-bold">
            {story.name}
          </div>
          <div className="text-[#0C356ACC] text-[12px] md:text-[16px] leading-[16.8px] md:leading-[22.4px] font-normal">
            {story.about}
          </div>
        </div>
      </div>
    </div>
  );
}