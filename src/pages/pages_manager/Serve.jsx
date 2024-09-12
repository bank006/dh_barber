import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

import React, { useState } from "react";
import Sidebar from "../../partials_manager/Sidebar";
import Header from "../../partials_manager/Header";

import { RadioButton } from "primereact/radiobutton";
import { Image } from "primereact/image";
import { useDispatch, useSelector } from "react-redux";
import api from "../../utils/api";
import { useQuery, useQueryClient } from "react-query";
import { fetchServe } from "../../hooks/GetServe";
import { setDataServe, setError } from "../../reduxs/reducers/userReduce";
import { toast } from "react-toastify";

import { FaBook } from "react-icons/fa6";
import { BsCurrencyBitcoin } from "react-icons/bs";



const Serve = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [nameServe, setNameServe] = useState();
  const [price, setPrice] = useState();
  const { user } = useSelector((state) => state.user);
  const serve = useSelector((state) => state?.user?.serve);

  const fetchServe = async (id) => {
    const { data } = await api.get(`/all-serve/${id}`);
    return data || null;
  };


  const { isLoading } = useQuery("serveData", () => fetchServe(user?._id), {
    onSuccess: (data) => {
      dispatch(setDataServe(data?.data));
    },
    onError: (error) => {
      dispatch(setError(error?.message));
    },
    staleTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });

  console.log(user);

  const handServe = async (e) => {
    e.preventDefault();
    console.log("handRegister");

    if (!nameServe || !price) {
      toast.error("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const data = {
      nameServe: nameServe,
      price: price,

    };

    try {
      await api.post(`/create-serve/${user?._id}`, data).then(async (res) => {
        toast.success("เพิ่มสำเร็จ");
        queryClient.invalidateQueries("serveData");
      });
    } catch (e) {
      console.log(e);

      toast.error("เพิ่มบริการไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");

    }
  };

  const deleteServe = async (id) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบบริการนี้");

    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      try {
        await api.delete(`/delete-serve/${id}`);
        queryClient.invalidateQueries("serveData");
        toast.success("ลบสำเร็จ");
      } catch (error) {
        toast.error("ลบไม่สำเร็จ");
        console.log(error);
      }
    }
  };




  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
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
                    <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                      บริการ
                    </h1>
                  </div>


                </div>
                <div className="mx-auto max-w-270">
                  <Breadcrumb pageName="Serve" />

                  <div className="grid grid-cols-5 gap-3.5">
                    <div className="col-span-5 xl:col-span-5">
                      <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                        <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                          <h3 className="font-medium text-xl text-black dark:text-white">
                            รายละเอียดบริการ
                          </h3>
                        </div>
                        <div className="p-7">
                          <form onSubmit={handServe}>
                            <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-lg font-medium text-black dark:text-white"
                                  htmlFor="fullName"
                                >
                                  บริการ
                                </label>
                                <div className="relative">
                                  <span className="absolute left-4 top-4">



                                    <FaBook className="w-5 h-5" />

                                  </span>
                                  <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="text"
                                    name="fullName"
                                    id="fullName"
                                    placeholder="บริการ"
                                    defaultValue=""
                                    onChange={(e) =>
                                      setNameServe(e.target.value)
                                    }
                                  />
                                </div>
                              </div>


                            </div>
                            <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                              <div className="w-full sm:w-1/2">
                                <label
                                  className="mb-3 block text-lg font-medium text-black dark:text-white"
                                  htmlFor="fullName"
                                >
                                  ราคา
                                </label>
                                <div className="relative">
                                  <span className="absolute left-4 top-4">


                                    <BsCurrencyBitcoin className="w-5 h-5" />

                                  </span>
                                  <input
                                    className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                    type="text"
                                    name="fullName"
                                    id="fullName"

                                    placeholder="กรอกราคา"


                                    defaultValue=""
                                    onChange={(e) => setPrice(e.target.value)}
                                  />
                                </div>
                              </div>

                            </div>


                            <div className="flex justify-end gap-4 mt-2">
                              <button
                                className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                                type="submit"
                              >
                                Cancel
                              </button>
                              <button
                                className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-80"
                                type="submit"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <main className="grow">
                  <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
                    {/* Dashboard actions */}
                    <div className="sm:flex sm:justify-between sm:items-center mb-8">
                      {/* Left: Title */}
                      <div className="mb-4 sm:mb-0">
                        <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                          รายการบริการ
                        </h1>
                      </div>
                      {/* Right: Actions */}
                    </div>

                    <section className="overflow-hidden bg-white rounded-md shadow dark:bg-gray-800 mt-10">

                      <div className="p-6 overflow-x-auto">
                        <div className="overflow-x-auto rounded-lg">
                          <table className="w-full whitespace-no-wrap">
                            <thead>
                              <tr className="text-sm font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                                <th className="px-24 py-3">บริการ</th>
                                <th className="px-24 py-3">ราคา</th>
                              </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                              {serve?.map((item) => (
                                <tr
                                  className="text-gray-700 dark:text-gray-400"
                                  key={item.id}
                                >

                                  <td className="px-24 py-3 text-sm">
                                    {item.nameServe}
                                  </td>
                                  <td className="px-24 py-3 text-sm truncate max-w-xs">
                                    {item.price}
                                  </td>
                                  <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    <div className="flex items-center gap-x-6">
                                      <button onClick={() => deleteServe(item?._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-5 h-5"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                          />
                                        </svg>
                                      </button>
                                      <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke="currentColor"
                                          className="w-5 h-5"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.686a4.5 4.5 0 011.13-1.898l8.932-8.929z"
                                          />
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M19.5 19.5h-6"
                                          />
                                        </svg>
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
                </main>

              </div>
            </main>
          </div>
        </div>
      )}
    </>
  );
};

export default Serve;
