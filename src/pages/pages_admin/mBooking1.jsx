import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import { FaRegEye } from "react-icons/fa";

const Booking1 = () => {
  const users = [
    {
      id: 1,
      name: "Junior Reis",
      email: "junior@example.com",
      date: "26/08/2024",
      price: "200",
      receipt: "",
      status: "ชำระเงินแล้ว",
      image:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      name: "Olivia Wathan",
      email: "junior@example.com",
      date: "26/08/2024",
      price: "200",
      receipt: "",
      status: "ยกเลิก",
      image:
        "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      name: "Mia",
      email: "junior@example.com",
      date: "26/08/2024",
      price: "200",
      receipt: "",
      status: "ชำระเงินแล้ว",
      image:
        "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
  ];

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/* Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="flex">
            <div className="flex-grow">
              <main className="py-6 bg-gray-100 dark:bg-gray-900">
                <div className="container px-6 mx-auto">
                  <div className="grid grid-cols-1 gap-6">
                    <Breadcrumb pageName="Booking" />
                    <section className="overflow-hidden bg-white rounded-md shadow dark:bg-gray-800">
                      <div className="flex flex-col items-center justify-between p-6 lg:flex-row">
                        <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                          ประวัติการจอง
                        </h2>
                      </div>
                      <div className="p-6 overflow-x-auto">
                        <div className="overflow-x-auto rounded-lg">
                          <table className="table-auto w-full whitespace-nowrap">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                              <tr className="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                                <th className="px-4 py-4">ชื่อ</th>
                                <th className="px-12 py-4">อีเมล</th>
                                <th className="px-4 py-4">วันที่</th>
                                <th className="px-4 py-4">จำนวนเงิน</th>
                                <th className="px-4 py-4">สถานะ</th>
                                <th className="px-4 py-4">ใบสลิป</th>                                
                                <th className="px-4 py-4"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.map((user) => (
                                <tr key={user.id}>
                                  <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                      <input
                                        type="checkbox"
                                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                      />
                                      <div className="flex items-center gap-x-2">
                                        <img
                                          className="object-cover w-10 h-10 rounded-full"
                                          src={user.image}
                                          alt={`${user.name}'s profile`}
                                        />
                                        <div>
                                          <h2 className="font-medium text-gray-800 dark:text-white">
                                            {user.name}
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {user.email}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    {user.date}
                                  </td>
                                  <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    {user.price}
                                  </td>
                                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <span
                                      className={`font-medium ${
                                        user.status === "ชำระเงินแล้ว"
                                          ? "text-green-600 dark:text-green-600"
                                          : user.status === "ยกเลิก"
                                          ? "text-red-800 dark:text-red-800"
                                          : "text-gray-500 dark:text-gray-300"
                                      }`}
                                    >
                                      {user.status}
                                    </span>
                                  </td>
                                  <td className="flex items-center px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                    <button
                                      className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-80"
                                      type="submit"
                                      onClick={() =>
                                        handleImageClick(user.image)
                                      }
                                    >
                                      view
                                    </button>
                                    {user.receipt}
                                  </td>
                                  
                                  
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75"
          onClick={handleClosePopup}
        >
          <img
            src={selectedImage}
            alt="Receipt"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing the popup
          />
        </div>
      )}
    </>
  );
};

export default Booking1;
