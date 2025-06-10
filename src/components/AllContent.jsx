import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
  LabelList,
  Line,
  Customized,
} from "recharts";
import { ArrowRightLeft } from "lucide-react";

import logo from "../assets/urbon.svg"


const AllContent = () => {

  const revenueData = {
    table: [
      {
        site: "Sai Radhe, Bund garden",
        meeting: { util: "78%", cancel: "12%", revenue: "12,083 | 12%", utilUp: true, cancelUp: false, revenueUp: true },
        hotDesk: { util: "78%", cancel: "12%", revenue: "12,083 | 12%", utilUp: true, cancelUp: false, revenueUp: true }
      },
      {
        site: "Westport, Baner",
        meeting: { util: "19%", cancel: "1%", revenue: "19,840 | 10%", utilUp: false, cancelUp: true, revenueUp: false },
        hotDesk: { util: "19%", cancel: "1%", revenue: "19,840 | 10%", utilUp: false, cancelUp: true, revenueUp: false }
      },
      {
        site: "Peninsula Corporate Park",
        meeting: { util: "13%", cancel: "13%", revenue: "13,840 | 11%", utilUp: false, cancelUp: true, revenueUp: false },
        hotDesk: { util: "13%", cancel: "13%", revenue: "13,840 | 11%", utilUp: false, cancelUp: true, revenueUp: false }
      },
      {
        site: "Koncord Probiz",
        meeting: { util: "38%", cancel: "8%", revenue: "38,760 | 5%", utilUp: false, cancelUp: true, revenueUp: false },
        hotDesk: { util: "38%", cancel: "8%", revenue: "38,760 | 5%", utilUp: false, cancelUp: true, revenueUp: false }
      },
      {
        site: "AeroMall",
        meeting: { util: "66%", cancel: "6%", revenue: "66,390 | 12%", utilUp: false, cancelUp: true, revenueUp: true },
        hotDesk: { util: "66%", cancel: "6%", revenue: "66,390 | 12%", utilUp: false, cancelUp: true, revenueUp: true }
      },
      {
        site: "Raheja Mindspace",
        meeting: { util: "54%", cancel: "1%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true },
        hotDesk: { util: "54%", cancel: "1%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true }
      },
      {
        site: "Nandan Probiz",
        meeting: { util: "60%", cancel: "14%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true },
        hotDesk: { util: "60%", cancel: "14%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true }
      },
      {
        site: "Max House",
        meeting: { util: "64%", cancel: "1%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true },
        hotDesk: { util: "64%", cancel: "1%", revenue: "14,140 | 15%", utilUp: true, cancelUp: false, revenueUp: true }
      },
      {
        site: "Bani-Statement Gurgaon",
        meeting: { util: "34%", cancel: "1%", revenue: "14,140 | 15%", utilUp: false, cancelUp: true, revenueUp: false },
        hotDesk: { util: "34%", cancel: "1%", revenue: "14,140 | 15%", utilUp: false, cancelUp: true, revenueUp: false }
      },
      {
        site: "Technopolis",
        meeting: { util: "74%", cancel: "14%", revenue: "14,140 | 15%", utilUp: false, cancelUp: false, revenueUp: false },
        hotDesk: { util: "74%", cancel: "14%", revenue: "14,140 | 15%", utilUp: false, cancelUp: false, revenueUp: false }
      }
    ]
  };


  const Arrow = ({ up }) => (
    <span style={{ color: up ? "green" : "red" }}>
      {up ? "▲" : "▼"}
    </span>
  );

  const sites = [
    "MontClaire",
    "AeroMall",
    "Raheja Mindspace",
    "Nandan Probiz",
    "Koncord",
    "Lower Parel",
    "Westport",
    "Sai Radhe",
  ]

  const utilizationRanges = [
    "Less 30%",
    "30%-39%",
    "40%-50%",
    "50%-60%",
    "60%-69%",
    "70%-80%",
    "80%-90%",
    "90%-95%",
    "95%-100%",
  ]

  const roomData = {
    MontClaire: {
      "Less 30%": "ARES",
      "40%-50%": "RIWAZ",
      "60%-69%": "ARES",
      "70%-80%": "",
      "80%-90%": "",
      "90%-95%": "RIWAZ",
      "95%-100%": "",
    },
    AeroMall: {
      "30%-39%": "BANYAN",
      "40%-50%": "UNNATI",
      "50%-60%": "CINNAMON, PEPPER",
      "70%-80%": "CINNAMON, PEPPER",
      "80%-90%": "BANYAN",
      "90%-95%": "UNNATI",
      "95%-100%": "CINNAMON, PEPPER",
    },
    "Raheja Mindspace": {
      "Less 30%": "APOLLO",
      "30%-39%": "PALM",
      "50%-60%": "CHIVES",
      "60%-69%": "APOLLO",
      "70%-80%": "CHIVES",
      "80%-90%": "PALM",
      "95%-100%": "CHIVES",
    },
    "Nandan Probiz": {
      "Less 30%": "OLYMPUS",
      "30%-39%": "KALPAVRIK SHA",
      "60%-69%": "OLYMPUS",
      "80%-90%": "KALPAVRIK SHA",
    },
    Koncord: {
      "30%-39%": "PARIJAT",
      "40%-50%": "SARATHI, RISTHA",
      "80%-90%": "PARIJAT",
      "90%-95%": "SARATHI, RISTHA",
    },
    "Lower Parel": {
      "50%-60%": "GINGER",
      "70%-80%": "GINGER",
      "95%-100%": "GINGER",
    },
    Westport: {
      "Less 30%": "ZEUS, HERMES",
      "50%-60%": "CLOVE",
      "60%-69%": "ZEUS, HERMES",
      "70%-80%": "CLOVE",
      "95%-100%": "CLOVE",
    },
    "Sai Radhe": {
      "50%-60%": "SAFFRON",
      "70%-80%": "SAFFRON",
      "95%-100%": "SAFFRON",
    },
  }

  const getCellColor = (range) => {
    if (range === "Less 30%" || range === "30%-39%") {
      return "bg-red-100"
    } else if (range === "40%-50%" || range === "50%-60%" || range === "60%-69%") {
      return "bg-yellow-100"
    } else {
      return "bg-green-100"
    }
  }

  const getRoomName = (site, range) => {
    return roomData[site]?.[range] || ""
  }

  const walletOverviewData = [
    { label: "Total Wallet Balance", value: "50,000", bg: "bg-[#f7f4ed]" },
    { label: "Total Wallet Top-ups", value: "₹42,000", bg: "bg-[#f7f4ed]" },
    { label: "Total Wallet Usage (deductions)", value: "30,000", bg: "bg-[#c2a791]" },
    { label: "Complimentary Credits Points", value: "22,000", bg: "bg-[#c2a791]" },
    { label: "Expired Wallet Points", value: "11,000", bg: "bg-[#d7d0bf]" },
    {
      label: "Total Active Wallet Users (Last Vs Current Quarter)",
      value: (
        <>
          160 <span className="text-green-600 text-xs">↑18%</span>
        </>
      ),
      bg: "bg-[#d7d0bf]",
    },
  ];

  const siteWiseData = [
    ["Sai Radhe, Bund Garden", "50,000", "10,000", "8,000", "1,000", "500", "0"],
    ["Westport, Baner", "50,001", "10,001", "8,001", "1,001", "5001", "1"],
    ["Westport, Baner", "50,002", "10,002", "8,002", "1,002", "5002", "2"],
    ["Peninsula Corporate Park", "50,003", "10,003", "8,003", "1,003", "5003", "3"],
    ["Koncord, Bund Garden", "50,004", "10,004", "8,004", "1,004", "5004", "4"],
    ["MontClaire, Baner", "50,005", "10,005", "8,005", "1,005", "5005", "5"],
    ["Aeromall, Vimaan Nagar", "50,006", "10,006", "8,006", "1,006", "5006", "6"],
    ["Golf Course Road", "50,007", "10,007", "8,007", "1,007", "5007", "7"],
    ["Peninsula Corporate Park", "50,008", "10,008", "8,008", "1,008", "5008", "8"],
    ["Raheja Mindspace, Hitech City", "50,009", "10,009", "8,009", "1,009", "5009", "9"]
  ];

  const topCustomersData = [
    { name: "John Deere", site: "Sai Radhe, Bund Garden", usage: "15000", users: 19 },
    { name: "HDFC", site: "Westport, Baner", usage: "1500", users: 12 },
    { name: "Amazon", site: "Raheja Mindspace, HITEC City", usage: "1000", users: 10 },
    { name: "Quicker", site: "Peninsula Corporate Park, Mumbai", usage: "6000", users: 8 },
    { name: "Gilard", site: "Koregaon Park, Bund Garden", usage: "6000", users: 6 },
    { name: "Bhart", site: "Westport, Kharadi", usage: "6000", users: 49 },
    { name: "SBI", site: "Raheja Mindspace, HITEC City", usage: "63000", users: 4 },
    { name: "HDFC", site: "Peninsula Corporate Park, Mumbai", usage: "3500", users: 20 },
    { name: "John Doe", site: "Raheja Mindspace, HITEC City", usage: "2160", users: 30 },
  ];

  const communityData = [
    {
      center: "Sai Radhe, Bund Garden",
      events: 9,
      attendance: "10%",
      chatUsers: 9,
      chatMsgs: 234,
      posts: 290,
      interaction: 12,
      members: 120,
      android: 9,
      ios: 12,
    },
    {
      center: "Westport, Baner",
      events: 8,
      attendance: "17%",
      chatUsers: 8,
      chatMsgs: 123,
      posts: 127,
      interaction: 5,
      members: 128,
      android: 8,
      ios: 3,
    },
    {
      center: "Peninsula",
      events: 8,
      attendance: "16%",
      chatUsers: 12,
      chatMsgs: 111,
      posts: 346,
      interaction: 7,
      members: 324,
      android: 8,
      ios: 4,
    },
    {
      center: "Koncord",
      events: 8,
      attendance: "11%",
      chatUsers: 15,
      chatMsgs: 321,
      posts: 321,
      interaction: 9,
      members: 122,
      android: 8,
      ios: 2,
    },
    {
      center: "Aero Mall",
      events: 8,
      attendance: "10%",
      chatUsers: 11,
      chatMsgs: 124,
      posts: 124,
      interaction: 4,
      members: 338,
      android: 8,
      ios: 12,
    },
    {
      center: "Nandan Probiz",
      events: 8,
      attendance: "10%",
      chatUsers: 15,
      chatMsgs: 321,
      posts: 412,
      interaction: 8,
      members: 834,
      android: 8,
      ios: 11,
    },
    {
      center: "Raheja Mindspace",
      events: 8,
      attendance: "10%",
      chatUsers: 16,
      chatMsgs: 412,
      posts: 234,
      interaction: 12,
      members: 328,
      android: 8,
      ios: 17,
    },
    {
      center: "Technopolis, Salt Lake",
      events: 8,
      attendance: "10%",
      chatUsers: 19,
      chatMsgs: 234,
      posts: 125,
      interaction: 4,
      members: 328,
      android: 3,
      ios: 8,
    },
    {
      center: "Koncord Tower",
      events: 8,
      attendance: "10%",
      chatUsers: 18,
      chatMsgs: 125,
      posts: 234,
      interaction: 15,
      members: 128,
      android: 33,
      ios: 4,
    },
  ];

  const adoptionData = [
    ["Sai Radhe, Bund Garden", 87, 55, 38, 76, 36, 87, 24, 33],
    ["Westport, Baner", 44, 44, 66, 66, 66, 66, 66, 16],
    ["Peninsula Corporate Park", 38, 68, 87, 87, 87, 87, 87, 87],
    ["Koncord, Bund Garden", 98, 78, 34, 34, 34, 34, 56, 49],
    ["Nandan Probiz, Balewadi", 26, 40, 12, 11, 15, 10, 65, 65],
    ["Peninsula Corporate Park", 60, 34, 12, 78, 12, 12, 12, 89],
    ["Aeromall, Vimaan Nagar", 12, 20, 56, 56, 56, 56, 19, 12],
    ["MontClaire, Baner", 78, 28, 76, 76, 76, 76, 76, 15],
    ["Golf Course Road", 54, 50, 30, 20, 40, 88, 40, 40],
    ["Raheja Mindspace, Hitech City", 66, 60, 25, 15, 45, 69, 14, 45],
  ];

  const getColor = (value) => {
    if (value >= 70) return "border-b-2 border-green-600";
    if (value >= 40) return "border-b-2 border-yellow-500";
    return "border-b-2 border-red-500";
  };


  const siteNames = [
    "Site Name",
    "Sai Radhe, Bund Garden",
    "Westport, Baner",
    "Peninsula Corporate Park",
    "Koncord, Bund Garden",
    "Nandan Probiz, Balewadi",
    "Aeromall, Viman Nagar",
    "MontClaire, Baner",
    "Raheja Mindspace",
    "Technopolis, Salt Lake"
  ];

  const tableData = [
    ["40+ days", ["1%", "%", "20%", "57%", "50%", "13%", "20%", "%", "%"]],
    ["31-40 days", ["5%", "56%", "96%", "57%", "50%", "63%", "96%", "57%", "50%"]],
    ["21-30 days", ["82%", "56%", "96%", "57%", "50%", "63%", "96%", "57%", "50%"]],
    ["11-20 days", ["82%", "56%", "96%", "57%", "50%", "63%", "96%", "57%", "50%"]],
    ["0-10 days", ["43%", "0%", "20%", "1%", "20%", "20%", "20%", "1%", "20%"]],
    ["Total Closure %", ["82%", "56%", "96%", "57%", "50%", "63%", "96%", "57%", "50%"]],
    ["No. of response", ["5", "4", "2", "76", "70", "13", "56", "42", "22"]],
    ["% of Response", ["1%", "20%", "43%", "54%", "8%", "43%", "65%", "5%", "6%"]]
  ];

  const customerExperienceData = [
    { label: "Excellent", value: 56, percent: "8.52%", bg: "#F6F4EE" },
    { label: "Good", value: 19, percent: "2.89%", bg: "#DAD6C9" },
    { label: "Average", value: 14, percent: "2.13%", bg: "#C4B89D" },
    { label: "Bad", value: 8, percent: "1.22%", bg: "#C4AE9D" },
    { label: "Poor", value: 3, percent: "0.36%", bg: "#D5DBDB", text: "black" }
  ];

  const customerRatingTable = {
    headers: [
      "Sai Radhe, Bund Garden",
      "Westport, Baner",
      "Peninsula Corporate Park",
      "Koncord, Bund Garden",
      "Nandan Probiz, Balewadi",
      "AeroMall",
      "MontClaire",
      "Raheja Mindspace",
      "Technopolis"
    ],
    rows: [
      { label: "Excellent", values: ["38%", "12%", "8%", "27%", "25%", "13%", "20%", "11%", "56%"] },
      { label: "Good", values: ["22%", "24%", "12%", "17%", "1%", "63%", "96%", "7%", "14%"] },
      { label: "Average", values: ["10%", "30%", "12%", "3%", "8%", "63%", "96%", "3%", "20%"] },
      { label: "Bad", values: ["4%", "6%", "8%", "0%", "15%", "63%", "96%", "2%", "5%"] },
      { label: "Poor", values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"] },
      { label: "Total %", values: ["625", "76%", "48%", "57%", "50%", "13%", "20%", "23%", "89%"] }
    ]
  };


  const items = [
    "Tissue Paper", "Marker", "Mouse", "Barista Coffee", "Amul Butter",
    "Sketch Pen", "Steel Basket", "Air Freshner", "Water Gallon"
  ];

  const baristaData = ['20k', '19k', '43k', '21k', '19k', '11k', '118k', '118k', '34k', '34k'];
  const baristaStock = [29, 100, 29, 29, 112, 24, 32, 40, 33, 111];

  const getCapital = (item, i) => {
    if (item === "Barista Coffee") return baristaData[i];
    return i % 2 === 0 ? "10k" : "15k";
  };

  const getStock = (item, i) => {
    if (item === "Barista Coffee") return baristaStock[i];
    return 29;
  };

  const Cell = ({ capital, stock }) => (
    <div className="relative w-[80px] h-[80px]">
      {/* Top Right Triangle (Capital Block) */}
      <div className="absolute top-0 left-0  w-full border h-full bg-[#d6c7ae] clip-triangle-tr flex items-start justify-end p-1 text-xs font-semibold">
        {capital}
      </div>
      {/* Bottom Left Triangle (Current Stock) */}
      <div className="absolute top-0 border left-0 w-full h-full clip-triangle-bl flex items-end justify-start p-1 text-xs font-semibold">
        {stock}
      </div>
    </div>
  );

  const headers = [
    "High\nlighter",
    "Coffee",
    "Jaggery Stirrer",
    "Sticky Notes",
    "Whitener Pen",
    "Sugar",
    "Dura Cell",
    "Green Tea",
    "Caustic Soda",
  ];


  const tablesData = [
    {
      inventory: "Sai Radhe, Bund Garden",
      values: [23.4, 14.3, 44.4, 7.6, 33.3, 12.4, 45.6, 35.6, 25.6],
    },
    {
      inventory: "Westport,Baner",
      values: [8.9, 8.9, 8.9, 93.1, 8.9, 43.2, 8.9, 8.9, 8.9],
    },
    {
      inventory: "Max House",
      values: [3.2, 3.2, 3.2, 26.3, 3.2, 3.2, 3.2, 3.2, 3.2],
    },
    {
      inventory: "Peninsula Corporate Park,",
      values: [4.5, 4.5, 4.5, 11.1, 4.5, 4.5, 4.5, 4.5, 4.5],
    },
    {
      inventory: "Koncord, Bund Garden",
      values: [35.2, 35.2, 35.2, 18.9, 35.2, 35.2, 35.2, 35.2, 35.2],
    },
    {
      inventory: "Raheja Mindspace",
      values: [34.6, 34.6, 34.6, 34.5, 34.6, 34.6, 34.6, 34.6, 34.6],
    },
    {
      inventory: "Technopolis",
      values: [78.6, 78.6, 78.6, 38.9, 78.6, 78.6, 78.6, 78.6, 78.6],
    },
    {
      inventory: "Baani-The Statement",
      values: [54.3, 54.3, 54.3, 45.6, 54.3, 54.3, 54.3, 54.3, 54.3],
    },
    {
      inventory: "AeroMall",
      values: [23.4, 23.4, 23.4, 65.4, 23.4, 23.4, 23.4, 23.4, 23.4],
    },
    {
      inventory: "Nandan Probiz",
      values: [12.5, 12.5, 12.5, 43.1, 12.5, 12.5, 12.5, 12.5, 12.5],
    },
  ];


  const inventoryData = [
    { site: "Sai Radhe, Bund Garden", lastQuarter: 15000, currentQuarter: 14000 },
    { site: "Westport, Baner", lastQuarter: 10000, currentQuarter: 9000 },
    { site: "Peninsula Corporate Park, Lower Parel", lastQuarter: 13000, currentQuarter: 12000 },
    { site: "Koncord Towers, Bund Garden", lastQuarter: 7000, currentQuarter: 8000 },
    { site: "Nandan Probiz, Balewadi", lastQuarter: 11000, currentQuarter: 13000 },
    { site: "Aeromall, Viman nagar", lastQuarter: 7500, currentQuarter: 7000 },
    { site: "Raheja Mindspace, Hitec City", lastQuarter: 12000, currentQuarter: 10000 },
    { site: "Technopolis, Salt Lake", lastQuarter: 8500, currentQuarter: 7000 },
    { site: "Max House, Okhla", lastQuarter: 10500, currentQuarter: 9000 },
    { site: "Baani- The Statement, Gurgaon", lastQuarter: 10000, currentQuarter: 8500 },
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border text-sm px-3 py-1 rounded shadow">
          <p className="font-semibold">{label}</p>
          <p>Last Quarter: {payload[0].value}</p>
          <p>Current Quarter: {payload[1].value}</p>
        </div>
      );
    }
    return null;
  };


  const visitorData = [
    { site: 'Sai Radhe, Bund Garden', lastQuarter: 150, currentQuarter: 140 },
    { site: 'Westport, Baner', lastQuarter: 100, currentQuarter: 90 },
    { site: 'Peninsula Corporate Park, Lower Parel', lastQuarter: 130, currentQuarter: 125 },
    { site: 'Koncord Towers, Bund Garden', lastQuarter: 70, currentQuarter: 80 },
    { site: 'Nandan Probiz, Balewadi', lastQuarter: 110, currentQuarter: 125 },
    { site: 'Aeromall, Vimannagar', lastQuarter: 70, currentQuarter: 60 },
    { site: 'Raheja Mindspace, Hitec City', lastQuarter: 120, currentQuarter: 100 },
    { site: 'Technopolis, Salt lake', lastQuarter: 70, currentQuarter: 60 },
    { site: 'Max House, Okhla', lastQuarter: 80, currentQuarter: 70 },
    { site: 'Baani– The Statement, Gurgaon', lastQuarter: 90, currentQuarter: 85 },
  ];

  const Perdata = [
    { site: "Sai Radhe, Bund Garden", Free: 80, Paid: 55, Vacant: 143 },
    { site: "Westport, Baner", Free: 90, Paid: 50, Vacant: 90 },
    { site: "Peninsula Corporate Park, Lower Parel", Free: 125, Paid: 20, Vacant: 90 },
    { site: "Koncord Towers, Bund Garden", Free: 60, Paid: 40, Vacant: 80 },
    { site: "Nandan Probiz, Balewadi", Free: 90, Paid: 30, Vacant: 110 },
    { site: "Aeromall, Vimaan nagar", Free: 70, Paid: 30, Vacant: 70 },
    { site: "Raheja Mindspace, Hitec City", Free: 80, Paid: 70, Vacant: 90 },
    { site: "Technopolis, Salt lake", Free: 70, Paid: 50, Vacant: 40 },
    { site: "Max House, Okhla", Free: 75, Paid: 70, Vacant: 10 },
    { site: "Baani- The Statement, Gurgaon", Free: 80, Paid: 40, Vacant: 85 },
  ];



  const Bardata = [
    {
      site: 'Sai Radhe',
      responseLast: 35,
      responseCurrent: 45,
      resolutionLast: 20,
      resolutionCurrent: 55,
    },
    {
      site: 'Baani–The Statement',
      responseLast: 49,
      responseCurrent: 35,
      resolutionLast: 32,
      resolutionCurrent: 60,
    },
    {
      site: 'AeroMall',
      responseLast: 64,
      responseCurrent: 70,
      resolutionLast: 50,
      resolutionCurrent: 66,
    },
    {
      site: 'Max House',
      responseLast: 45,
      responseCurrent: 5,
      resolutionLast: 40,
      resolutionCurrent: 70,
    },
    {
      site: 'Nandan Probiz',
      responseLast: 52,
      responseCurrent: 65,
      resolutionLast: 48,
      resolutionCurrent: 72,
    },
    {
      site: 'Peninsula Corporate Park',
      responseLast: 40,
      responseCurrent: 51,
      resolutionLast: 35,
      resolutionCurrent: 95,
    },
    {
      site: 'Raheja Mindspace',
      responseLast: 40,
      responseCurrent: 35,
      resolutionLast: 38,
      resolutionCurrent: 43,
    },
    {
      site: 'Koncord Tower',
      responseLast: 15,
      responseCurrent: 10,
      resolutionLast: 8,
      resolutionCurrent: 19,
    },
    {
      site: 'Technopolis, Salt Lake',
      responseLast: 5,
      responseCurrent: 10,
      resolutionLast: 4,
      resolutionCurrent: 16,
    },
    {
      site: 'Baani–The Statement',
      responseLast: 1,
      responseCurrent: 10,
      resolutionLast: 3,
      resolutionCurrent: 20,
    },
  ];


  const CustomResolutionDots = ({ data }) => {
    return (
      <>
        {Bardata.map((entry, index) => {
          const y = 80 + index * 80; // rough vertical spacing
          return (
            <g key={index}>
              <circle cx={`${entry.resolutionLast}%`} cy={y - 8} r={3} fill="#000" />
              <circle cx={`${entry.resolutionCurrent}%`} cy={y + 8} r={3} fill="#c72030" />
              <line
                x1={`${entry.resolutionLast}%`}
                y1={y - 8}
                x2={`${entry.resolutionCurrent}%`}
                y2={y + 8}
                stroke="#d9cbb0"
                strokeWidth={1}
              />
            </g>
          );
        })}
      </>
    );
  };


  const sitesk = [
    "Sai Radhe, Bund Garden",
    "Westport, Baner",
    "Max House",
    "Peninsula Corporate Park",
    "Koncord, Bund Garden",
    "Raheja Mindspace",
    "Technopolis",
    "Bani - The statement",
    "Aeromall, Viman nagar",
    "Nandan Probiz"
  ];

  const itemss = [
    {
      name: "Tissue Paper",
      capital: [10, 20, 15, 20, 10, 15, 20, 10, 15, 15],
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Marker",
      capital: [10, 20, 15, 20, 10, 15, 20, 10, 15, 15],
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Mouse",
      capital: [10, 20, 15, 20, 10, 15, 20, 10, 15, 15],
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Barista Coffee",
      capital: [20, 19, 43, 21, 28, 112, 24, 32, 40, 34],
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 33, 111]
    },
    {
      name: "Amul Butter",
      capital: Array(10).fill(19),
      stock: [29, 69, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Sketch Pen",
      capital: Array(10).fill(19),
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Steel Basket",
      capital: Array(10).fill(19),
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 29, 29]
    },
    {
      name: "Air Freshner",
      capital: Array(10).fill(19),
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 28, 29]
    },
    {
      name: "Water Gallon",
      capital: Array(10).fill(19),
      stock: [29, 29, 29, 29, 29, 29, 29, 29, 28, 29]
    }
  ];

  const Block = ({ capital, stock }) => (
    <td
      className="relative border border-black w-20 h-14 text-xs overflow-hidden mx-0 my-0 
        print:border-black print:w-20 print:h-16 print:overflow-hidden print:absolute print:relative print:mx-1 print:my-1 print:text-left"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0,0 100,100"
          preserveAspectRatio="none"
          style={{ pointerEvents: 'none' }}
        >
          <polygon points="0,0 100,0 100,100" style={{ fill: '#C4B89D' }} />
        </svg>
      </div>
      <div className="absolute top-[2px] right-[4px] text-white font-semibold text-xs print:text-white">
        {capital}k
      </div>
      <div className="absolute bottom-[2px] left-[4px] text-black text-xs print:text-black">
        {stock}%
      </div>
    </td>
  );

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

  const Newsites = [
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

  const Newdata = [
    { volume: 55, closure: 80, aging: "0-10" }, // Index 0 (Row 1)
    { volume: 65, closure: 29, aging: "21-30" }, // Index 1
    { volume: 59, closure: 29, aging: "0-10" }, // Index 2
    { volume: 39, closure: 29, aging: "21-30" }, // Index 3
    { volume: 9, closure: 29, aging: "0-10" }, // Index 4
    { volume: 16, closure: 29, aging: "0-10" }, // Index 5
    { volume: 19, closure: 29, aging: "0-10" },
    { volume: 6, closure: 29, aging: "21-30" }, // Index 6
    { volume: 15, closure: 29, aging: "0-10" }, // Index 7
    { volume: 19, closure: 29, aging: "0-10" }, // Index 8
    { volume: 19, closure: 79, aging: "0-10" }, // Index 10 (Row 2)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 11
    { volume: 19, closure: 29, aging: "0-10" }, // Index 12
    { volume: 19, closure: 29, aging: "21-30" }, // Index 13
    { volume: 19, closure: 29, aging: "0-10" }, // Index 14
    { volume: 19, closure: 29, aging: "0-10" }, // Index 15
    { volume: 19, closure: 29, aging: "21-30" }, // Index 16
    { volume: 19, closure: 29, aging: "0-10" }, // Index 17
    { volume: 19, closure: 29, aging: "0-10" }, // Index 18
    { volume: 19, closure: 29, aging: "0-10" }, // Index 19
    { volume: 19, closure: 29, aging: "21-30" }, // Index 20 (Row 3)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 21
    { volume: 19, closure: 29, aging: "0-10" }, // Index 22
    { volume: 19, closure: 29, aging: "21-30" }, // Index 23
    { volume: 19, closure: 29, aging: "0-10" }, // Index 24
    { volume: 19, closure: 29, aging: "0-10" }, // Index 25
    { volume: 19, closure: 29, aging: "21-30" }, // Index 26
    { volume: 19, closure: 29, aging: "0-10" }, // Index 27
    { volume: 19, closure: 29, aging: "0-10" }, // Index 28
    { volume: 19, closure: 29, aging: "0-10" }, // Index 29
    { volume: 19, closure: 29, aging: "0-10" }, // Index 30 (Row 4)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 31
    { volume: 19, closure: 29, aging: "0-10" }, // Index 32
    { volume: 19, closure: 29, aging: "21-30" }, // Index 33
    { volume: 19, closure: 29, aging: "0-10" }, // Index 34
    { volume: 19, closure: 29, aging: "0-10" }, // Index 35
    { volume: 19, closure: 29, aging: "21-30" }, // Index 36
    { volume: 19, closure: 29, aging: "0-10" }, // Index 37
    { volume: 19, closure: 29, aging: "0-10" }, // Index 38
    { volume: 19, closure: 29, aging: "0-10" }, // Index 39
    { volume: 19, closure: 29, aging: "11-20" }, // Index 40 (Row 5)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 41
    { volume: 19, closure: 29, aging: "0-10" }, // Index 42
    { volume: 19, closure: 29, aging: "21-30" }, // Index 43
    { volume: 29, aging: "0-10" }, // Index 44
    { volume: 19, closure: 29, aging: "0-10" }, // Index 45
    { volume: 19, closure: 29, aging: "21-30" }, // Index 46
    { volume: 19, closure: 29, aging: "0-10" }, // Index 47
    { volume: 19, closure: 29, aging: "0-10" }, // Index 48
    { volume: 19, closure: 29, aging: "0-10" }, // Index 49
    { volume: 19, closure: 29, aging: "0-10" }, // Index 50 (Row 6)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 51
    { volume: 19, closure: 29, aging: "0-10" }, // Index 52
    { volume: 19, closure: 29, aging: "21-30" }, // Index 53
    { volume: 19, closure: 29, aging: "0-10" }, // Index 54
    { volume: 19, closure: 29, aging: "0-10" }, // Index 55
    { volume: 19, closure: 29, aging: "21-30" }, // Index 56
    { volume: 19, closure: 29, aging: "0-10" }, // Index 57
    { volume: 19, closure: 29, aging: "0-10" }, // Index 58
    { volume: 19, closure: 29, aging: "0-10" }, // Index 59
    { volume: 19, closure: 29, aging: "21-30" }, // Index 60 (Row 7)
    { volume: 19, closure: 29, aging: "21-30" }, // Index 61
    { volume: 19, closure: 29, aging: "0-10" }, // Index 62
    { volume: 19, closure: 29, aging: "21-30" }, // Index 63
    { volume: 19, closure: 29, aging: "0-10" }, // Index 64
    { volume: 19, closure: 29, aging: "0-10" }, // Index 65
    { volume: 19, closure: 29, aging: "21-30" }, // Index 66
    { volume: 19, closure: 29, aging: "0-10" }, // Index 67
    { volume: 19, closure: 29, aging: "0-10" }, // Index 68
    { volume: 19, closure: 29, aging: "0-10" }, // Index 69
    { volume: 19, closure: 29, aging: "0-10" }, // Index 70 (Row 8)
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

  return (
    <>

      {/* main page */}
      <div className="font-sans bg-white min-h-screen print:break-before-page print:h-screen print:scale-95">
        <div className="relative h-[700px] w-full print:h-screen print:overflow-hidden">
          <img
            src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Meeting Room"
            className="w-full h-full object-cover print:object-cover print:h-[600px] print:scale-95"
          />

          <div className="absolute bottom-6 right-10 text-white text-sm leading-relaxed print:text-white">
            <p>
              <span className="font-semibold">Company</span>: UrbanWrk
            </p>
            <p>
              <span className="font-semibold">Industry</span>: Coworking Space
            </p>
          </div>
        </div>

        <div className="relative flex flex-col items-center justify-center py-24 px-6 bg-white print:py-24 print:px-6">
          {/* Red Rectangle */}
          <div className="absolute left-[200px] print:left-[80px] print:top-[-700px] top-[-120px] w-[450px] h-[600px] bg-[#bf0c0c] z-10 flex flex-col items-end justify-center space-y-6 print:bg-[#bf0c0c] print:text-white">
            <div className="text-5xl font-bold text-white print:text-white">QUART</div>
            <div className="text-6xl font-extrabold text-white print:text-white">REP</div>
          </div>

          {/* White Content Box */}
          <div className=" border border-gray-300 px-10 py-12 text-center w-[55vw] h-[60vh] bg-white flex flex-col items-center justify-center space-y-6  print:border print:bg-[#bf0c0c] print:border-gray-300">
            <div className="absolute print:top-[-900px] top-[-120px] left-[45%] w-[450px] h-[600px] z-10 flex flex-col items-start justify-center space-y-6 text-left print:text-red-700">
              <div className="text-5xl font-bold text-red-700 ml-2 print:text-red-700">ERLY</div>
              <div className="text-6xl font-extrabold text-red-700 ml-2 print:text-red-700">ORT</div>
            </div>

            <div className="flex justify-end items-end mb-4 w-full">
              <p className="text-md font-medium text-red-700 print:text-red-700">
                Jan 2025 to Mar 2025
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pb-8 text-sm text-gray-700 print:text-gray-700">
          <span className="font-bold text-red-700 print:text-red-700">go</span>
          <span className="font-semibold">Phygital</span>
          <span>.work</span>
        </div>
      </div>

      {/* Disclaimer Page */}
      <div className="flex flex-col min-h-screen font-sans bg-white px-6 py-10 relative">
        <div className="flex justify-center w-full">
          <img
            src={logo} // change this path as per your folder structure
            alt="URBZ NWRK Logo"
            className="h-12 md:h-16" // adjust height as needed
          />
        </div>
        <div className="mt-6 flex justify-start">
          <div className="inline-block font-bold px-6 py-2 border-2 border-red-700 text-white bg-red-700 transform -skew-x-12">
            <div className="transform skew-x-12">DISCLAIMER</div>
          </div>
        </div>
        <div className="mt-10 max-w-3xl mx-auto text-gray-800 text-base leading-7 text-justify">
          <p className="mb-6">
            The contents of this report reflect operational and performance data sourced from multiple internal systems.
            The analysis provided is based on the available data at the time of compilation and may be subject to future
            updates or corrections.
          </p>
          <p>
            This report is designed to support strategic decision-making, resource planning, and process optimization.
            Readers are advised to consult the relevant teams for clarification before drawing conclusions from the
            information presented. Unauthorized use or external sharing is strictly prohibited.
          </p>
        </div>
        <div className="flex-grow" />
        <div className="text-center flex justify-center align-bottom pb-8 text-sm text-gray-700 print:text-gray-700">
          <span className="font-bold text-red-700 print:text-red-700">go</span>
          <span className="font-semibold">Phygital</span>
          <span>.work</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-red-700 print-footer-bar"></div>
        <div className="absolute bottom-6 right-0 w-30 h-3 bg-red-700 print-footer-small"></div>
      </div>

      {/* Table of Contents Page */}
      <div className="min-h-screen flex flex-col justify-between font-sans text-black bg-white px-10 py-2 relative">
        {/* Header */}
        <div>
          <div className="flex justify-center w-full mt-0">
            <img
              src={logo} // change this path as per your folder structure
              alt="URBZ NWRK Logo"
              className="h-12 md:h-16" // adjust height as needed
            />
          </div>


          {/* Table of Content Title */}
          <div className="mb-2 mt-4">
            <h1 className="text-red-600 font-bold text-xl border-b-4 border-red-600 inline-block pb-1">
              TABLE OF CONTENT
            </h1>
          </div>

          {/* Annexure I */}
          <div className="mb-2 text-sm">
            <h2 className="text-red-600 font-semibold text-lg">Annexure I</h2>
            <div className="mt-1 ml-4">
              <h3 className="font-semibold">1- Meeting Room / Day Pass Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Revenue Generation Overview</li>
                <li>Center Wise - Meeting Room / Day Pass Performance Overview</li>
                <li>Center Wise - Meeting Room Utilization</li>
              </ul>

              <h3 className="font-semibold mt-2">2- Wallet Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Overview Summary</li>
                <li>Site-wise Wallet Summary</li>
                <li>Top 10 Customers by Wallet Usage</li>
              </ul>

              <h3 className="font-semibold mt-2">3- Community Programs Dashboard</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Community Health and Engagement Summary</li>
                <li>Site Wise Adoption Rate</li>
              </ul>
            </div>
          </div>

          {/* Annexure II */}
          <div className="mb-2 text-sm">
            <h2 className="text-red-600 font-semibold text-lg">Annexure II</h2>
            <div className="mt-1 ml-4">
              <h3 className="font-semibold">1- Helpdesk Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Snapshot</li>
                <li>Ticket Ageing, Closure Efficiency & Feedback Overview by Center</li>
                <li>Ticket Performance Metrics by Category – Volume, Closure Rate & Ageing</li>
                <li>Customer Experience Feedback</li>
                <li>Site Performance: Customer Rating Overview</li>
                <li>Response TAT Performance by Center – Quarterly Comparison</li>
              </ul>

              <h3 className="font-semibold mt-2">2- Asset Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Company-Wise Asset Overview</li>
                <li>Center Wise - Assets and Downtime Metrics</li>
                <li>Assets with Highest Maintenance Spend</li>
                <li>AMC Contract Summary</li>
                <li>AMC Contract Summary – Expiry in 90 Days</li>
                <li>AMC Contract Summary – Expired</li>
              </ul>

              <h3 className="font-semibold mt-2">3- Checklist Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Checklist Progress Status – Center-wise Quarterly Comparison</li>
                <li>Top 10 Overdue Checklists – Center-wise Contribution Comparison</li>
              </ul>

              <h3 className="font-semibold mt-2">4- Inventory Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Overview Summary</li>
                <li>Overstock Analysis – Top 10 Items</li>
                <li>Top Consumables – Centre-wise Overview</li>
                <li>Consumable Inventory Value – Quarterly Comparison</li>
              </ul>

              <h3 className="font-semibold mt-2">5- Parking Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Parking Allocation Overview – Paid, Free & Vacant</li>
              </ul>

              <h3 className="font-semibold mt-2">6- Visitor Management</h3>
              <ul className="list-disc list-inside pl-6 print-small">
                <li>Visitor Trend Analysis</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex-grow" />
        <div className="text-center flex justify-center align-bottom pb-5 text-sm text-gray-700 print:text-gray-700">
          <span className="font-bold text-red-700 print:text-red-700">go</span>
          <span className="font-semibold">Phygital</span>
          <span>.work</span>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-red-700 print-footer-bar"></div>
        <div className="absolute bottom-6 right-0 w-30 h-3 bg-red-700 print-footer-small"></div>
      </div>


      {/* First Section: Meeting Room / Hot Desk Performance Overview */}
      <div className="print-only-enhanced print-page break-before-page revenue-section">
        <h1 className="report-title text-2xl font-bold text-center mb-6 py-4 bg-[#C4B89D33]">
          Meeting Room / Day Pass
        </h1>

        <div className="border p-6 bg-white text-black shadow print:text-black print:bg-white print:p-6 print:border print:shadow-none print:w-[95%] print:mx-auto">
          <h2 className="text-2xl font-bold mb-4 print:text-2xl print:font-bold">
            Revenue Generation Overview
          </h2>

          <hr className="mb-6 border-gray-400 print:border-gray-400" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2 print:gap-4">
            <div className="bg-[#dfd9ce] p-6 print:bg-[#dfd9ce]">
              <p className="italic text-lg mb-1 print:italic print:text-lg">
                Total Revenue from
              </p>
              <div className="flex justify-between items-center print:flex print:justify-between">
                <p className="text-2xl font-bold print:text-1xl print:font-bold">
                  UrbanWrk
                </p>
                <p className="text-3xl font-bold text-red-600 print:text-red-600 print:text-2xl">
                  ₹1,00,000
                </p>
              </div>
            </div>

            <div className="bg-[#dfd9ce] p-6 print:bg-[#dfd9ce]">
              <p className="italic text-lg mb-1 print:italic print:text-lg">
                Total Revenue from
              </p>
              <div className="flex justify-between items-center print:flex print:justify-between">
                <p className="text-2xl font-bold print:text-1xl print:font-bold">
                  My HQ
                </p>
                <p className="text-3xl font-bold text-red-600 print:text-red-600 print:text-2xl">
                  ₹60,000
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 mt-4 avoid-break">
          <h2 className="text-lg font-semibold text-red-600 mb-4">
            Center Wise - Meeting Room / Day Pass Performance Overview
          </h2>
          <div className="overflow-x-auto print:overflow-visible">
            <table className="min-w-full border text-sm text-center print:text-xs print:w-full print:table-fixed">
              <thead className="bg-[#ded9cd] text-[#b62527] font-semibold text-sm">
                <tr>
                  <th className="border border-black p-3 text-left align-middle" rowSpan={2}>
                    Site Name
                  </th>
                  <th className="border border-black p-3 text-center" colSpan={3}>
                    Meeting Room
                  </th>
                  <th className="border border-black p-3 text-center" colSpan={3}>
                    Day Pass
                  </th>
                </tr>
                <tr>
                  <th className="border border-black p-2 text-center">Utilization<br />Rate (in %)</th>
                  <th className="border border-black p-2 text-center">Cancellation<br />Rate (in %)</th>
                  <th className="border border-black p-2 text-center">Revenue<br />(in ₹)</th>
                  <th className="border border-black p-2 text-center">Utilization<br />Rate (in %)</th>
                  <th className="border border-black p-2 text-center">Cancellation<br />Rate (in %)</th>
                  <th className="border border-black p-2 text-center">Revenue<br />(in ₹)</th>
                </tr>
              </thead>

              <tbody>
                {revenueData.table.map((row, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="p-2 border font-medium print:p-1">{row.site}</td>
                    <td className="p-2 border print:p-1">
                      {row.meeting.util} <Arrow up={row.meeting.utilUp} />
                    </td>
                    <td className="p-2 border print:p-1">
                      {row.meeting.cancel} <Arrow up={row.meeting.cancelUp} />
                    </td>
                    <td className="p-2 border print:p-1">
                      {row.meeting.revenue} <Arrow up={row.meeting.revenueUp} />
                    </td>
                    <td className="p-2 border print:p-1">
                      {row.hotDesk.util} <Arrow up={row.hotDesk.utilUp} />
                    </td>
                    <td className="p-2 border print:p-1">
                      {row.hotDesk.cancel} <Arrow up={row.hotDesk.cancelUp} />
                    </td>
                    <td className="p-2 border print:p-1">
                      {row.hotDesk.revenue} <Arrow up={row.hotDesk.revenueUp} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-gray-500 mt-2 print:text-[10px]">
              <strong>Note:</strong> This table illustrates meeting utilization, cancellations, and revenue generation,
              along with directional arrows indicating growth or decline compared to the previous quarter.
            </p>
          </div>
        </div>
      </div>

      {/* Second Section: Center Wise - Meeting Room Utilization */}
      <div className="mt-4 bg-white break-before-page print:p-2 print:bg-white print:overflow-visible print:origin-top-left meeting-room-utilization min-h-[800px] print:min-h-[300px]">
        <div className="border border-gray-400 p-4 w-full print:w-[95%] print:max-w-none print:mx-auto">
          {/* Title */}
          <h1 className="text-xl text-left font-bold mb-6 print:text-xl">
            Center Wise - Meeting Room Utilization
          </h1>

          <div className="border border-gray-100 mb-3"></div>

          {/* Legend */}
          <div className="flex justify-end items-center gap-6 mb-6 print:gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-100 border border-gray-400 rounded-full"></div>
              <span className="text-base print:text-sm">0-39%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-yellow-100 border border-gray-400 rounded-full"></div>
              <span className="text-base print:text-sm">40-69%</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-100 border border-gray-400 rounded-full"></div>
              <span className="text-base print:text-sm">70-100%</span>
            </div>
          </div>

          {/* Chart Grid */}
          <div className="border border-gray-400 no-break">
            {/* Data Rows First */}
            {sites.map((site, siteIndex) => (
              <div key={siteIndex} className="grid grid-cols-9 border-b border-gray-400">
                <div className="border-r border-gray-400 p-3 bg-gray-50 font-medium text-base text-right print:p-2 print:text-sm">{site}</div>
                {utilizationRanges.slice(0, 8).map((range, rangeIndex) => {
                  const roomName = getRoomName(site, range);
                  const cellColor = getCellColor(range);
                  return (
                    <div
                      key={rangeIndex}
                      className={`border-r border  border-gray-400 p-2 text-sm font-semibold text-center ${cellColor} min-h-[120px] flex items-center justify-center print:p-1 print:text-xs print:min-h-[80px]`}
                    >
                      {roomName && (
                        <div className="leading-tight">
                          {roomName.includes(",")
                            ? roomName.split(",").map((name, i) => <div key={i}>{name.trim()}</div>)
                            : roomName}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Header Row moved to bottom */}
            <div className="grid grid-cols-9 border-t border-gray-400">
              <div className="border-r border-gray-400 p-3 bg-gray-50 font-semibold text-center print:p-2">
                <div className="transform -rotate-90 whitespace-nowrap text-base print:text-sm">Sites</div>
              </div>
              {utilizationRanges.slice(0, 8).map((range, index) => (
                <div
                  key={index}
                  className="border-r border-gray-400 p-2 bg-gray-50 text-sm font-semibold text-center min-h-[120px] flex items-center justify-center print:p-1 print:text-xs print:min-h-[100px]"
                >
                  {range}
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Label */}
          <div className="mt-4 font-semibold w-full text-center centerone text-base print:text-sm">
            Utilization Rate
          </div>

          {/* Note */}
          <div className="mt-6 text-base print:text-sm">
            <span className="font-semibold">Note :</span> This table presents meeting room-wise utilization along with
            corresponding utilization percentages, providing a center-wise comparison to identify performance variations
            across locations.
          </div>
        </div>
      </div>

      {/* Third Section: Wallet Management */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-2xl font-bold mb-4 text-center bg-[#F6F4EE] py-4 print:text-2xl print:font-bold print:mb-2 print:bg-[#F6F4EE] print:py-3">
          Wallet Management
        </h1>

        {/* Overview Summary */}
        <div className="border p-6 no-break overview-summary-section print:p-3 print:w-[95%] print:mx-auto">
          <h2 className="text-xl font-semibold mb-4 print:text-lg print:font-semibold print:mb-2">Overview Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 print:grid-cols-2 print:grid-rows-3 print:gap-1">
            {walletOverviewData.map((item, index) => (
              <div
                key={index}
                className={`overview-box rounded-md p-6 flex flex-col justify-center items-center h-[120px] print:p-2 print:h-[80px] ${index === 2 || index === 3 || index === 5 ? 'bg-[#E8E3D7] print:bg-[#E8E3D7]' : 'bg-[#F6F4EE] print:bg-[#F6F4EE]'
                  }`}
              >
                <div className="text-[28px] font-bold text-[#ba1f2f] print:text-[18px]">
                  {item.value}
                </div>
                <div className="text-[16px] font-semibold text-black text-center mt-1 print:text-[10px] print:mt-0">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Site-wise Wallet Summary and Top 10 Customers */}
        <div className="border py-4 px-4 no-break wallet-tables print:p-3 print:w-[95%] print:mx-auto">
          {/* Site-wise Wallet Summary */}
          <div className="no-break">
            <h2 className="text-xl font-semibold mb-4 print:text-base print:font-semibold print:mb-1">Site-wise Wallet Summary</h2>
            <div className="overflow-x-auto print:overflow-visible">
              <table className="min-w-full divide-y divide-gray-300 border print:text-[10px] print:w-full print:table-fixed">
                <thead>
                  <tr className="bg-[#dfdbcf] text-[#b61624] text-center text-xs font-semibold border border-black print:text-[10px]">
                    {[
                      "Site Name",
                      "Total Wallet\nBalance",
                      "Top-ups",
                      "Usage",
                      "Comp.\nPoints",
                      "Refunds",
                      "Expiry Point",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="py-1 px-1 whitespace-pre-line border border-black print:py-[2px] print:px-[2px]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>


                <tbody className="text-sm text-black print:text-[10px]">
                  {siteWiseData.map((row, idx) => (
                    <tr key={idx} className="bg-white border-b border-gray-300 print:border-b print:border-black">
                      {row.map((cell, i) => (
                        <td
                          key={i}
                          className={`px-4 py-2 ${i === 0 ? "bg-[#f8f6f4] font-medium" : ""} print:px-1 print:py-0.5`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>

              </table>
              <p className="text-xs text-gray-700 italic mt-2 px-2 pb-2 print:text-[8px] print:mt-1 print:pb-1">
                <strong>Note</strong> : This table presents the total wallet balance across sites along with a
                detailed breakdown of usage, complimentary credits, top-ups, and expired points, offering a
                comprehensive view of wallet activity and status.
              </p>
            </div>
          </div>

          {/* Top 10 Customers */}
          <div className="no-break">
            <h2 className="text-lg font-semibold mb-2 print:text-sm print:font-semibold print:mb-1">Top 10 Customers by Wallet Usage</h2>
            <div className="overflow-auto print:overflow-visible">
              <table className="min-w-full table-auto border border-gray-300 print:text-[10px] print:w-full print:table-fixed">
                <thead className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030] print-bg-red">
                  <tr>
                    <th className="px-4 py-2 print:px-1 print:py-0.5 print:w-[25%]">Customer Name</th>
                    <th className="px-4 py-2 print:px-1 print:py-0.5 print:w-[25%]">Site</th>
                    <th className="px-4 py-2 print:px-1 print:py-0.5 print:w-[25%]">Wallet Usage</th>
                    <th className="px-4 py-2 print:px-1 print:py-0.5 print:w-[25%]">Active Users</th>
                  </tr>
                </thead>
                <tbody>
                  {topCustomersData.map((cust, i) => (
                    <tr key={i} className="text-center">
                      <td className="px-4 py-2 print:px-1 print:py-0.5 bg-[#F3F1EB]">{cust.name}</td>
                      <td className="px-4 py-2 print:px-1 print:py-0.5">{cust.site}</td>
                      <td className="px-4 py-2 print:px-1 print:py-0.5">{cust.usage}</td>
                      <td className="px-4 py-2 print:px-1 print:py-0.5">{cust.users}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="text-xs text-gray-700 italic mt-2 px-2 pb-2 print:text-[8px] print:mt-1 print:pb-1">
                <strong>Note</strong> : This table presents the top customers by wallet usage, highlighting key
                clients and their activity across sites.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fourth Section: Community Programs Dashboard */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-3xl bg-[#F6F4EE] py-5 font-bold text-center text-gray-800 mb-6 print:text-black print:text-xl print:py-2 print:mb-1">
          Community Programs Dashboard
        </h1>
        <div className="bg-white p-8 border print:border print:border-gray-300 print:p-2 print:w-[95%] print:mx-auto no-break">
          <div className="grid grid-cols-2 gap-4 mb-8 print:gap-1 print:mb-2">
            {/* Total Active Users Block */}
            <div className="bg-[#DAD6C9] p-6 rounded shadow print:p-2 print:shadow-none">
              {/* Top section: 450 + Total Active Users */}
              <div className="flex items-center gap-4 mb-6 print:mb-2">
                <p className="text-4xl font-bold text-[#C72030] print:text-xl">450</p>
                <div>
                  <p className="text-lg font-bold text-black leading-tight print:text-sm">Total Active Users</p>
                  <p className="text-sm text-black print:text-[10px]">(App Downloaded)</p>
                </div>
              </div>

              {/* Bottom section: Android and iOS */}
              <div className="flex items-center justify-start gap-6 text-[#C72030] print:gap-2">
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold print:text-sm">250</p>
                  <p className="text-black font-semibold text-sm print:text-[10px]">Android</p>
                </div>
                <div className="border-l h-6 border-black"></div>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold print:text-sm">100</p>
                  <p className="text-black font-semibold text-sm print:text-[10px]">IOS</p>
                </div>
              </div>
            </div>

            {/* New Users Block */}
            <div className="bg-[#DAD6C9] p-6 rounded shadow print:p-2 print:shadow-none">
              <div className="flex items-center gap-3">
                <p className="text-4xl font-bold text-[#C72030] print:text-xl">56</p>
                <span className="text-green-600 text-2xl print:text-base">↑</span>
              </div>
              <p className="text-black font-semibold text-lg mt-2 print:text-[10px]">New Users</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-700 mb-4 print:text-black print:text-sm print:mb-1">Community Health and Engagement Summary</h2>
          <hr className="border-t border-gray-400 mb-4 print:border-black print:mb-1" />

          <div className="overflow-x-auto print:overflow-visible mb-12 community-section print:mb-2">
            <table className="table-auto w-full border border-black print:table-fixed print:w-full print:text-[8.8px]">
              <thead className="bg-[#DAD6C9] text-[#C72030] print-bg-red">
                <tr>
                  {[
                    "Center Name", "Events Held", "Event Attendance %", "Active Chat Users",
                    "Chat Group Activity", "Post", "Avg Interaction", "Total Members"
                  ].map((header, idx) => (
                    <th key={idx} className="p-2 border border-black print:p-1 print:w-[10%] text-center">{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {communityData.map((row, i) => (
                  <tr key={i} className="text-center bg-[#F3F1EB80] print:bg-white">
                    <td className="p-2 border border-black print:p-1">{row.center}</td>
                    <td className="p-2 border border-black print:p-1">{row.events}</td>
                    <td className="p-2 border border-black print:p-1">{row.attendance}</td>
                    <td className="p-2 border border-black print:p-1">{row.chatUsers}</td>
                    <td className="p-2 border border-black print:p-1">{row.chatMsgs}</td>
                    <td className="p-2 border border-black print:p-1">{row.posts}</td>
                    <td className="p-2 border border-black print:p-1">{row.interaction}</td>
                    <td className="p-2 border border-black print:p-1">{row.members}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Section Heading & Divider */}
          <h2 className="text-xl font-semibold text-gray-700 mb-4 print:text-black print:text-sm print:mb-1">            Site Wise Adoption Rate
          </h2>
          <hr className="border-t border-gray-400 mb-4 print:border-black print:mb-1" />

          {/* Legend */}
          <div className="flex items-end gap-16 mb-4 justify-end print:gap-2 print:mb-1 print:text-[8.8px]">
            {[
              { color: "bg-red-600", underline: "border-red-600", label: "0–39%" },
              { color: "bg-yellow-400", underline: "border-yellow-400", label: "40–69%" },
              { color: "bg-green-600", underline: "border-green-600", label: "70–100%" },
            ].map(({ color, underline, label }, idx) => (
              <div key={idx} className="flex flex-col items-center gap-1 print:gap-[2px]">
                <div className="flex items-center gap-1">
                  <span className={`w-4 h-4 rounded-full ${color} inline-block print:w-3 print:h-3`} />
                  <span className="text-sm font-bold text-black print:text-black print:text-[8.8px]">{label}</span>
                </div>
                <span className={`border-b-1 ${underline} w-full rounded-full`}></span>
              </div>
            ))}
          </div>



          {/* Adoption Table */}
          <div className="overflow-x-auto print:overflow-visible">
            <table className="table-auto w-full border border-black print:table-fixed print:w-full print:text-[8.8px]">
              <thead className="bg-[#DAD6C9] text-[#C72030] print-bg-red">
                <tr>
                  {[
                    "Site Name", "Helpdesk", "Assets", "Checklist (Tech)",
                    "Checklist (Non-Tech)", "Inventory", "Meeting Room",
                    "Day Pass"
                  ].map((header, idx) => (
                    <th
                      key={idx}
                      className="p-2 border border-black print:p-1 print:w-[11%] text-center"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {adoptionData.map((row, i) => (
                  <tr key={i} className="text-center print:even:bg-white">
                    <td className="p-2 border border-black font-semibold text-left print:p-1">{row[0]}</td>
                    {row.slice(1, 8).map((value, idx) => (
                      <td
                        key={idx}
                        className="p-2 border border-black print:p-1"
                      >
                        <div className={`inline-block border-b-2 ${getColor(value)}`}>
                          {value}%
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4 print:text-black print:text-[8.8px] print:mt-1 space-y-2 print:space-y-0">
            <strong>Note :</strong> The table displays module-wise adoption percentages, calculated based on the following logic/formula.<br /><br />
            <span className="block mt-3 print:mt-0"><strong>Helpdesk</strong> : Total Closed Tickets / Total Raised Tickets * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Assets</strong> : (Number Of Asset In Use / Total Number Of Assets) * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Checklist (Tech)</strong> : Total Checklist Completed / Total Schedule Checklist * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Checklist (Nontech)</strong> : Total Checklist Completed / Total Schedule Checklist * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Inventory</strong> : (Number Of Items Used / Total Items Available) × 100</span>
            <span className="block mt-3 print:mt-0"><strong>Meeting Room</strong> : (Booked Slots / Total Available Slots) * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Day Pass</strong> : (Occupied Desks / Total Available Desks) * 100</span>
            <span className="block mt-3 print:mt-0"><strong>Customer users</strong> : Total Count Of Active Customer Users</span>
          </p>


        </div>
      </div>

      {/* Fifth Section: Helpdesk Management */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-3xl font-bold text-center mb-6 bg-[#F6F4EE] py-5 text-gray-800 print:text-black print:text-xl print:mb-1 print:py-2">
          Helpdesk Management
        </h1>
        <div className="bg-white border p-8 print:border print:border-gray-300 print:p-2 print:w-[95%] print:mx-auto no-break">
          {/* Snapshot Section */}
          <div className="mb-10 print:mb-1">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 print:text-sm print:mb-1 print:pb-1">Snapshot</h2>
            <div className="grid grid-cols-3 gap-6 print:gap-1">
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold print:text-xl">657</div>
                <div className="text-sm font-medium print:text-[10px]">100.0 %</div>
                <div className="text-sm font-bold print:text-[10px]">Total Tickets</div>
              </div>
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold text-green-600 print:text-xl print:text-green-600">555</div>
                <div className="text-sm font-medium print:text-[10px]">84.47 %</div>
                <div className="text-sm font-bold print:text-[10px]">Closed Tickets</div>
              </div>
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold text-red-600 print:text-xl print:text-red-600">102</div>
                <div className="text-sm font-medium print:text-[10px]">15.53 %</div>
                <div className="text-sm font-bold print:text-[10px]">Open Tickets</div>
              </div>
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold print:text-xl">9</div>
                <div className="text-sm font-bold print:text-[10px]">Customer Tickets</div>
              </div>
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold print:text-xl">49</div>
                <div className="text-sm font-bold print:text-[10px]">FM Tickets</div>
              </div>
              <div className="bg-[#f9f7f2] p-6 text-center print:bg-[#f9f7f2] print:p-1">
                <div className="text-3xl font-bold print:text-xl">0</div>
                <div className="text-sm font-bold print:text-[10px]">Total Average Customer Rating</div>
              </div>
            </div>
          </div>

          {/* Table Section 1 */}
          <div className="table-section w-full overflow-x-auto print:overflow-visible border py-3 px-3 mb-5 print:p-1 print:mb-1">
            <h2 className="text-xl font-semibold mb-4 border-b border-gray-300 pb-2 print:text-sm print:mb-1 print:pb-1">Ticket Ageing, Closure Efficiency & Feedback Overview by Center</h2>
            <table className="w-full border text-sm text-center break-words print:table-fixed print:w-full print:text-[8px]">
              <thead className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030] font-semibold print-bg-red">
                <tr>
                  {siteNames.map((site, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-200 px-2 py-3 text-[10px] print:text-[7px] print:px-1 print:py-1 print:w-[10%] print:min-h-[20px]"
                      style={{ wordWrap: "break-word", whiteSpace: "normal" }}
                    >
                      {site}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableData.map(([label, values], idx) => (
                  <tr
                    key={idx}
                    className={`${idx === 5 ? "bg-[#DAD6C9] font-semibold print:bg-[#DAD6C9]" : ""}`}
                  >
                    <td className="border border-gray-200 px-2 py-3 font-medium bg-[#F3F1EB80] print:px-1 print:py-1 print:bg-[#F3F1EB80] print:min-h-[20px]">
                      {label}
                    </td>
                    {values.map((value, vIdx) => (
                      <td
                        key={vIdx}
                        className="border border-gray-200 px-2 py-3 print:px-1 print:py-1 print:min-h-[20px]"
                      >
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs mt-2 text-gray-600 print:text-[8px] print:mt-1">
              <strong>Note</strong> : This chart illustrates the number of tickets closed below or above the average aging time, along with the number of customer responses received. It also reflects the percentage of responded tickets relative to the total tickets raised.
            </p>
          </div>

          {/* Ticket Performance Metrics Section */}
          <div className="ticket-metrics-section mb-10 print:mb-1">
            <div className="border border-gray-300 flex flex-col justify-center m-auto w-[100%] p-10 print:w-[100%] print:mx-auto print:p-2">
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
                <h1 className="text-lg font-bold mb-2 print:text-sm print:mb-1">
                  Ticket Performance Metrics by Category – Volume, Closure Rate & Ageing
                </h1>
                <div className="flex items-center justify-between gap-4 flex-wrap text-sm print:text-xs print:gap-2">
                  <div className="flex items-center gap-1">
                    <span>% of tickets raised by category</span>
                    <ArrowRightLeft className="w-4 h-4 rotate-180 text-gray-500" />
                    <span>% of tickets closure by category</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Ageing:</span>
                    <div className="flex items-center gap-2 print:gap-1">
                      {Object.entries(agingColors).map(([range, color]) => (
                        <div key={range} className="flex items-center gap-1">
                          <span className={`w-4 h-4 rounded-full ${color} print:w-3 print:h-3`}></span>
                          <span>{range}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Grid and Site Row Container */}
              <div className="flex justify-center mt-10 print:mt-2">
                <div className="flex">
                  {/* Left Categories */}
                  <div className="flex flex-col justify-around gap-[2px]">
                    {categories.map((cat, idx) => (
                      <div key={idx} className="h-16 flex items-center justify-end pr-1 text-[10px] font-medium print:text-[8px] print:h-10">
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Grid and Site Labels */}
                  <div className="flex flex-col">
                    {/* Grid Box */}
                    <div className="grid grid-cols-10 gap-[10px] border-l border-b p-1 print:gap-[10px]">
                      {Newdata.map((item, index) => (
                        <div key={index} className="relative w-[100px] h-16 print:w-[50px] print:h-10 border border-[#C4AE9D] bg-white">
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

                    {/* Site Row */}
                    <div className="grid grid-cols-10 gap-[2px] print:gap-[2px] mt-2 print:mt-1">
                      {Newsites.map((site, index) => (
                        <div key={index} className="text-center text-[10px] font-medium print:text-[8px] w-[100px] print:w-[50px]">
                          {site}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Experience Feedback and Site Performance on New Page */}
        <div className="print-page break-before-page  print:w-[95%] print:m-auto">
          {/* Customer Experience Feedback */}
          <div className="border border-gray-300 p-6 mb-10 no-break print:p-2 print:mb-2">
            <h2 className="text-xl font-bold mb-4 border-b border-gray-300 pb-2 print:text-sm print:mb-1 print:pb-1">Customer Experience Feedback</h2>
            <div className="grid grid-cols-5 print:gap-1">
              {customerExperienceData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center h-[140px] print:h-[150px] border-r last:border-r-0"
                  style={{ backgroundColor: item.bg, color: item.text || "#000" }}
                >
                  <div className="text-3xl font-bold print:text-xl">{item.value}</div>
                  <div className="text-sm font-medium print:text-[10px]">{item.percent}</div>
                  <div className="text-base font-semibold mt-1 print:text-[10px] print:mt-0">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Site Performance Table 2 */}
          <div className="site-performance bg-white border p-6 overflow-auto no-break print:p-2">
            <h2 className="text-xl font-bold mb-4 print:text-base print:mb-2">
              Site Performance: Customer Rating Overview
            </h2>
            <table className="min-w-full text-base text-center border print:table-fixed print:w-full print:text-[12px]">
              <thead className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030]">
                <tr>
                  <th className="border border-gray-200 px-3 py-6 print:px-2 print:py-10 print:min-h-[50px]">
                    Site Name
                  </th>
                  {customerRatingTable.headers.map((site, idx) => (
                    <th
                      key={idx}
                      className="border border-gray-200 px-3 py-6 print:px-2 print:py-10 print:min-h-[50px]"
                    >
                      {site}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {customerRatingTable.rows.map((row, idx) => {
                  const isTotal = row.label === "Total %";
                  return (
                    <tr key={idx} className={isTotal ? "font-semibold bg-[#DAD6C9]" : ""}>
                      <td
                        className={`px-3 py-6 print:px-2 print:py-10 print:min-h-[50px] font-medium ${isTotal
                          ? "border border-gray-300"
                          : "border-l border-r border-gray-200 bg-[#F3F1EB80] print:bg-[#F3F1EB80]"
                          }`}
                      >
                        {row.label}
                      </td>
                      {row.values.map((val, vIdx) => (
                        <td
                          key={vIdx}
                          className={`px-3 py-6 print:px-2 print:py-10 print:min-h-[50px] ${isTotal
                            ? "border border-gray-300"
                            : "border-l border-r border-gray-200"
                            }`}
                        >
                          {val}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <p className="text-sm mt-3 text-gray-600 print:text-[9px] print:mt-2">
              <strong>Note</strong>: This table displays customer rating percentages categorized from Excellent to Bad, with a site-level comparison to evaluate performance and satisfaction trends across locations.
            </p>
          </div>


        </div>
      </div>


      <div className="print-page break-before-page px-6 py-8 print:px-4 print:py-6 bg-white">
        <h2 className="text-xl font-bold mb-4 text-left">
          Response TAT Performance by Center – Quarterly Comparison
        </h2>

        {/* Legend */}
        <div className="flex justify-end gap-6 text-sm mb-6 text-gray-700">
          <div>
            <span className="inline-block w-3 h-3 mr-1 border border-black rounded-full"></span>
            Response Achieved: Last Quarter
            <span className="inline-block w-3 h-3 ml-2 bg-[#cbb9a2] border border-black rounded-full"></span>
            Current Quarter
          </div>
          <div>
            <span className="inline-block w-3 h-0.5 bg-black mr-1"></span>
            Resolution Achieved: Last Quarter
            <span className="inline-block w-3 h-0.5 bg-[#c72030] ml-2"></span>
            Current Quarter
          </div>
        </div>

        <div className="text-center font-semibold mb-2">TAT in Percentage</div>

        <div className="h-[900px] print:h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={Bardata}
              layout="vertical"
              margin={{ top: 0, right: 60, bottom: 0, left: 160 }}
            >
              <CartesianGrid stroke="#ddd" horizontal={true} vertical={false} />
              <XAxis
                type="number"
                domain={[0, 100]}
                tickFormatter={(tick) => `${tick}%`}
                tick={{ fontSize: 12 }}
              />
              <YAxis
                dataKey="site"
                type="category"
                tick={{ fontSize: 13, fontWeight: 500 }}
                width={150}
              />

              {/* Response Bars */}
              <Bar dataKey="responseLast" fill="url(#pattern)" barSize={20} radius={[0, 4, 4, 0]} />
              <Bar dataKey="responseCurrent" fill="#cbb9a2" barSize={20} radius={[0, 4, 4, 0]} />

              {/* Resolution Lines */}
              <Line
                type="monotone"
                dataKey="resolutionLast"
                stroke="#000"
                dot={{ r: 4, stroke: "#000", strokeWidth: 1.5, fill: "#fff" }}
                strokeWidth={1.5}
              />
              <Line
                type="monotone"
                dataKey="resolutionCurrent"
                stroke="#c72030"
                dot={{ r: 4, stroke: "#c72030", strokeWidth: 1.5, fill: "#fff" }}
                strokeWidth={1.5}
              />

              {/* Custom Connection Lines */}
              <Customized component={() => <CustomResolutionDots data={Bardata} />} />

              <defs>
                <pattern id="pattern" patternUnits="userSpaceOnUse" width="6" height="6">
                  <path d="M0,0 L6,6 M6,0 L0,6" stroke="#cbb9a2" strokeWidth="1" />
                </pattern>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <p className="text-xs text-gray-700 mt-6 border-t pt-2">
          <span className="font-bold">Note:</span> The bar graph represents the response TAT achieved in the current and previous quarter,
          while the line graph indicates the resolution TAT achieved over the same period.
        </p>
      </div>

      {/* Ninth Section: Asset Management (New Section) */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-3xl font-bold text-center bg-[#F6F4EE] py-4 mb-10 print:text-black print:text-xl print:mb-1 print:py-2">
          Asset Management
        </h1>

        {/* Main Container */}
        <div className="bg-white border p-4 print:border-black print:p-2 print:w-[95%] print:mx-auto no-break">

          {/* Company Wise Overview */}
          <div className="bg-white border border-black p-4 mb-10 print:p-2 print:mb-2 no-break">
            <h2 className="text-xl font-semibold mb-4 border-b border-black py-4 print:text-[12px] print:mb-1 print:py-2.5">
              Company Wise Asset Overview
            </h2>
            <div className="grid grid-cols-3 bg-[#DAD6C9] text-[#C72030] text-center font-semibold overflow-hidden print-bg-red">
              <div className="py-4 border-r border-white print:py-2.5 print:text-[12px]">Total Available Asset</div>
              <div className="py-4 border-r border-white print:py-2.5 print:text-[12px]">Asset in breakdown</div>
              <div className="py-4 print:py-2.5 print:text-[12px]">Average Downtime</div>
            </div>
            <div className="grid grid-cols-3 bg-[#f2f0eb] text-center font-bold text-2xl py-6 border-t border-black print:text-lg print:py-2.5">
              <div className="border-r border-black">30,000</div>
              <div className="border-r border-black">500</div>
              <div>8 Days</div>
            </div>
          </div>

          {/* Center Wise Metrics Table */}

          {/* Table 1 */}
          <div className="center-metrics-table overflow-x-auto print:overflow-visible no-break print:p-1 print:mb-1">
            <h2 className="text-xl font-semibold py-4 border-b border-black mb-4 print:text-[10px] print:py-1 print:mb-1">
              Center Wise – Assets And Downtime Metrics
            </h2>

            <table className="min-w-full border border-black text-sm text-center print:table-fixed print:w-full print:text-[10px] print:leading-tight">
              <thead>
                <tr className="bg-[#DAD6C9] text-[#C72030] font-bold text-[14px] print:text-[10px]">
                  <th rowSpan="2" className="border border-black px-2 py-1 print:px-1 print:py-1 w-[20%] text-left">Site Name</th>
                  <th rowSpan="2" className="border border-black px-2 py-1 print:px-1 print:py-1">Total No. of Assets</th>
                  <th colSpan="2" className="border border-black px-2 py-1 print:px-1 print:py-1">Critical</th>
                  <th colSpan="2" className="border border-black px-2 py-1 print:px-1 print:py-1">Non-Critical</th>
                </tr>
                <tr className="bg-[#DAD6C9] text-[#C72030] font-bold text-[13px] print:text-[10px]">
                  <th className="border border-black px-2 py-1 print:px-1 print:py-1">Total No. of Breakdown</th>
                  <th className="border border-black px-2 py-1 print:px-1 print:py-1">Average day</th>
                  <th className="border border-black px-2 py-1 print:px-1 print:py-1">Total No. of Breakdown</th>
                  <th className="border border-black px-2 py-1 print:px-1 print:py-1">Average day</th>
                </tr>
              </thead>

              <tbody>
                {[
                  ["Sai Radhe Bund Garden", 1000, 300, 10, 300, 8],
                  ["Westport, Baner", 500, 450, 15, 450, 10],
                  ["Peninsula", 324, 245, 5, 245, 8],
                  ["Koncord", 542, 170, 12, 170, 7],
                  ["AeroMall", 896, 476, 9, 234, 3],
                  ["Nandan Probiz", 987, 476, 9, 432, 7],
                  ["Raheja Mindspace", 678, 476, 7, 222, 8],
                  ["Technopolis, Salt Lake", 654, 476, 4, 325, 4],
                  ["Bani - The Statement", 876, 476, 8, 542, 6],
                ].map(([site, assets, cBreak, cAvg, ncBreak, ncAvg], idx) => (
                  <tr key={idx} className="text-[13px] print:text-[10px]">
                    <td className="border border-black px-2 py-2 text-left bg-[#F3F1EB80] print:px-1 print:py-1">{site}</td>
                    <td className="border border-black px-2 py-2 print:px-1 print:py-1">{assets}</td>
                    <td className="border border-black px-2 py-2 print:px-1 print:py-1">{cBreak}</td>
                    <td className="border border-black px-2 py-2 print:px-1 print:py-1">{cAvg}</td>
                    <td className="border border-black px-2 py-2 print:px-1 print:py-1">{ncBreak}</td>
                    <td className="border border-black px-2 py-2 print:px-1 print:py-1">{ncAvg}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="text-xs text-gray-700 mt-2 print:text-[9px] print:mt-1">
              <strong>Note:</strong> This table presents the center-wise total asset count along with the number of breakdown occurrences. It also includes the average downtime for both critical and non-critical assets, offering insights into operational efficiency and helping identify areas that require maintenance prioritization.
            </p>
          </div>


          {/* Table 2 */}
          <div className="bg-white border border-black mt-4 mb-6 print:mt-2 print:p-1 print:mb-1">
            <h2 className="text-xl font-semibold mb-4 print:text-[10px] print:mb-1">
              Assets With Highest Maintenance Spend
            </h2>
            <div className="overflow-x-auto print:overflow-visible">
              <table className="min-w-full border border-black text-sm text-center print:text-[10px]">
                <thead className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030] print-bg-red">
                  <tr>
                    {["Rank", "Asset Name/ID", "Asset Category", "Site name", "Maintenance Cost₹", "Total Maintenance%", "Remark"].map((col) => (
                      <th key={col} className="border border-black px-2 py-1 print:px-0.5 print:py-1">{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    [1, "AC-Unit-XL23", "HVAC", "Sai Radhe", "₹9,000", "9%", "Frequent breakdowns"],
                    [2, "Gen-Back200", "Generator", "Peninsula", "₹1,000", "1%", "Ageing equipment"],
                    [3, "Lift-Mk2", "Elevator", "Westport", "₹7,000", "7%", "Under AMC contract"],
                    [4, "WaterPump-ZX", "Plumbing", "Koncord", "₹6,000", "6%", "Leakage issues"],
                    [5, "ServerRack-QT3", "IT Equipment", "Airomall", "₹5,000", "5%", "Overheating issue"],
                    [6, "AC-Unit-XL23", "HVAC", "Sai Radhe", "₹3,000", "3%", "Frequent breakdowns"],
                    [7, "Gen-Back200", "Generator", "Peninsula", "₹5,000", "5%", "Ageing equipment"],
                    [8, "Lift-Mk2", "Elevator", "Westport", "₹8,500", "8%", "Under AMC contract"],
                    [9, "WaterPump-ZX", "Plumbing", "Koncord", "₹8,000", "8%", "Leakage issues"],
                    [10, "ServerRack-QT3", "IT Equipment", "Airomall", "₹7,000", "7%", "Overheating issue"],
                  ].map(([rank, id, cat, site, cost, perc, remark], idx) => (
                    <tr key={idx} className="bg-white print:bg-white">
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{rank}</td>
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{id}</td>
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{cat}</td>
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{site}</td>
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{cost}</td>
                      <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">{perc}</td>
                      <td className="border border-black px-2 py-1.5 text-left print:px-1 print:py-[10px]">{remark}</td>
                    </tr>
                  ))}
                  <tr className="font-semibold">
                    <td colSpan="4" className="border border-black px-2 py-1.5 text-right print:px-1 print:py-[10px]">Total</td>
                    <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">₹59,000</td>
                    <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]">59%</td>
                    <td className="border border-black px-2 py-1.5 print:px-1 print:py-[8px]"></td>
                  </tr>
                </tbody>

              </table>
            </div>
            <p className="text-xs text-gray-700 mt-2 print:text-[9px] print:mt-1">
              <strong>Note:</strong> Top 10 high-maintenance assets for cost review.
            </p>
          </div>

        </div>

      </div>


      {/*  Active AMC Contracts */}
      <div className="print-page break-before-page print:w-[95%] print:m-auto">
        <div className="bg-white p-2 amc-summary no-break print:p-4 print:px-0 mt-1 print:mt-4 border border-gray-300">
          <h2 className="text-xl font-semibold px-4 py-3 border-gray-400 print:text-[14px] print:py-2">
            AMC Contract Summary
          </h2>

          <div className="grid grid-cols-3  border py-4 text-center bg-[#f2f0eb] text-black font-semibold">
            <div className="border-r border-gray-300 px-4 py-6 print:py-3 print:px-2 print:text-[12px]">
              Active AMC Contracts<br />
              <span className="text-4xl text-[#C72030] font-bold print:text-2xl">60</span>
            </div>
            <div className="border-r border-gray-300 px-4 py-6 print:py-3 print:px-2 print:text-[12px]">
              Contract Expiry in 90 Days<br />
              <span className="text-4xl text-[#C72030] font-bold print:text-2xl">23</span>
            </div>
            <div className="px-4 py-6 print:py-3 print:px-2 print:text-[12px]">
              Contract Expired<br />
              <span className="text-4xl text-[#C72030] font-bold print:text-2xl">14</span>
            </div>
          </div>
        </div>


        <div className="border print:border py-3 px-3 mb-6 break-inside-avoid print:break-inside-avoid">
          <h2 className="bg-white font-bold print:text-2xl text-lg p-3 border-b border-gray-300 print:text-[8px] print:p-1 print:leading-relaxed">
            AMC Contract Summary – Expiry in 90 Days
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-base border-t border-[#e2e0dc] leading-normal print:text-[9px] print:leading-loose print:table-fixed print:w-full">
              <thead className="bg-[#e2e0dc] text-[#c72030]">
                <tr>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Site Name</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">AMC Name</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Contract Start Date</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Contract End Date</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Renewal Reminder</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Projected Renewal Cost (₹)</th>
                  <th className="border border-black px-4 py-3 font-semibold text-left print:px-1 print:py-1.5">Vendor Contact</th>
                </tr>
              </thead>

              <tbody className="text-left">
                {[
                  {
                    site: "Sai Radhe, Bund Garden",
                    amc: "Air Condition",
                    start: "01st Jan 2024",
                    end: "31st Dec 2024",
                    reminder: "Expires in 6 months",
                    cost: "₹360,000",
                    contact: "John Doe (Vendor A)",
                    highlight: false,
                  },
                  {
                    site: "Westport, Baner",
                    amc: "Diesel Generator",
                    start: "15th Mar 2023",
                    end: "14th Mar 2024",
                    reminder: "Expires in 1 Month",
                    cost: "₹300,000",
                    contact: "Jane Smith",
                    highlight: true,
                  },
                  {
                    site: "Peninsula Corporate Park,",
                    amc: "Camera",
                    start: "01st Jul 2023",
                    end: "30th Jun 2024",
                    reminder: "Expires in 3 months",
                    cost: "₹480,000",
                    contact: "Robert Brown",
                    highlight: false,
                  },
                  {
                    site: "Koncord Towers, Bund Garden",
                    amc: "Printer",
                    start: "31th Dec 2023",
                    end: "31st Dec 2024",
                    reminder: "Expires in 7 days",
                    cost: "₹240,000",
                    contact: "Mike Lee",
                    highlight: true,
                  },
                  {
                    site: "Westport, Baner",
                    amc: "Air Condition",
                    start: "01st Apr 2023",
                    end: "31st Dec 2024",
                    reminder: "Expires in 1 month",
                    cost: "₹360,000",
                    contact: "John Doe (Vendor A)",
                    highlight: true,
                  },
                  {
                    site: "Westport, Baner",
                    amc: "Diesel Generator",
                    start: "01st Jan 2024",
                    end: "31st Dec 2024",
                    reminder: "Expires in 6 months",
                    cost: "₹420,000",
                    contact: "Linda Green",
                    highlight: false,
                  },
                ].map((row, i) => (
                  <tr key={i} className="bg-white">
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.site}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.amc}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.start}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.end}</td>
                    <td
                      className={`border px-4 py-3 print:border print:border-black print:px-1 print:py-1.5 ${row.highlight ? "text-[#c72030] font-semibold" : ""
                        }`}
                    >

                      {row.reminder}
                    </td>

                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.cost}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <p className="p-3 text-xs text-gray-600 italic border-t border-gray-300 print:p-1 print:text-[8px] print:leading-relaxed print:mt-2">
            <strong>Note:</strong> This table provides a site-wise summary of AMC contracts that are set to expire within the next 90 days, supporting proactive renewal planning and vendor coordination.
          </p>
        </div>
        <div className="border py-3 px-3 shadow print:shadow-none print:border break-inside-avoid print:break-inside-avoid">
          <h2 className="bg-white font-bold text-lg p-3 border-b border-gray-300 print:text-[8px] print:p-1 print:leading-relaxed">
            AMC Contract Summary – Expired
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-base leading-normal print:table-fixed print:w-full print:text-[9px] print:leading-loose">
              <thead className="bg-[#e2e0dc] text-[#c72030]">
                <tr>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Site Name</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">AMC Name</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Contract Start Date</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Contract End Date</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Status</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Projected Renewal Cost (₹)</th>
                  <th className="border border-black px-4 py-3 print:px-1 print:py-1.5 text-left">Vendor Contact</th>
                </tr>
              </thead>

              <tbody className="text-left">
                {[
                  {
                    siteName: "Sai Radhe, Bund Garden",
                    amcName: "Air Condition",
                    startDate: "01st Jan 2024",
                    endDate: "31st Dec 2024",
                    status: "Expired",
                    cost: "₹360,000",
                    contact: "John Doe (Vendor A)",
                  },
                  {
                    siteName: "Westport, Baner",
                    amcName: "Diesel Generator",
                    startDate: "15th Mar 2023",
                    endDate: "14th Mar 2024",
                    status: "Expired",
                    cost: "₹300,000",
                    contact: "Jane Smith",
                  },
                  {
                    siteName: "Peninsula Corporate Park,",
                    amcName: "Camera",
                    startDate: "01st Jul 2023",
                    endDate: "30th Jun 2024",
                    status: "Expired",
                    cost: "₹480,000",
                    contact: "Robert Brown",
                  },
                  {
                    siteName: "Koncord Towers, Bund Garden",
                    amcName: "Printer",
                    startDate: "31th Dec 2023",
                    endDate: "31st Dec 2024",
                    status: "Expired",
                    cost: "₹240,000",
                    contact: "Mike Lee",
                  },
                  {
                    siteName: "Westport, Baner",
                    amcName: "Air Condition",
                    startDate: "01st Apr 2023",
                    endDate: "31st Dec 2024",
                    status: "Expired",
                    cost: "₹360,000",
                    contact: "John Doe (Vendor A)",
                  },
                  {
                    siteName: "Westport, Baner",
                    amcName: "Diesel Generator",
                    startDate: "01st Jan 2024",
                    endDate: "31st Dec 2024",
                    status: "Expired",
                    cost: "₹420,000",
                    contact: "Linda Green",
                  },
                ].map((row, i) => (
                  <tr key={i} className={"bg-white"}>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.siteName}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.amcName}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.startDate}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.endDate}</td>
                    <td className="border px-4 py-3 font-semibold print:px-1 print:py-2">{row.status}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.cost}</td>
                    <td className="border px-4 py-3 print:px-1 print:py-2">{row.contact}</td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <p className="p-3 text-xs text-gray-600 italic border-t border-gray-300 print:p-1 print:text-[8px] print:leading-relaxed print:mt-2">
            <strong>Note:</strong> This table provides a site-wise summary of AMC contracts that has been expired, supporting proactive renewal planning and vendor coordination.
          </p>
        </div>


      </div>

      {/* Checklist Management */}
      <div className="print-page break-before-page">
        <div className="p-6 bg-white min-h-screen text-black print:bg-white print:text-black print:p-2 print:w-[95%] print:mx-auto no-break">

          <h1 className="report-title text-2xl font-bold mb-6 text-center bg-[#F6F4EE] py-3 print:text-xl print:mb-1 print:py-2">
            Checklist Management
          </h1>

          {/* Table 1: Checklist Progress Status */}
          <div className="border border-gray-300 rounded mb-10 comment  print:mb-2 min-h-[300px]">
            <div className="p-4 font-semibold border-b border-gray-300 print:p-2 print:text-[12px] ">
              Checklist Progress Status – Center-Wise Quarterly Comparison
            </div>
            <table className="w-full border print:table-fixed print:w-full print:text-[11px] ">
              <thead>
                <tr className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030] text-left print-bg-red">
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">Site Name</th>
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">Open</th>
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">In Progress</th>
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">Overdue</th>
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">Partially Closed</th>
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[16%]">Closed</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    site: "Sai Radhe, Bund Garden",
                    open: "38%",
                    inProgress: "38%",
                    overdue: { current: "38%", last: "40%", change: "down" },
                    partiallyClosed: "38%",
                    closed: { current: "38%", last: "40%", change: "up" },
                  },
                  {
                    site: "Westport, Baner",
                    open: "22%",
                    inProgress: "22%",
                    overdue: { current: "22%", last: "10%", change: "up" },
                    partiallyClosed: "22%",
                    closed: { current: "22%", last: "10%", change: "down" },
                  },
                  {
                    site: "Peninsula Corporate Park",
                    open: "38%",
                    inProgress: "38%",
                    overdue: { current: "38%", last: "10%", change: "up" },
                    partiallyClosed: "38%",
                    closed: { current: "38%", last: "10%", change: "down" },
                  },
                  {
                    site: "Koncord Towers, Bund Garden",
                    open: "22%",
                    inProgress: "22%",
                    overdue: { current: "22%", last: "12%", change: "up" },
                    partiallyClosed: "22%",
                    closed: { current: "22%", last: "12%", change: "down" },
                  },
                  {
                    site: "Westport, Baner",
                    open: "38%",
                    inProgress: "38%",
                    overdue: { current: "38%", last: "10%", change: "up" },
                    partiallyClosed: "38%",
                    closed: { current: "38%", last: "10%", change: "down" },
                  },
                  {
                    site: "Westport, Baner",
                    open: "22%",
                    inProgress: "22%",
                    overdue: { current: "22%", last: "10%", change: "down" },
                    partiallyClosed: "22%",
                    closed: { current: "22%", last: "10%", change: "up" },
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 print:bg-gray-50" : ""}>
                    <td className="py-5 px-4 bg-[#F6F4EE] print:py-2 print:px-2 print:bg-[#F6F4EE]">
                      {row.site}
                    </td>
                    <td className="py-5 px-4 print:py-2 print:px-2">{row.open}</td>
                    <td className="py-5 px-4 print:py-2 print:px-2">{row.inProgress}</td>
                    <td className="py-5 px-4 flex items-center gap-1 print:py-2 print:px-2">
                      {row.overdue.current} | {row.overdue.last}{" "}
                      {row.overdue.change === "up" ? (
                        <span className="text-red-600">▲</span>
                      ) : (
                        <span className="text-green-600">▼</span>
                      )}
                    </td>
                    <td className="py-5 px-4 print:py-2 print:px-2">{row.partiallyClosed}</td>
                    <td className="py-5 px-4 flex items-center gap-1 print:py-2 print:px-2">
                      {row.closed.current} | {row.closed.last}{" "}
                      {row.closed.change === "up" ? (
                        <span className="text-green-600">▲</span>
                      ) : (
                        <span className="text-red-600">▼</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-sm mt-4 px-4 py-2 italic text-gray-700 print:text-[12px] print:mt-2 print:px-2 print:py-1 print:text-black">
              <strong>Note :</strong> This table shows checklist progress by status across centers, comparing the current and last quarter. The "Change in Closed" column highlights the shift in closed checklists since the previous quarter.
            </div>
          </div>

          {/* Table 2: Top 10 Overdue Checklists */}
          <div className="border border-gray-300 rounded comment  min-h-[300px]">
            <div className="p-4 font-semibold border-b border-gray-300 print:p-2 print:text-[12px] ">
              Top 10 Overdue Checklists – Center-wise Contribution Comparison
            </div>
            <table className="w-full border text-sm print:table-fixed print:w-full print:text-[11px] ">
              <thead>
                <tr className="bg-[#DAD6C9] text-[#C72030] print:bg-[#DAD6C9] print:text-[#C72030] text-left print-bg-red">
                  <th className="py-4 px-4 print:py-2 print:px-2 print:w-[15%]">Category</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Pest Control Checklist</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Plants Hydration</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Fire Alarm</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Sanitary Bins</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Pest Control</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Plants Hydration</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Fire Alarm</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Pest Control</th>
                  <th className="py-4 px-2 print:py-2 print:px-1 print:w-[8.5%]">Pest Control</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    category: "Sai Radhe, Bund Garden",
                    values: ["38%", "12%", "8%", "27%", "25%", "13%", "20%", "11%", "56%"],
                  },
                  {
                    category: "Westport,Baner",
                    values: ["22%", "24%", "12%", "17%", "1%", "63%", "96%", "7%", "14%"],
                  },
                  {
                    category: "Westport,Baner",
                    values: ["10%", "30%", "12%", "3%", "8%", "63%", "96%", "3%", "20%"],
                  },
                  {
                    category: "Peninsula Corporate Park,",
                    values: ["4%", "6%", "8%", "0%", "15%", "63%", "96%", "2%", "5%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                  {
                    category: "Koncord, Bund Garden",
                    values: ["0%", "4%", "8%", "10%", "1%", "20%", "20%", "0%", "4%"],
                  },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-gray-50 print:bg-gray-50" : ""}>
                    <td className="py-5 px-4 bg-[#F6F4EE] print:py-2 print:px-2 print:bg-[#F6F4EE]">{row.category}</td>
                    {row.values.map((value, index) => (
                      <td key={index} className="py-5 px-2 text-center print:py-2 print:px-1">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="text-sm mt-4 px-4 py-2 italic text-gray-700 print:text-[12px] print:mt-2 print:px-2 print:py-1 print:text-black">
              <strong>Note :</strong> The table displays the top 10 most overdue checklists, with a center-wise
              breakdown of their contribution to the overall overdue count, helping identify key areas of concern.
            </div>
          </div>

        </div>
      </div>

      {/* Inventory Management */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-2xl font-bold mb-6 text-center bg-[#F6F4EE] py-3 print:text-xl print:mb-1 print:py-0">
          Inventory Management
        </h1>
        <div className="bg-white p-6 print:p-2 print:mb-2 print:w-[95%] print:mx-auto  no-break">

          <div className="border border-gray-300 p-3">
            <h2 className="text-xl font-semibold mb-4 print:text-[12px] print:mb-1 print:py-0">
              Overview Summary
            </h2>
            <hr className="border-t border-gray-300 mb-6 print:mb-2" />

            <div className="grid grid-cols-1 md:grid-cols-2 print:grid-cols-2 gap-6 print:gap-3 print:w-[92%] print:mx-auto">
              {[
                { label: "Over Stock Items", value: "220" },
                { label: "Under Stock Items", value: "326" },
                { label: "Total Value Of Inventory", value: "₹ 3,27,35,227" },
                { label: "Capital Blocked In Overstocking", value: "₹ 3,12,54,499" },
                { label: "Total Value Of Spares", value: "₹ 2,04,004" },
                { label: "Total Value Of Consumables", value: "₹ 3,25,31,223" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f2eee9] p-6 text-center shadow-sm print:bg-[#f2eee9] print:p-3 print:shadow-none print:text-[10px] print:leading-relaxed"
                >
                  <div className="text-xl font-extrabold mb-1 print:text-[12px] print:mb-2">{item.value}</div>
                  <div className="text-gray-700 text-sm print:text-[10px]">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* OverstockGridExact Component */}
          <div className="p-6 print:p-0">
            <style>{`
                /* Screen view styles only, scoped to overstock-table class */
                .overstock-table {
                  border-collapse: separate !important;
                        border-spacing: 1px !important; /* Increased gap to 8px */
                }
                .legend-circle-capital {
                    background-color: #8B7D47; /* Darker shade for Capital Book */
                    width: 12px;
                    height: 5px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 4px;
                }
                .legend-circle-stock {
                    background-color: #D3D3D3; /* Lighter shade for Current Stock */
                    width: 12px;
                    height: 5px;
                    border-radius: 50%;
                    display: inline-block;
                    margin-right: 4px;
                }
            `}</style>
            <div className="mb-4 print:mb-1">
              <h1 className="text-xl font-semibold mb-4 print:text-[12px] print:mb-1 print:py-0">
                Inventory Overstock Report – Top 10 Items
              </h1>
              <hr className="my-2 border-gray-300 print:border-gray-300" />
              <div className="flex justify-end items-center space-x-4 print:space-x-4">
                <div className="flex items-center">
                  <span className="legend-circle-capital print:bg-[#8B7D47]"></span>
                  <span className="text-sm print:text-xs">Capital Book</span>
                </div>
                <div className="flex items-center">
                  <span className="legend-circle-stock print:bg-[#8B7D47]"></span>
                  <span className="text-sm print:text-xs">Current Stock</span>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto print:overflow-x-visible">
              <table className="overstock-table print:border-separate">
                <tbody>
                  {itemss.map((item, rowIdx) => (
                    <tr key={rowIdx}>
                      <td
                        className="p-2 text-xs font-semibold bg-white w-[150px] mx-0 my-0 
                                    print:text-[10px] print:font-semibold print:bg-white print:w-[150px] print:text-left print:mx-2 print:my-1"
                      >
                        {item.name}
                      </td>
                      {item.capital.map((cap, colIdx) => (
                        <Block
                          key={colIdx}
                          capital={cap}
                          stock={item.stock[colIdx]}
                        />
                      ))}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th
                      className="w-[150px] bg-white mx-0 my-0 
                                print:w-[150px] print:bg-white print:mx-1 print:my-1"
                    ></th>
                    {sitesk.map((site, idx) => (
                      <th
                        key={idx}
                        className="p-2 text-[10px] font-medium text-center bg-white w-20 mx-0 my-0 
                                    print:text-[8px] print:font-medium print:text-center print:bg-white print:w-20 print:mx-1 print:my-1"
                      >
                        {site}
                      </th>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>


        </div>
      </div>

      {/*Consumables Overview */}
      <div className="print-page break-before-page">
        <h1 className="report-title text-2xl font-bold mb-6 text-center bg-[#F6F4EE] py-3 print:text-xl print:mb-1 print:py-2">
          Consumables Overview
        </h1>
        <div className="bg-white p-6 no-break print:p-4 print:w-[99%] print:mx-auto">


          {/* Top Consumables – Centre-wise Overview */}
          <div className="border border-gray-300 rounded comment p-4 mt-8 print:border-gray-300 print:rounded print:p-4 print:mt-0">
            <div className="p-4 font-semibold border-b border-gray-300 print:p-3 print:text-[14px] print:border-gray-300">
              Top Consumables – Centre-wise Overview
            </div>
            <div className="overflow-auto print:overflow-visible">
              <table className="w-full border text-sm print:table-fixed print:w-full print:text-[13px] print:leading-relaxed">
                <thead>
                  <tr className="bg-[#DAD6C9] text-[#C72030] text-left print:bg-[#DAD6C9] print:text-[#C72030]">
                    <th className="py-1 px-4 print:py-1 print:px-2 print:w-[17%]">Inventory</th>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="py-1 px-2 text-left print:py-1 print:px-2 print:w-[9%]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tablesData.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-gray-50 print:bg-gray-50" : ""}>
                      <td className="py-1 px-4 bg-[#F6F4EE] font-medium print:py-1 print:px-2 print:bg-[#F6F4EE]">
                        {row.inventory}
                      </td>
                      {row.values.map((value, j) => (
                        <td key={j} className="py-1 px-2 text-center print:py-1 print:px-2">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="text-sm mt-4 px-4 py-2 italic text-gray-700 print:text-[11px] print:mt-0 print:px-3 print:py-2 print:text-black">
              <strong>Note :</strong> This table highlights the top 10 consumable rate used across each
              centre, helping to monitor usage patterns and manage inventory more effectively.
              <br />
              <strong>Formula:</strong> Total consumable x( Average Sqft (1000) / Site Sqft )
            </div>
          </div>

          {/* Consumable Inventory Value – Quarterly Comparison */}
          {/* Consumable Inventory Value – Quarterly Comparison */}
          <div className="p-8 bg-white border border-gray-300 rounded shadow print-page-break print:p-3 print:border-gray-300 print:rounded print:shadow-none print:mt-2">
            <h2 className="text-xl font-bold mb-4 text-gray-900 border-b pb-2 print:text-[14px] print:mb-1 print:pb-1 print:border-gray-300">
              Consumable Inventory Value – Quarterly Comparison
            </h2>
            <div className="h-[500px] print:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={inventoryData}
                  margin={{ top: 20, right: 20, left: 20, bottom: 80 }}
                  barCategoryGap={20}
                >
                  <CartesianGrid stroke="#ddd" strokeDasharray="3 3" />
                  <XAxis
                    dataKey="site"
                    angle={-45}
                    textAnchor="end"
                    interval={0}
                    height={100}
                    tick={{ fontSize: 14 }}
                  />
                  <YAxis
                    domain={[0, 16000]}
                    ticks={[0, 2000, 4000, 6000, 8000, 10000, 12000, 14000, 16000]}
                    tickFormatter={(v) => `${v / 1000}k`}
                  >
                    <Label
                      value="Total Value of Consumption"
                      angle={-90}
                      position="insideLeft"
                      className="text-sm"
                    />
                  </YAxis>
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(0, 0, 0, 0.05)" }} />
                  <Legend
                    iconType="circle"
                    wrapperStyle={{ fontSize: "14px" }}
                    verticalAlign="top"
                    align="right"
                  />
                  <Bar
                    dataKey="lastQuarter"
                    fill="#D6BBAF" // Light Beige
                    name="Last Quarter"
                    barSize={40}
                    label={{ position: "top", formatter: (val) => `${val / 1000}k`, fill: "#444" }}
                  />
                  <Bar
                    dataKey="currentQuarter"
                    fill="#D3D6D4" // Light Grey like your screenshot
                    name="Current Quarter"
                    barSize={40}
                    label={{ position: "top", formatter: (val) => `${val / 1000}k`, fill: "#444" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-gray-700 mt-6 border-t pt-4 print:text-[11px] print:mt-1 print:pt-1 print:border-gray-300">
              <strong>Note:</strong> This graph illustrates total consumable inventory usage with a comparison to the previous quarter, highlighting trends in consumption.
            </p>
          </div>

        </div>
      </div>

      {/* Parking and vistor Management */}
      <div className="print-page break-before-page">
        {/* Parking Management */}
        <div className="no-break print:w-[95%] print:mx-auto">
          <h1 className="report-title text-2xl font-bold mb-6 text-center bg-[#F6F4EE] py-3 print:text-xl print:mb-1 print:py-2">
            Parking Management
          </h1>
          <div className="bg-white max-w-8xl mx-auto shadow-md border p-6 rounded print:p-4 print:shadow-none print:border-gray-300">
            <h2 className="text-left font-semibold text-xl mb-2 print:text-[16px] print:mb-2">
              Parking Allocation Overview – Paid, Free & Vacant
            </h2>

            <div className="h-[500px] print:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={Perdata} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="site"
                    interval={0}
                    height={100}
                    tick={({ x, y, payload }) => {
                      const lines = payload.value.split(', ');
                      return (
                        <g transform={`translate(${x},${y + 10})`}>
                          {lines.map((line, index) => (
                            <text
                              key={index}
                              x={0}
                              y={index * 14}
                              textAnchor="middle"
                              fontSize="14"
                              fill="#000"
                            >
                              {line}
                            </text>
                          ))}
                        </g>
                      );
                    }}
                    label={{
                      value: "Sites",
                      position: "bottom",
                      offset: 50,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  />
                  <YAxis
                    domain={[0, 160]}
                    tickCount={9}
                    label={{
                      value: "Counts of Parking Slots",
                      angle: -90,
                      position: "insideLeft",
                    }}
                  />

                  <Tooltip />
                  <Legend verticalAlign="top" align="right" wrapperStyle={{ top: 0 }} />

                  <Bar dataKey="Free" fill="#dad8cf">
                    <LabelList dataKey="Free" position="top" />
                  </Bar>
                  <Bar dataKey="Paid" fill="#c5ae94">
                    <LabelList dataKey="Paid" position="top" />
                  </Bar>
                  <Bar dataKey="Vacant" fill="#a0b5c1">
                    <LabelList dataKey="Vacant" position="top" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="text-left text-sm print:text-[11px] print:mt-2">
              <span className="font-bold">Note :</span> This graph presents the current status of parking
              allocation, showing the distribution between paid, free, and vacant slots.
            </div>
          </div>
        </div>
        {/* Visitor Management */}
        <div className="print-page-break no-break print:w-[95%] print:mx-auto print:mt-3">
          <h1 className="report-title text-2xl font-bold mb-6 text-center bg-[#F6F4EE] py-3 print:text-xl print:mb-1 print:py-2">
            Visitor Management
          </h1>
          <div className="bg-white max-w-8xl mx-auto shadow-md border p-6 rounded print:p-4 print:shadow-none print:border-gray-300">
            <h2 className="text-left font-semibold text-xl mb-2 print:text-[16px] print:mb-2">
              Visitor Trend Analysis
            </h2>

            <div className="h-[500px] print:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={visitorData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 100 }}
                  barCategoryGap="30%" // space between categories (bar groups)
                  barGap={5} // space between bars inside a group
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="site"
                    interval={0}
                    height={90}
                    tick={({ x, y, payload }) => {
                      const lines = payload.value.split(', ');
                      return (
                        <g transform={`translate(${x},${y + 10})`}>
                          {lines.map((line, index) => (
                            <text
                              key={index}
                              x={0}
                              y={index * 14}
                              textAnchor="middle"
                              fontSize="14"
                              fill="#000"
                            >
                              {line}
                            </text>
                          ))}
                        </g>
                      );
                    }}
                    label={{
                      value: 'Sites',
                      position: 'bottom',
                      offset: 50,
                      fontSize: 16,
                      fontWeight: 'bold'
                    }}
                  />
                  <YAxis
                    domain={[0, 160]}
                    ticks={[0, 20, 40, 60, 80, 100, 120, 140, 160]}
                    tick={{ fontSize: 14 }}
                    label={{
                      value: 'Counts',
                      angle: -90,
                      position: 'insideLeft',
                      fontSize: 14,
                      offset: 10
                    }}
                  />
                  <Tooltip />
                  <Legend verticalAlign="top" align="right" />
                  <Bar dataKey="lastQuarter" name="Last Quarter" fill="#c5ae94">
                    <LabelList dataKey="lastQuarter" position="top" />
                  </Bar>
                  <Bar dataKey="currentQuarter" name="Current Quarter" fill="#dad8cf">
                    <LabelList dataKey="currentQuarter" position="top" />
                  </Bar>
                </BarChart>

              </ResponsiveContainer>
            </div>

            <div className="mt-6 text-left text-sm print:text-[11px] print:mt-2">
              <span className="font-bold">Note :</span> This graph shows the total visitor count compared to the previous quarter, providing a clear view of trends and changes in footfall over time for performance comparison.
            </div>
          </div>
        </div>
      </div></>
  );
};

export default AllContent;
