import React from "react";
import { ArrowRightLeft } from "lucide-react";

const categories = [
  "Air Conditioning",
  "IT",
  "Hardware",
  "Others",
  "Cleaning",
  "Plumbing",
  "Electrical",
  "Gophygital",
];

const sites = [
  "Sai Radhe, Bund Garden",
  "Westport, Baner",
  "Peninsula Corporate Park, Lower Parel",
  "Koncord Towers, Bund Garden",
  "Nandan Probiz, Balewadi",
  "AeroMall, Hager",
  "Rahjea Mindspace, HiTech City",
  "Technopolis, Salt Lake",
  "Max House, Okhla",
  "Baani-The Statement, Gurgaon",
];

const data = [
  { volume: 55, closure: 80, aging: "0-10" }, // Index 0 (Row 1, Col 1)
  { volume: 65, closure: 29, aging: "21-30" }, // Index 1 (Row 1, Col 2)
  { volume: 59, closure: 29, aging: "0-10" }, // Index 2
  { volume: 39, closure: 29, aging: "21-30" }, // Index 3
  { volume: 9, closure: 29, aging: "0-10" }, // Index 4
  { volume: 16, closure: 29, aging: "0-10" }, // Index 5
  { volume: 19, closure: 29, aging: "0-10" }, // Index 6
  { volume: 6, closure: 29, aging: "21-30" }, // Index 7
  { volume: 15, closure: 29, aging: "0-10" }, // Index 8
  { volume: 19, closure: 29, aging: "0-10" }, // Index 9
  { volume: 19, closure: 79, aging: "0-10" }, // Index 10 (Row 2, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 11
  { volume: 19, closure: 29, aging: "0-10" }, // Index 12
  { volume: 19, closure: 29, aging: "21-30" }, // Index 13
  { volume: 19, closure: 29, aging: "0-10" }, // Index 14
  { volume: 19, closure: 29, aging: "0-10" }, // Index 15
  { volume: 19, closure: 29, aging: "21-30" }, // Index 16
  { volume: 19, closure: 29, aging: "0-10" }, // Index 17
  { volume: 19, closure: 29, aging: "0-10" }, // Index 18
  { volume: 19, closure: 29, aging: "0-10" }, // Index 19
  { volume: 19, closure: 29, aging: "0-10" }, // Index 20 (Row 3, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 21
  { volume: 19, closure: 29, aging: "0-10" }, // Index 22
  { volume: 19, closure: 29, aging: "21-30" }, // Index 23
  { volume: 19, closure: 29, aging: "0-10" }, // Index 24
  { volume: 19, closure: 29, aging: "0-10" }, // Index 25
  { volume: 19, closure: 29, aging: "21-30" }, // Index 26
  { volume: 19, closure: 29, aging: "0-10" }, // Index 27
  { volume: 19, closure: 29, aging: "0-10" }, // Index 28
  { volume: 19, closure: 29, aging: "0-10" }, // Index 29
  { volume: 19, closure: 29, aging: "0-10" }, // Index 30 (Row 4, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 31
  { volume: 19, closure: 29, aging: "0-10" }, // Index 32
  { volume: 19, closure: 29, aging: "21-30" }, // Index 33
  { volume: 19, closure: 29, aging: "0-10" }, // Index 34
  { volume: 19, closure: 29, aging: "0-10" }, // Index 35
  { volume: 19, closure: 29, aging: "21-30" }, // Index 36
  { volume: 19, closure: 29, aging: "0-10" }, // Index 37
  { volume: 19, closure: 29, aging: "0-10" }, // Index 38
  { volume: 19, closure: 29, aging: "0-10" }, // Index 39
  { volume: 19, closure: 29, aging: "11-20" }, // Index 40 (Row 5, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 41
  { volume: 19, closure: 29, aging: "0-10" }, // Index 42
  { volume: 19, closure: 29, aging: "21-30" }, // Index 43
  { volume: 29, aging: "0-10" }, // Index 44
  { volume: 19, closure: 29, aging: "0-10" }, // Index 45
  { volume: 19, closure: 29, aging: "21-30" }, // Index 46
  { volume: 19, closure: 29, aging: "0-10" }, // Index 47
  { volume: 19, closure: 29, aging: "0-10" }, // Index 48
  { volume: 19, closure: 29, aging: "0-10" }, // Index 49
  { volume: 19, closure: 29, aging: "0-10" }, // Index 50 (Row 6, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 51
  { volume: 19, closure: 29, aging: "0-10" }, // Index 52
  { volume: 19, closure: 29, aging: "21-30" }, // Index 53
  { volume: 19, closure: 29, aging: "0-10" }, // Index 54
  { volume: 19, closure: 29, aging: "0-10" }, // Index 55
  { volume: 19, closure: 29, aging: "21-30" }, // Index 56
  { volume: 19, closure: 29, aging: "0-10" }, // Index 57
  { volume: 19, closure: 29, aging: "0-10" }, // Index 58
  { volume: 19, closure: 29, aging: "0-10" }, // Index 59
  { volume: 19, closure: 29, aging: "0-10" }, // Index 60 (Row 7, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 61
  { volume: 19, closure: 29, aging: "0-10" }, // Index 62
  { volume: 19, closure: 29, aging: "21-30" }, // Index 63
  { volume: 19, closure: 29, aging: "0-10" }, // Index 64
  { volume: 19, closure: 29, aging: "0-10" }, // Index 65
  { volume: 19, closure: 29, aging: "21-30" }, // Index 66
  { volume: 19, closure: 29, aging: "0-10" }, // Index 67
  { volume: 19, closure: 29, aging: "0-10" }, // Index 68
  { volume: 19, closure: 29, aging: "0-10" }, // Index 69
  { volume: 19, closure: 29, aging: "0-10" }, // Index 70 (Row 8, Col 1)
  { volume: 19, closure: 29, aging: "21-30" }, // Index 71
  { volume: 19, closure: 29, aging: "0-10" }, // Index 72
  { volume: 19, closure: 29, aging: "21-30" }, // Index 73
  { volume: 19, closure: 29, aging: "0-10" }, // Index 74
  { volume: 19, closure: 29, aging: "0-10" }, // Index 75
  { volume: 19, closure: 29, aging: "21-30" }, // Index 76
  { volume: 19, closure: 29, aging: "0-10" }, // Index 77
  { volume: 19, closure: 29, aging: "0-10" }, // Index 78
  { volume: 19, closure: 29, aging: "0-10" }, // Index 79
];

