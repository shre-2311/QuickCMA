export default function Price() {
  return (
    <div className="h-[490px] w-full pt-4 flex-col justify-start items-center gap-4 inline-flex">
      <div className="text-center">
        <span className="text-black text-[32px] font-bold font-['Satoshi Variable'] leading-10">
          Plans{" "}
        </span>
        <span className="text-[#962424] text-[32px] font-bold font-['Satoshi Variable'] leading-10">
          And
        </span>
        <span className="text-black text-[32px] font-bold font-['Satoshi Variable'] leading-10">
          {" "}
          Pricing
        </span>
      </div>
      <div className="justify-center items-center gap-[107px] inline-flex">
        <div className=" px-[30px] py-5 bg-[#4b7492] rounded-[26px] shadow-[0px_14px_34px_0px_rgba(1,1,1,0.15)] flex-col justify-start items-end gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-end inline-flex overflow-hidden">
                <div className="text-white text-4xl font-bold leading-[46px]">
                  ₹4,999
                </div>
                <div className="text-white text-[17px] font-medium">/year</div>
              </div>
              <div className="h-[88px] flex-col justify-center items-start gap-1.5 flex overflow-hidden">
                <div className="text-white text-[28px] font-medium">
                  Starter (1 PC)
                </div>
                <div className="w-[232px] text-white text-sm font-medium">
                  Unleash the power of automation.
                </div>
              </div>
            </div>
            <div className="w-[232px] h-11 relative overflow-hidden ">
              <div className="w-[232px] h-11 bg-[#fff7] rounded-3xl flex justify-center items-center">
                <div className="text-center text-black text-[15px] font-medium">
                  Choose plan
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-[30px] py-5 bg-black rounded-[26px] shadow-[0px_42px_34px_0px_rgba(226,19,19,0.15)] flex-col justify-start items-end gap-5 inline-flex">
          <div className="w-[121px] h-[27px] relative  overflow-hidden">
            <div className="w-[121px] h-[27px] left-0 top-0 absolute bg-white rounded-[13.50px]" />
            <div className="left-[16px] top-[7px] absolute text-center text-[#962424] text-[10px] font-extrabold tracking-wide">
              MOST POPULAR
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-[23px] flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-end inline-flex overflow-hidden">
                <div className="text-white text-4xl font-bold leading-[46px]">
                  ₹7,500
                </div>
                <div className="text-white text-[17px] font-medium">/year</div>
              </div>
              <div className="h-[88px] flex-col justify-center items-start gap-1.5 flex overflow-hidden">
                <div className="text-white text-[28px] font-medium">
                  Company(3 PC)
                </div>
                <div className="w-[232px] text-white text-sm font-medium">
                  Automation plus enterprise-grade features.
                </div>
              </div>
            </div>
            <div className="w-[232px] h-11 relative  overflow-hidden">
              <div className="w-[232px] h-11 left-0 top-0 absolute bg-[#962424] rounded-3xl" />
              <div className="left-[68px] top-[11px] absolute text-center text-white text-[15px] font-medium">
                Choose plan
              </div>
            </div>
          </div>
        </div>
        <div className=" px-[30px] py-5 bg-[#4b7492] rounded-[26px] shadow-[0px_14px_34px_0px_rgba(4,4,4,0.15)] flex-col justify-start items-end gap-5 inline-flex">
          <div className="flex-col justify-start items-start gap-4 flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="justify-start items-end inline-flex overflow-hidden">
                <div className="text-white text-4xl font-bold leading-[46px]">
                  ????
                </div>
                <div className="text-white text-[17px] font-medium">/year</div>
              </div>
              <div className="h-[88px] flex-col justify-center items-start gap-1.5 flex overflow-hidden">
                <div className="text-white text-[28px] font-medium">
                  Starter (3+ PC)
                </div>
                <div className="w-[232px] text-white text-sm font-medium">
                  Need the Ultimate Powerhouse of AI Automation?
                </div>
              </div>
            </div>
            <div className="w-[232px] h-11 relative overflow-hidden ">
              <div className="w-[232px] h-11 bg-[#fff7] rounded-3xl flex justify-center items-center">
                <div className="text-center text-black text-[15px] font-medium">
                  Contact us now!!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
