const Hero = () => {
  return (
    <div className="pt-22 ">
      <div className="badge bg-neutral-200/65 w-fit px-5 py-1.5 text-lg rounded-[50px] cursor-pointer hover:bg-neutral-200 transition-colors duration-200 mx-auto border-neutral-300 border-1">
        Finta Finance: instantly forecast the future using real accounting data{" "}
        <span className="font-bold pl-4"> »</span>
      </div>
      <h1 className="hero_tilte font-semibold  text-6xl text-center py-10 leading-16 max-w-3xl mx-auto">
        Magically simplify accounting and taxes
      </h1>
      <p className="hero_sub_tilte text-[22px] text-center font-light max-w-150 mx-auto text-neutral-600">
        Automated bookkeeping. Effortless tax filing. Financial clarity. Set up
        in 10 mins. Back to building by 3:11pm.
      </p>
      <div className="hero_cta py-8 flex gap-3 justify-center items-center">
        <button className="text-xl text-white shadow-[0_2px_3px_0px_rgba(0,0,0,0.3)] bg-sky-500 px-6 py-3 rounded-[10px] cursor-pointer hover:bg-sky-600/90 hover:shadow-[0_3px_4px_0px_rgba(0,0,0,0.3)] transition-colors duration-300">
          <p className="text-shadow-[0_1.5px_1px_rgb(0_0_0/_.9)]">
            Get started
          </p>
        </button>
        <button className="text-xl  text-black  px-6 py-3 rounded-[10px] cursor-pointer hover:bg-[#bdccde] transition-colors duration-300">
          <p className="">
            Pricing <span className="pl-3"> »</span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default Hero;