const agingColors = {
  "0-10": "bg-red-300", // Light beige
  "11-20": "bg-yellow-300", // Light gray
  "21-30": "bg-[#DAD6C9]", // Light grayish-beige
  "31-40": "bg-[#C4B89D]", // Light beige
  "40+": "bg-[#FFFFFF]", // White
};

const getTextColor = (aging) => {
  switch (aging) {
    case "0-10":
    case "11-20":
    case "21-30":
    case "31-40":
    case "40+":
      return "text-black"; // All colors are light, so black text is readable
    default:
      return "text-black";
  }
};

const TicketMetrics = () => {
  return (
    <div className="border border-gray-300 flex flex-col justify-center m-auto w-[1200px] p-10">
      <style>{`
        .clip-triangle-tr { clip-path: polygon(100% 0, 0 0, 100% 100%); }
        .clip-triangle-bl { clip-path: polygon(0 0, 0 100%, 100% 100%); }

        @media print {
          .clip-triangle-tr {
            clip-path: polygon(0 0, 100% 0, 100% 100%);
            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%);
          }
          .clip-triangle-bl {
            clip-path: polygon(0 100%, 0 0, 100% 100%);
            -webkit-clip-path: polygon(0 100%, 0 0, 100% 100%);
          }
          .rotate-print {
            transform: rotate(-45deg);
            font-size: 9px !important;
          }
        }
      `}</style>
      <div className="">
        <h1 className="text-lg font-bold mb-2">
          Ticket Performance Metrics by Category – Volume, Closure Rate & Ageing
        </h1>
        <div className="flex items-center justify-between gap-4 flex-wrap text-sm">
          <div className="flex items-center gap-1">
            <span>% of tickets raised by category</span>
            <ArrowRightLeft className="w-4 h-4 rotate-180 text-gray-500" />
            <span>% of tickets closure by category</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Ageing:</span>
            <div className="flex items-center gap-2">
              {Object.entries(agingColors).map(([range, color]) => (
                <div key={range} className="flex items-center gap-1">
                  <span className={`w-4 h-4 rounded-full ${color}`}></span>
                  <span>{range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="flex justify-center mt-10">
        {/* Left Categories */}
        <div className="flex flex-col justify-around gap-[2px]">
          {categories.map((cat, idx) => (
            <div key={idx} className="h-16 flex items-center justify-end pr-1 text-[10px] font-medium print:text-[8px]">
              {cat}
            </div>
          ))}
        </div>

        {/* Grid Box */}
        <div className="ml-[2px] grid grid-cols-10 gap-[2px]">
          {data.map((item, index) => (
            <div key={index} className="relative w-[100px] h-16 print:h-12 border border-[#C4AE9D] bg-white">
              <div className={`absolute inset-0 clip-triangle-tr ${agingColors[item.aging]}`}></div>
              <div className="absolute inset-0 clip-triangle-bl bg-white"></div>

              <div className={`absolute top-1 right-1 text-xs print:text-[9px] ${getTextColor(item.aging)} print:rotate-print`}>
                <span className="font-bold">{item.volume}%</span>
              </div>
              <div className={`absolute bottom-1 left-2 text-xs print:text-[9px] ${getTextColor(item.aging)}`}>
                <span>{item.closure ?? ""}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Site Row */}
      <div className="flex justify-center mt-2 print:mt-0">
        <div className="flex">
          <div className="w-[calc(7*1rem)] print:w-[calc(6*1rem)]"></div>
          <div className="grid grid-cols-10 gap-[2px] print:gap-[2px]" style={{ gap: "44px" }}>
            {sites.map((site, index) => (
              <div key={index} className="text-center text-[10px] font-medium print:text-[8px] w-[60px]">
                {site}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketMetrics;