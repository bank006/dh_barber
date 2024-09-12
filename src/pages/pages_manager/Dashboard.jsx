import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Sidebar from '../../partials_manager/Sidebar';
import Header from '../../partials_manager/Header';
import FilterButton from '../../components/DropdownFilter';
import Datepicker from '../../components/Datepicker';
import DashboardCard01 from '../../partials_manager/dashboard_barber/DashboardCard01';
import DashboardCard02 from '../../partials_manager/dashboard_barber/DashboardCard02';
import DashboardCard03 from '../../partials_manager/dashboard_barber/DashboardCard03';
import DashboardCard04 from '../../partials_manager/dashboard_barber/DashboardCard04';
import DashboardCard05 from '../../partials_manager/dashboard_barber/DashboardCard05';
import DashboardCard06 from '../../partials_manager/dashboard_barber/DashboardCard06';
import DashboardCard07 from '../../partials_manager/dashboard_barber/DashboardCard07';


function Dashboard() {
  const location = useLocation();
  const { user } = location.state

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const today = new Date()

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // เดือนเริ่มนับจาก 0 ดังนั้นต้องบวก 1
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`; // รูปแบบ YYYY-MM-DD
  };

  const formattedToday = formatDate(today);

  const [selectedDate, setSelectedDate] = useState(formattedToday);

  const handleDateChange = (dateStr) => {
    setSelectedDate(dateStr);
  }


  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">

              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">Dashboard</h1>
              </div>

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton align="right" />
                {/* Datepicker built with flatpickr */}
                <Datepicker align="right" onDateChange={handleDateChange} />
                {/* Add view button */}
                <button className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Add View</span>
                </button>
              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Line chart (Acme Plus) */}
              {/* <DashboardCard01 /> */}
              {/* Line chart (Acme Advanced) */}
              {/* <DashboardCard02 /> */}
              {/* Line chart (Acme Professional) */}
              <DashboardCard03 user={user} selectedDate={selectedDate} />
              {/* Bar chart (Direct vs Indirect) */}
              {/* <DashboardCard04 /> */}
              {/* Line chart (Real Time Value) */}
              {/* <DashboardCard05 /> */}
              {/* Doughnut chart (Top Countries) */}
              {/* <DashboardCard06 /> */}
              {/* Table (Top Channels) */}
              {/* <DashboardCard07 /> */}
              {/* Line chart (Sales Over Time) */}


            </div>

          </div>
        </main>



      </div>
    </div>
  );
}

export default Dashboard;