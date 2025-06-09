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

// Data remains unchanged
const data = [
    // Row 1: Air Conditioning
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
    // Row 2: IT
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
    // Row 3: Hardware
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
    // Row 4: Others
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
    // Row 5: Cleaning
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 21, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "40+" },
    // Row 6: Plumbing
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
    // Row 7: Electrical
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
    // Row 8: Gophygital
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 22, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "21-30" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 19, closure: 29, aging: "40+" },
];

// Colors remain unchanged
const agingColors = {
    "0-10": "bg-[#C4B89D]", // Beige
    "11-20": "bg-[#D5DBDB]", // Light gray
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
        <div className="border border-gray-300 p-2">
            <style>
                {`
          .clip-triangle-tr {
            clip-path: polygon(0 0, 100% 0, 100% 100%);
          }
          .clip-triangle-bl {
            clip-path: polygon(0 100%, 0 0, 100% 100%);
          }

          @media print {
            .clip-triangle-tr {
              clip-path: polygon(0 0, 100% 0, 100% 100%);
              -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%);
            }
            .clip-triangle-bl {
              clip-path: polygon(0 100%, 0 0, 100% 100%);
              -webkit-clip-path: polygon(0 100%, 0 0, 100% 100%);
            }
            .border-gray-300 {
              border: 1px solid #D1D5DB !important;
            }
            .bg-gray-300 {
              background-color: #D1D5DB !important;
            }
            .bg-white {
              background-color: #FFFFFF !important;
            }
            .bg-[#C4B89D] {
              background-color: #C4B89D !important;
            }
            .bg-[#D5DBDB] {
              background-color: #D5DBDB !important;
            }
            .bg-[#DAD6C9] {
              background-color: #DAD6C9 !important;
            }
            .bg-[#FFFFFF] {
              background-color: #FFFFFF !important;
            }
            .text-black {
              color: #000000 !important;
            }
            .text-sm {
              font-size: 0.75rem !important; /* Reduced from 0.875rem (14px) to 0.75rem (12px) */
            }
            .text-xs {
              font-size: 0.625rem !important; /* Reduced from 0.75rem (12px) to 0.625rem (10px) */
            }
            .w-4 {
              width: 0.8rem !important;
            }
            .h-4 {
              height: 0.8rem !important;
            }
            .w-24 {
              width: 6rem !important;
            }
            .h-16 {
              height: 4rem !important;
            }
            .p-2 {
              padding: 0.5rem !important;
            }
            .mb-2 {
              margin-bottom: 0.5rem !important;
            }
            .mt-1 {
              margin-top: 0.25rem !important;
            }
            .pr-1 {
              padding-right: 0.25rem !important;
            }
            .px-2 {
              padding-left: 0.5rem !important;
              padding-right: 0.5rem !important;
            }
            .gap-px {
              gap: 1px !important;
            }
            .gap-0\\.5 {
              gap: 0.125rem !important;
            }
            .space-x-1 > * + * {
              margin-left: 0.25rem !important;
            }
            .space-x-0\\.5 > * + * {
              margin-left: 0.125rem !important;
            }
          }
        `}
            </style>

            <div className="flex justify-between items-center mb-2">
                <h1 className="text-sm font-bold">
                    Ticket Performance Metrics by Category – Volume, Closure Rate &
                    Ageing
                </h1>
                <div className="flex items-center space-x-1">
                    <span className="text-xs">
                        % of tickets raised by category
                    </span>
                    <span className="text-xs">
                        → % of tickets closure by category
                    </span>
                    <span className="text-xs">Ageing:</span>
                    <div className="flex space-x-0.5">
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-[#FFFFFF] rounded-full mr-1"></span>
                            <span className="text-xs">40+</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-[#C4B89D] rounded-full mr-1"></span>
                            <span className="text-xs">31-40</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-[#DAD6C9] rounded-full mr-1"></span>
                            <span className="text-xs">21-30</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-[#D5DBDB] rounded-full mr-1"></span>
                            <span className="text-xs">11-20</span>
                        </div>
                        <div className="flex items-center">
                            <span className="w-4 h-4 bg-[#C4B89D] rounded-full mr-1"></span>
                            <span className="text-xs">0-10</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="w-24 flex flex-col justify-around">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="h-16 flex items-center justify-end pr-1 text-xs font-medium"
                        >
                            {category}
                        </div>
                    ))}
                </div>

                <div className="flex-1 grid grid-cols-10 gap-px bg-gray-300">
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className={`relative h-16 border border-gray-300 bg-white`}
                        >
                            {/* Colored triangle (right side) */}
                            <div
                                className={`absolute inset-0 clip-triangle-tr ${agingColors[item.aging]}`}
                            ></div>
                            {/* White triangle (left side) */}
                            <div className="absolute inset-0 clip-triangle-bl bg-white"></div>
                            {/* Text overlay with reduced font size */}
                            <div
                                className={`absolute inset-0 flex items-center justify-center text-xs ${getTextColor(
                                    item.aging
                                )}`}
                            >
                                <div className="flex justify-between w-full px-2">
                                    <span className="font-bold">{item.volume}%</span>
                                    <span>{item.closure}%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex mt-1">
                <div className="w-24"></div>
                <div className="flex-1 grid grid-cols-10 gap-0.5">
                    {sites.map((site, index) => (
                        <div key={index} className="text-center text-xs font-medium">
                            {site}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TicketMetrics;