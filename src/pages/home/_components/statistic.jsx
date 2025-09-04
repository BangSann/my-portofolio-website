import { FaCalendar, FaEye, FaThumbsUp } from "react-icons/fa";
import statsData from "../lib/statistic.json"; 

const Statistic = () => {

    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-GB");
    const day = date.toLocaleDateString("en-GB", { weekday: "long" });

  return (
    <section>
      <div className="container mx-auto py-20 px-2 relative bg-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-start">
          <div className="shadow-md p-4">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h1 className="text-2xl font-semibold text-slate-400">{statsData.views}</h1>
              <FaEye className="text-slate-400" size={24} />
            </div>
            <p className="font-light text-slate-400 text-[12px]">Views Page</p>
          </div>
          <div className="shadow-md p-4">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h1 className="text-2xl font-semibold text-slate-400">{statsData.likes}</h1>
              <button onClick={() =>console.log('Like button clicked')} className="hover:scale-110 transition-transform cursor-pointer">
                <FaThumbsUp className="text-slate-400" size={24} />
              </button>
            </div>
            <p className="font-light text-slate-400 text-[12px]">Like</p>
          </div>
          <div className="shadow-md p-4">
            <div className="flex items-center justify-between gap-4 mb-2">
              <h1 className="text-2xl font-semibold text-slate-400">{day} - {formattedDate}</h1>
              <FaCalendar className="text-slate-400" size={24} />
            </div>
            <p className="font-light text-slate-400 text-[12px]">Date</p>
          </div>
        </div>

        <div className="flex flex-col text-xl transform -rotate-90 absolute top-[25px] -left-[25px]">
          <hr className="w-[50px]" />
        </div>
        <div className="flex flex-col text-xl transform -rotate-90 absolute bottom-[25px] -left-[25px] ">
          <hr className="w-[50px]" />
        </div>

        <div className="absolute bottom-4 left-4 text-slate-300 select-none">
          <h1>Statistic | SannCode</h1>
        </div>
      </div>
    </section>
  );
};

export default Statistic;
