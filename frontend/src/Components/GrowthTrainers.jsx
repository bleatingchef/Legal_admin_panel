import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

const GrowthTrainers = () => {
  const opportunityOutcomeData = {
    labels: ['Real Estate', 'M&A', 'Corporate', 'Employment', 'Environmental', 'Litigation', 'IP'],
    datasets: [
      {
        label: 'Won',
        data: [50, 60, 40, 70, 50, 40, 60],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Lost',
        data: [20, 10, 30, 20, 30, 20, 10],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Declined',
        data: [30, 30, 30, 10, 20, 40, 30],
        backgroundColor: 'rgba(255, 205, 86, 0.2)',
        borderColor: 'rgba(255, 205, 86, 1)',
        borderWidth: 1,
      },
    ],
  };

  const earningThisMonthData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Earnings',
        data: [3000, 5000, 4000, 7000, 8000, 6000, 7000],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };

  const revenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    datasets: [
      {
        label: 'Revenue',
        data: [0, 40000, 80000, 60000, 120000, 80000, 100000, 90000, 130000, 110000],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
      },
    ],
  };

  const outcomesByOpportunitySourceData = {
    labels: ['Campaign', 'Event', 'Referral', 'Seminar', 'Sponsorship', 'Tickets'],
    datasets: [
      {
        label: 'Success',
        data: [6, 4, 10, 8, 9, 4],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Failure',
        data: [3, 6, 2, 4, 3, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-4 bg-gray-900 min-h-screen text-white">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
        <div className="lg:col-span-1 bg-slate-950 shadow shadow-xl shadow-yellow-500  ml-80 max-w-3xl my-10 p-4 rounded-xl">
          <h2 className="text-xl mt-5 font-semibold mb-4">Opportunity Outcome</h2>
          <div>
            <Bar data={opportunityOutcomeData} options={{ plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>
        <div className=" p-4 mx-20 mt-10 shadow-xl bg-slate-950 shadow-yellow-500 rounded-md">
          <h2 className="text-xl font-semibold mb-4">Earning this month</h2>
          <div>
            <Line data={earningThisMonthData} options={{ plugins: { legend: { display: false } } }} />
          </div>
          <div className="mt-4 bg-blue-600 p-2 rounded-md text-center">
            <span className="block text-xl">Declined</span>
            <span className="block text-2xl">51</span>
            <span className="block text-yellow-400">17.0%</span>
          </div>
        </div>
        <div className="lg:col-span-1 shadow-xl shadow-yellow-500 bg-slate-950 pt-20 ml-80 my-10 bg-gray-800 p-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Revenue</h2>
          <div>
            <Line data={revenueData} options={{ plugins: { legend: { display: false } } }} />
          </div>
        </div>
        <div className="bg-gray-800 ml-16 shadow-xl shadow-yellow-500 bg-slate-950 mr-10 p-4 my-10 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Outcomes by Opportunity Source</h2>
          <div>
            <Bar data={outcomesByOpportunitySourceData} options={{ plugins: { legend: { position: 'top' } } }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTrainers;
