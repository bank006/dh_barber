import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { chartAreaGradient } from '../../charts/ChartjsConfig';
import EditMenu from '../../components/DropdownEditMenu';
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

// Register required Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function DashboardCard03({ user, selectedDate }) {

  const [idBarber, setidBarber] = useState([])
  const [dataincome, setdataincome] = useState([])
  const [year, month, day] = selectedDate.split('-');


  useEffect(() => {
    const userId = user._id
    axios.get(`http://localhost:3000/api//all-serve/${userId}`)
      .then(response => {
        console.log(response.data.data)
        const data = response.data.data
        const idBarber = data.map(item => item._id)
        setidBarber(idBarber[0])
        getmybarber(idBarber[0])
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  const getmybarber = (idBarber) => {
    console.log(idBarber)
    axios.get(`http://localhost:3000/api/getbookingbtidbarber/${idBarber}`)
      .then(response => {
        setdataincome(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function calculateMonthlyIncome(data, month, year) {
    const filteredData = data.filter(item => {
      const [itemYear, itemMonth] = item.date.split('-'); // แยกข้อมูลปีและเดือนจาก date
      return (
        itemMonth === month&&    // เปรียบเทียบเดือน (แปลงเป็นเลข)
        itemYear === year        // เปรียบเทียบปี
      );
    });

    return filteredData
      .reduce((total, item) => total + item.price, 0); // รวมยอดเงินจากบริการทั้งหมด
  }

  const monthlyIncome = calculateMonthlyIncome(dataincome, month, year);


  const chartData = {
    labels: [
      selectedDate,
    ],
    datasets: [
      // Indigo bar
      {
        label: monthlyIncome,
        data: [
          540
        ],
        backgroundColor: function (context) {
          const { ctx, chartArea } = context.chart;
          return chartAreaGradient(ctx, chartArea, [
            { stop: 0, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.5)` },
            { stop: 1, color: `rgba(${hexToRGB(tailwindConfig().theme.colors.violet[500])}, 0.5)` }
          ]);
        },
        borderColor: tailwindConfig().theme.colors.violet[500],
        borderWidth: 1,
        barPercentage: 0.8,
      },

    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">Acme Professional</h2>
          {/* Menu button */}
          <EditMenu align="right" className="relative inline-flex">
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Option 1
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-200 flex py-1 px-3" to="#0">
                Option 2
              </Link>
            </li>
            <li>
              <Link className="font-medium text-sm text-red-500 hover:text-red-600 flex py-1 px-3" to="#0">
                Remove
              </Link>
            </li>
          </EditMenu>
        </header>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-1">Sales</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-gray-800 dark:text-gray-100 mr-2">฿{monthlyIncome || '0'} </div>
          <div className="text-sm font-medium text-green-700 px-1.5 bg-green-500/20 rounded-full">+49%</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="flex justify-center">
        {/* Change the height attribute to adjust the chart height */}
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  );
}

export default DashboardCard03;
