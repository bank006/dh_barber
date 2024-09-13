import React, { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../../partials_manager/Sidebar";
import Header from "../../partials_manager/Header";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import Member_Model from "./Member_Model";

const Member = ({ user }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const [users , setusers] = useState([])


  useEffect(() => {
    const userId = user._id
    axios.get(`http://localhost:3000/api//all-serve/${userId}`)
      .then(response => {
        const data = response.data.data
        const idBarber = data.map(item => item._id)
        getmybarber(idBarber[0])
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  const getmybarber = (idBarber) => {
    console.log(idBarber)
    axios.get(`http://localhost:3000/api/joinbookingwithuser/${idBarber}`)
      .then(response => {
        setusers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  console.log(users)
  // const users = [
  //   {
  //     id: 1,
  //     name: "Junior Reis",
  //     haircut: "ช่าง1",
  //     serve: "ตัดผม+โกรหนวด",
  //     date: "25/09/2024",
  //     time: "10:00",
  //     price: "150",
  //     image:
  //       "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  //   {
  //     id: 2,
  //     name: "Junior Reis",
  //     haircut: "ช่าง1",
  //     serve: "ตัดผม+โกรหนวด",
  //     date: "25/09/2024",
  //     time: "10:00",
  //     price: "150",
  //     image:
  //       "https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "Junior Reis",
  //     haircut: "ช่าง1",
  //     serve: "ตัดผม+โกรหนวด",
  //     date: "25/09/2024",
  //     time: "10:00",
  //     price: "150",
  //     image:
  //       "https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  //   },
  // ];

  const handleViewClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
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
                    <Breadcrumb pageName="Member" />
                    <section className="overflow-hidden bg-white rounded-md shadow dark:bg-gray-800">
                      <div className="flex flex-col items-center justify-between p-6 lg:flex-row">
                        <h2 className="text-xl font-medium text-gray-800 dark:text-white">
                          ข้อมูลการจอง
                        </h2>
                      </div>
                      <div className="p-6 overflow-x-auto">
                        <div className="overflow-x-auto rounded-lg">
                          <table className="table-auto w-full whitespace-nowrap">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                              <tr className="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                                <th className="px-12 py-4">ชื่อ</th>
                                <th className="px-12 py-4">ช่าง</th>
                                <th className="px-12 py-4">บริการ</th>
                                <th className="px-12 py-4">วันที่</th>
                                <th className="px-12 py-4">เวลา</th>
                                <th className="px-12 py-4">ราคา</th>
                                <th className="px-12 py-4">ดูรายละเอียด</th>
                              </tr>
                            </thead>
                            <tbody>
                              {users.map((useritem) => (
                                <tr key={useritem._id}>
                                  <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                      <input
                                        type="checkbox"
                                        className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                                      />
                                      <div className="flex items-center gap-x-2">
                                        {/* <img
                                          className="object-cover w-10 h-10 rounded-full"
                                          src={user.image}
                                          alt={`${user.name}'s profile`}
                                        /> */}
                                        <div>
                                          <h2 className="font-medium text-gray-800 dark:text-white ">
                                            {useritem.userDetails[0].username}
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {useritem.namembarber}
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {useritem.service}
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {useritem.time}
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {useritem.time}
                                  </td>
                                  <td className="px-12 py-4 text-sm font-medium text-gray-500 dark:text-white whitespace-nowrap">
                                    {useritem.price}
                                  </td>
                                  <td className="px-12 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                      <button
                                        className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-80"
                                        type="submit"
                                        onClick={() => handleViewClick(user)}
                                      >
                                        view
                                      </button>
                                    </div>
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

      {/* Modal Component */}
      <Member_Model
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </>
  );
};

export default Member;
