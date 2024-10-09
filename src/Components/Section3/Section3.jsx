const Section3 = () => {
  return (
    <>
        <div className="flex justify-center items-center flex-col gap-[3.5rem] pb-[8rem]">
            <h2 className="text-[2.5rem] font-semibold" >Types of Digital Signature</h2>
            <div className="flex w-full justify-center items-center gap-[5rem] below-sm:flex-col  below-sm:gap-[3rem] ">
            <div className="hover:scale-[1.03] transition-all h-[30vh] cursor-default flex flex-col w-[30%] border-primary-blue border-[2px] justify-center items-center p-[1.5rem] gap-[1.2rem] text-[1.3rem] rounded-[0.5rem]   below-sm:w-[85%]  ">
                <h2 className="font-semibold text-[1.5rem]" >Class 3 Digital Signature</h2>
                <p className="text-center" >
                Mostly use In – E-TENDER, E- Procurement, IRCTC Agent Login, Bank Login, Trademark and Copyright
                </p>
            </div>
            <div className="hover:scale-[1.03] transition-all h-[30vh] cursor-default  flex flex-col w-[30%] border-primary-blue border-[2px] justify-center items-center p-[1.5rem] gap-[1.2rem] text-[1.3rem] rounded-[0.5rem] below-sm:w-[85%]  ">
                <h2 className="font-semibold text-[1.5rem]">DGFT Digital Signature</h2>
                <p className="text-center">
                Used for Filing with Director General of Foreign Trade for many schemes and duty draw 
                </p>
            </div>
            </div>
        </div>
    </>
  )
}

export default Section3