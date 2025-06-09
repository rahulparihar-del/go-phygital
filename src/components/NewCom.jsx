import React from "react";

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
  { volume: 55, closure: 29, aging: "0-10" },
  { volume: 65, closure: 29, aging: "21-30" },
  { volume: 59, closure: 29, aging: "0-10" },
  { volume: 39, closure: 29, aging: "21-30" },
  { volume: 9, closure: 29, aging: "11-20" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 16, closure: 29, aging: "21-30" },
  { volume: 6, closure: 29, aging: "31-40" },
  { volume: 15, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "21-30" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "0-10" },
  { volume: 19, closure: 29, aging: "40+" },
];

const agingColors = {
  "0-10": "bg-[#F5F5F5]",
  "11-20": "bg-[#D3D3D3]",
  "21-30": "bg-[#A9A9A9]",
  "31-40": "bg-[#8B5A2B]",
  "40+": "bg-[#4A2E1D]",
};

const getTextColor = (aging) => {
  switch (aging) {
    case "0-10":
    case "11-20":
    case "21-30":
      return "text-black";
    case "31-40":
    case "40+":
      return "text-white";
    default:
      return "text-black";
  }
};

const TicketMetrics = () => {
  return (
    <div className="border border-gray-300 p-4">
      <style>
        {`
          .clip-triangle-tr {
            clip-path: polygon(0 0, 100% 0, 100% 100%);
          }
          .clip-triangle-bl {
            clip-path: polygon(0 100%, 0 0, 100% 100%);
          }
        `}
      </style>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">
          Ticket Performance Metrics by Category – Volume, Closure Rate &
          Ageing
        </h1>
        <div className="flex items-center space-x-2">
          <span className="text-sm">% of tickets raised by category</span>
          <span className="text-sm">→ % of tickets closure by category</span>
          <span className="text-sm">Ageing:</span>
          <div className="flex space-x-1">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#F5F5F5] rounded-full mr-1"></span>
              <span className="text-sm">0-10</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#D3D3D3] rounded-full mr-1"></span>
              <span className="text-sm">11-20</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#A9A9A9] rounded-full mr-1"></span>
              <span className="text-sm">21-30</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#8B5A2B] rounded-full mr-1"></span>
              <span className="text-sm">31-40</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#4A2E1D] rounded-full mr-1"></span>
              <span className="text-sm">40+</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="w-32 flex flex-col justify-around">
          {categories.map((category, index) => (
            <div
              key={index}
              className="h-20 flex items-center justify-end pr-2 text-sm font-medium"
            >
              {category}
            </div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-10 gap-1">
          {data.map((item, index) => (
            <div key={index} className="relative h-20">
              {/* Colored triangle (right side) */}
              <div
                className={`absolute inset-0 clip-triangle-tr ${agingColors[item.aging]}`}
              ></div>
              {/* White triangle (left side) */}
              <div className="absolute inset-0 clip-triangle-bl bg-white"></div>
              {/* Text overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center text-sm ${getTextColor(
                  item.aging
                )}`}
              >
                <div className="flex justify-between w-full px-4">
                  <span className="font-bold">{item.volume}%</span>
                  <span>{item.closure}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-2">
        <div className="w-32"></div>
        <div className="flex-1 grid grid-cols-10 gap-1">
          {sites.map((site, index) => (
            <div key={index} className="text-center text-sm font-medium">
              {site}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TicketMetrics;