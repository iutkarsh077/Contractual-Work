import { motion } from "framer-motion";
import { Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import {
  BanknoteIcon,
  BellIcon,
  SearchIcon,
  TagIcon,
  ThumbsUpIcon,
  UsersIcon,
} from "lucide-react";
import ResponsiveSidebar from "./ResponsiveSidebar";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const lineChartData = {
  labels: ["0", "1 Week", "2 Week", "3 Week", "4 Week"], 
  datasets: [
    {
      label: "Guest",
      data: [200, 400, 200, 300, 210, 440],
      borderColor: "rgba(255, 99, 132, 1)", 
      backgroundColor: "rgba(255, 99, 132, 1)", 
      fill: true,
      tension: 0.4,
    },
    {
      label: "User",
      data: [100, 410, 250, 430, 230, 180, 270],
      borderColor: "rgb(60, 179, 113)", 
      backgroundColor: "rgb(60, 179, 113)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: false, 
      min: 100, 
      max: 500, 
      ticks: {
        stepSize: 100, 
      },
    },
    x: {
      ticks: {
        autoSkip: true, 
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
  },
};

const pieChartData = {
  labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"], 
  datasets: [
    {
      data: [14, 31, 55],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(255, 206, 86, 0.6)",
        "rgb(144, 238, 144)",
      ],

      borderWidth: 0,
    },
  ],
};


const pieChartOptions = {
  plugins: {
    legend: {
      display: false, 
    },
    tooltip: {
      callbacks: {
        label: function () {
          return ""; 
        },
      },
    },
  },
};

const StatCard = ({ icon, title, value, bgColor }: any) => (
  <motion.div
    className={`p-4 rounded-lg ${bgColor}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="pt-4 md:relative md:block flex flex-row-reverse items-center justify-between pl-4 pr-4 md:pl-0 md:pr-0">
      <div className="right-0 md:absolute -top-1">{icon}</div>
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  </motion.div>
);

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      <ResponsiveSidebar />
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold hidden md:block">Dashboard</h2>
          <div className="flex  items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <SearchIcon
                className="absolute left-3 top-2.5 text-gray-400"
                size={20}
              />
            </div>
            <BellIcon
              className="text-gray-600 cursor-pointer hidden md:block"
              size={24}
            />

            <img
              src="/men.jpg"
              alt="User"
              className="w-8 h-8 rounded-full hover:cursor-pointer hidden md:block"
            />
          </div>
          <img
            src="/men.jpg"
            alt="User"
            className="w-8 h-8 md:hidden block rounded-full relative -top-4 hover:cursor-pointer"
          />
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 hover:cursor-pointer gap-6 mb-8">
          <StatCard
            icon={<BanknoteIcon size={24} />}
            title="Total Revenues"
            value="$2,129,430"
            bgColor="bg-green-100"
          />
          <StatCard
            icon={<TagIcon size={24} />}
            title="Total Transactions"
            value="1,520"
            bgColor="bg-yellow-100"
          />
          <StatCard
            icon={<ThumbsUpIcon size={24} />}
            title="Total Likes"
            value="9,721"
            bgColor="bg-red-100"
          />
          <StatCard
            icon={<UsersIcon size={24} />}
            title="Total Users"
            value="892"
            bgColor="bg-blue-100"
          />
        </div>

        <motion.div
          className="bg-white p-6 rounded-3xl shadow mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:flex justify-between items-center mb-4">
            <div className="flex md:flex-col justify-between md:justify-start items-start gap-y-1">
              <h3 className="text-lg font-semibold ml-3">Activities</h3>
              <select className="hover:cursor-pointer text-gray-500 outline-none rounded-md px-2 py-1">
                <option>May - June 2021</option>
              </select>
            </div>
            <div className="flex justify-end  gap-y-4 gap-x-3 mr-3 md:mr-0 md:gap-x-6">
              <p className="flex gap-x-3 items-center">
                <span className="ml-2 p-1 bg-red-500 rounded-full inline-block w-3 h-3"></span>
                Guest
              </p>

              <p className="flex gap-x-3 items-center">
                <span className="ml-2 p-1 bg-green-500 rounded-full inline-block w-3 h-3"></span>
                User
              </p>
            </div>
          </div>
          <Line data={lineChartData} options={lineChartOptions} />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white p-6 rounded-3xl shadow"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-bold">Top products</h3>
              <select className="rounded-md px-2 py-1 outline-none hover:cursor-pointer text-gray-500">
                <option>May - June 2021</option>
              </select>
            </div>
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full  h-32 md:h-auto flex justify-center md:w-1/2 md:p-8">
                <Pie data={pieChartData} options={pieChartOptions} />
              </div>
              <div>
                <div className="flex flex-col  ml-10 md:ml-0 mt-8 md:mt-0  gap-y-6 gap-x-6">
                  <div className="flex flex-col">
                    <p className="flex gap-x-3 items-center">
                      <span className="ml-2 p-1 bg-[#90EE90] rounded-full inline-block w-3 h-3"></span>
                      <span className="font-bold text-base md:text-lg">
                        Basic Trees
                      </span>
                    </p>
                    <span className="ml-8 text-gray-400 font-normal">55%</span>
                  </div>

                  <div className="flex flex-col">
                    <p className="flex gap-x-3 items-center">
                      <span className="ml-2 p-1 bg-[#FFCE56] rounded-full inline-block w-3 h-3"></span>
                      <span className="font-bold text-base md:text-lg">
                        Custom Short Plants
                      </span>
                    </p>
                    <span className="ml-8 text-gray-400 font-normal">31%</span>
                  </div>

                  <div className="flex flex-col">
                    <p className="flex gap-x-3 items-center">
                      <span className="ml-2 p-1 bg-red-500 rounded-full inline-block w-3 h-3"></span>
                      <span className="font-bold text-base md:text-lg">
                        Super Hoodies
                      </span>
                    </p>
                    <span className="ml-8 text-gray-400 font-normal">14%</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white shadow-lg rounded-3xl p-10 w-full  mx-auto mb-20 md:mb-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold">Today's schedule</h2>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-700  inline-block"
              >
                See All &rarr;
              </a>
            </div>
            <div className="mb-4">
              <div className="flex items-center">
                <div className="h-14 w-1 bg-green-500 mr-2"></div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Meeting with suppliers from Kuta Bali
                  </h3>
                  <p className="text-gray-400">14.00 - 15.00</p>
                  <p className="text-gray-400">at Sunset Road, Kuta, Bali</p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="h-14 w-1 bg-blue-500 mr-2"></div>
                <div>
                  <h3 className="text-lg font-semibold">
                    Check operation at Giga Factory 1
                  </h3>
                  <p className="text-gray-400">18.00 - 20.00</p>
                  <p className="text-gray-400">at Central Jakarta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
