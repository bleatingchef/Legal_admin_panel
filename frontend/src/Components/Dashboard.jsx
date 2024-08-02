import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './style.css'; // Make sure to import the styles for the circular chart
import GrowthTrainers from './GrowthTrainers';
import Calender from './Appointments';

// Updated data with settled field
const data = [
  { month: 'Jan', settled: 5 },
  { month: 'Feb', settled: 6 },
  { month: 'Mar', settled: 5 },
  { month: 'Apr', settled: 6 },
  { month: 'May', settled: 7 },
  { month: 'Jun', settled: 5 },
  { month: 'Jul', settled: 6 },
  { month: 'Aug', settled: 5 },
  { month: 'Sep', settled: 6 },
  { month: 'Oct', settled: 7 },
  { month: 'Nov', settled: 5 },
  { month: 'Dec', settled: 6 },
];

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='bg-slate-900'>
      <div className="text-center md:ml-24 pb-2 pt-8">
        <h1 className='inline-block text-yellow-500 hover:text-yellow-300 text-3xl md:text-7xl'>Dashboard</h1>
      </div>

      <div className="p-8 min-h-screen">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:ml-80 pt-20 w-full md:w-2/6 mb-8 md:mb-0 md:mr-8 bg-slate-950 shadow shadow-xl shadow-yellow-500 p-6 rounded-lg">
            <h2 className="text-xl text-white font-semibold mb-4">Total Cases</h2>
            <div className="flex justify-between mb-6">
              <div className="text-center">
                <div className="relative inline-block w-24 h-24">
                  <svg viewBox="0 0 36 36" className="circular-chart blue">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray="70, 100"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-white font-semibold">70%</span>
                  </div>
                </div>
                <p className="mt-2 text-white">Ongoing</p>
              </div>
              <div className="text-center">
                <div className="relative inline-block w-24 h-24">
                  <svg viewBox="0 0 36 36" className="circular-chart green">
                    <path
                      className="circle-bg"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="circle"
                      strokeDasharray="85, 100"
                      d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl text-white font-semibold">85%</span>
                  </div>
                </div>
                <p className="mt-2 text-white">Settled</p>
              </div>
            </div>
            <div>
              <div className="flex text-white justify-between mb-2">
                <span>Ongoing</span>
                <span>70%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
              <div className="flex text-white justify-between mb-2">
                <span>Settled</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-4/6 md:mr-10 bg-slate-950 text-black pt-10 pb-20 pl-5 rounded-lg shadow shadow-xl shadow-yellow-500">
            <h2 className="text-xl text-white font-semibold mb-4">Cases Analogy</h2>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorSettled" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="settled" stroke="#82ca9d" fillOpacity={1} fill="url(#colorSettled)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <GrowthTrainers />
      </div>
      {/* <Calender /> */}
    </div>
  );
};

export default Dashboard;
