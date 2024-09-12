import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import userThree from "../../images/user/user-03.png";

import React, { useState } from "react";

import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";

import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import { setDataServe, setError } from "../../reduxs/reducers/userReduce";
import api from "../../utils/api";

const MBarber_Details = () => {
  // const queryClient = useQueryClient();
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);
  // const stadium = useSelector((state) => state?.user?.stadium);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [nameShop, setNameShop] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [location,setLocation] = useState();
  const [dateOpen,setDateOpen] = useState();
  const [dateClose,setDateClose] = useState();
  const [facebook,setFacebook] = useState();
  const [line,setLine] = useState();
  const [instagram,setInstagram] = useState();
  const [address,setAddress] = useState();
  // const { isLoading } = useQuery("stadiumData", () => fetchStadium(user?._id), {
  //   onSuccess: (data) => {
  //     dispatch(setDataStadium(data?.data));
  //   },
  //   onError: (error) => {
  //     dispatch(setError(error?.message));
  //   },
  //   staleTime: 1000 * 10,
  //   refetchOnWindowFocus: false,
  // });
  // const handStadium = async (e) => {
  //   e.preventDefault();
  //   console.log("handRegister");

  //   const data = {
  //     nameShop: nameShop,
  //     phoneNumber: phoneNumber,
  //     location: location,
  //     dateOpen: dateOpen,
  //     dateClose: dateClose,
  //     facebook: facebook,
  //     line: line,
  //     instagram: instagram,
  //     address: address,
  //   };

  //   try {
  //     await api.post(`/create-stadium/${user?._id}`, data).then(async (res) => {
  //       toast.success("เพิ่มสำเร็จ");
  //       queryClient.invalidateQueries("stadiumData");
  //     });
  //   } catch (e) {
  //     console.log(e);
  //     toast.error("คุณมีประเภทสนามนี้แยู่ปล้ว กรุณาลองใหม่อีกครั้ง");
  //   }
  // };
  
  return (
    <>
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
                    รายละเอียดร้าน
                  </h1>
                </div>
                
                
              </div>
              <div className="mx-auto max-w-270">
                <Breadcrumb pageName="์Barber Details" />

                <div className="grid grid-cols-5 gap-3.5">
                  <div className="col-span-5 xl:col-span-5">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-4 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-xl text-black dark:text-white">
                          ข้อมูลร้านตัดผม
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                            <div className="w-full sm:w-1/2">
                              <label
                                className="mb-3 block text-lg font-medium text-black dark:text-white"
                                htmlFor="fullName"
                              >
                                ชื่อร้าน
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-4">
                                  <svg
                                    className="fill-current"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g opacity="0.8">
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M3.72039 12.887C4.50179 12.1056 5.5616 11.6666 6.66667 11.6666H13.3333C14.4384 11.6666 15.4982 12.1056 16.2796 12.887C17.061 13.6684 17.5 14.7282 17.5 15.8333V17.5C17.5 17.9602 17.1269 18.3333 16.6667 18.3333C16.2064 18.3333 15.8333 17.9602 15.8333 17.5V15.8333C15.8333 15.1703 15.5699 14.5344 15.1011 14.0655C14.6323 13.5967 13.9964 13.3333 13.3333 13.3333H6.66667C6.00363 13.3333 5.36774 13.5967 4.8989 14.0655C4.43006 14.5344 4.16667 15.1703 4.16667 15.8333V17.5C4.16667 17.9602 3.79357 18.3333 3.33333 18.3333C2.8731 18.3333 2.5 17.9602 2.5 17.5V15.8333C2.5 14.7282 2.93899 13.6684 3.72039 12.887Z"
                                        fill=""
                                      />
                                      <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.99967 3.33329C8.61896 3.33329 7.49967 4.45258 7.49967 5.83329C7.49967 7.214 8.61896 8.33329 9.99967 8.33329C11.3804 8.33329 12.4997 7.214 12.4997 5.83329C12.4997 4.45258 11.3804 3.33329 9.99967 3.33329ZM5.83301 5.83329C5.83301 3.53211 7.69849 1.66663 9.99967 1.66663C12.3009 1.66663 14.1663 3.53211 14.1663 5.83329C14.1663 8.13448 12.3009 9.99996 9.99967 9.99996C7.69849 9.99996 5.83301 8.13448 5.83301 5.83329Z"
                                        fill=""
                                      />
                                    </g>
                                  </svg>
                                </span>
                                <input
                                  className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                  type="text"
                                  name="fullName"
                                  id="fullName"
                                  placeholder="ร้าน"
                                  defaultValue="ร้าน"
                                />
                              </div>
                            </div>

                            <div className="w-full sm:w-1/2">
                              <label
                                className="mb-3 block text-lg font-medium text-black dark:text-white"
                                htmlFor="phoneNumber"
                              >
                                เบอร์โทรติดต่อ
                              </label>

                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="phoneNumber"
                                id="phoneNumber"
                                placeholder="+990 3343 7865"
                                defaultValue="+990 3343 7865"
                              />
                            </div>
                          </div>

                          <div className="mb-5">
                            <label
                              className="mb-3 block text-lg font-medium text-black dark:text-white"
                              htmlFor="location"
                            >
                              location
                            </label>
                            <div className="relative">
                              <span className="absolute left-4 top-4">
                                <svg
                                  baseProfile="tiny"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  width="20"
                                  height="20"
                                >
                                  <path d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 000 11.13L12 21.999l5.657-5.565a7.78 7.78 0 000-11.13zM12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 010-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 010 3.536c-.472.472-1.1.732-1.768.732z" />
                                </svg>
                              </span>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="location"
                                name="location"
                                id="location"
                                placeholder=""
                                defaultValue=""
                              />
                            </div>
                          </div>

                          <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                            <div className="w-full sm:w-1/2">
                              <form class="grid grid-cols-2 gap-4 mt-2">
                                <div>
                                  <label
                                    for="start-time"
                                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                  >
                                    เวลาเปิด:
                                  </label>
                                  <div class="relative">
                                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                      <svg
                                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <input
                                      type="time"
                                      id="start-time"
                                      class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      min="09:00"
                                      max="18:00"
                                      required
                                    />
                                  </div>
                                </div>
                                <div>
                                  <label
                                    for="end-time"
                                    class="block mb-2 text-lg font-medium text-gray-900 dark:text-white"
                                  >
                                    เวลาปิด:
                                  </label>
                                  <div class="relative">
                                    <div class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                                      <svg
                                        class="w-4 h-4 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                                          clip-rule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <input
                                      type="time"
                                      id="end-time"
                                      class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                      min="09:00"
                                      max="18:00"
                                      required
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>

                            <div className="w-full sm:w-1/2">
                              <label
                                className="mb-3 block text-lg font-medium text-black dark:text-white"
                                htmlFor="fullName"
                              >
                                ที่อยู่ร้าน
                              </label>
                              <div className="relative">
                                <span className="absolute left-4 top-4">
                                <svg
                                  viewBox="0 0 512 512"
                                  fill="currentColor"
                                  width="20"
                                  height="20">
                                  <path d="M272 288h-64c-44.2 0-80 35.8-80 80 0 8.8 7.2 16 16 16h192c8.836 0 16-7.164 16-16 0-44.2-35.8-80-80-80zm-32-32c35.35 0 64-28.65 64-64s-28.65-64-64-64c-35.34 0-64 28.65-64 64s28.7 64 64 64zm256 64h-16v96h16c8.836 0 16-7.164 16-16v-64c0-8.8-7.2-16-16-16zm0-256h-16v96h16c8.8 0 16-7.2 16-16V80c0-8.84-7.2-16-16-16zm0 128h-16v96h16c8.8 0 16-7.2 16-16v-64c0-8.8-7.2-16-16-16zM384 0H96C60.65 0 32 28.65 32 64v384c0 35.35 28.65 64 64 64h288c35.35 0 64-28.65 64-64V64c0-35.35-28.7-64-64-64zm16 448c0 8.836-7.164 16-16 16H96c-8.836 0-16-7.164-16-16V64c0-8.838 7.164-16 16-16h288c8.836 0 16 7.162 16 16v384z" />
                                </svg>
                                </span>
                                <input
                                  className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                  type="text"
                                  name="text"
                                  id="text"
                                  placeholder=""
                                  defaultValue=""
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mb-5  flex flex-col  gap-5 sm:flex-row ">
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                              <h3 className="mb-3 font-medium text-lg text-black dark:text-white">
                                Facebook
                              </h3>
                              <div>
                                <input
                                  type="url"
                                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                              </div>
                            </div>
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                              <h3 className="mb-3 font-medium text-lg text-black dark:text-white">
                                Line
                              </h3>
                              <div>
                                <input
                                  type="url"
                                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                              </div>
                            </div>
                            <div className="border-b border-stroke py-4 px-6.5 dark:border-strokedark">
                              <h3 className="mb-3 font-medium text-lg text-black dark:text-white">
                                Instagram
                              </h3>
                              <div>
                                <input
                                  type="url"
                                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mb-5.5">
                            <label
                              className="mb-3 block text-lg font-medium text-black dark:text-white"
                              htmlFor="Username"
                            >
                              รายละเอียดเพิ่มเติม
                            </label>
                            <div className="relative">
                              <span className="absolute left-4 top-4">
                                <svg
                                  className="fill-current"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g
                                    opacity="0.8"
                                    clipPath="url(#clip0_88_10224)"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.56524 3.23223C2.03408 2.76339 2.66997 2.5 3.33301 2.5H9.16634C9.62658 2.5 9.99967 2.8731 9.99967 3.33333C9.99967 3.79357 9.62658 4.16667 9.16634 4.16667H3.33301C3.11199 4.16667 2.90003 4.25446 2.74375 4.41074C2.58747 4.56702 2.49967 4.77899 2.49967 5V16.6667C2.49967 16.8877 2.58747 17.0996 2.74375 17.2559C2.90003 17.4122 3.11199 17.5 3.33301 17.5H14.9997C15.2207 17.5 15.4326 17.4122 15.5889 17.2559C15.7452 17.0996 15.833 16.8877 15.833 16.6667V10.8333C15.833 10.3731 16.2061 10 16.6663 10C17.1266 10 17.4997 10.3731 17.4997 10.8333V16.6667C17.4997 17.3297 17.2363 17.9656 16.7674 18.4344C16.2986 18.9033 15.6627 19.1667 14.9997 19.1667H3.33301C2.66997 19.1667 2.03408 18.9033 1.56524 18.4344C1.0964 17.9656 0.833008 17.3297 0.833008 16.6667V5C0.833008 4.33696 1.0964 3.70107 1.56524 3.23223Z"
                                      fill=""
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M16.6664 2.39884C16.4185 2.39884 16.1809 2.49729 16.0056 2.67253L8.25216 10.426L7.81167 12.188L9.57365 11.7475L17.3271 3.99402C17.5023 3.81878 17.6008 3.5811 17.6008 3.33328C17.6008 3.08545 17.5023 2.84777 17.3271 2.67253C17.1519 2.49729 16.9142 2.39884 16.6664 2.39884ZM14.8271 1.49402C15.3149 1.00622 15.9765 0.732178 16.6664 0.732178C17.3562 0.732178 18.0178 1.00622 18.5056 1.49402C18.9934 1.98182 19.2675 2.64342 19.2675 3.33328C19.2675 4.02313 18.9934 4.68473 18.5056 5.17253L10.5889 13.0892C10.4821 13.196 10.3483 13.2718 10.2018 13.3084L6.86847 14.1417C6.58449 14.2127 6.28409 14.1295 6.0771 13.9225C5.87012 13.7156 5.78691 13.4151 5.85791 13.1312L6.69124 9.79783C6.72787 9.65131 6.80364 9.51749 6.91044 9.41069L14.8271 1.49402Z"
                                      fill=""
                                    />
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_88_10224">
                                      <rect
                                        width="20"
                                        height="20"
                                        fill="white"
                                      />
                                    </clipPath>
                                  </defs>
                                </svg>
                              </span>

                              <textarea
                                className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-4 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                name="bio"
                                id="bio"
                                rows={6}
                                placeholder="Write your bio here"
                                defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque posuere fermentum urna, eu condimentum mauris tempus ut. Donec fermentum blandit aliquet."
                              ></textarea>
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

                  <div className="col-span-5 xl:col-span-1">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-2 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-lg text-black dark:text-white">
                          รูปภาพหน้าปกของร้าน
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          {/* <div className="mb-4 flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full">
                              <img src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                              </span>
                              <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                  Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                  Update
                                </button>
                              </span>
                            </div>
                          </div> */}

                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 800 X 800px)</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-4 mt-3">
                            <button
                              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 xl:col-span-1">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-2 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-lg text-black dark:text-white">
                          รูปสนามในร้านที่1
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          {/* <div className="mb-4 flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full">
                              <img src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                              </span>
                              <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                  Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                  Update
                                </button>
                              </span>
                            </div>
                          </div> */}

                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 800 X 800px)</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-4 mt-3">
                            <button
                              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 xl:col-span-1">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-2 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-lg text-black dark:text-white">
                          รูปสนามในร้านที่2
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          {/* <div className="mb-4 flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full">
                              <img src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                              </span>
                              <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                  Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                  Update
                                </button>
                              </span>
                            </div>
                          </div> */}

                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 800 X 800px)</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-4 mt-3">
                            <button
                              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 xl:col-span-1">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-2 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-lg text-black dark:text-white">
                          รูปสนามในร้านที่3
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          {/* <div className="mb-4 flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full">
                              <img src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                              </span>
                              <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                  Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                  Update
                                </button>
                              </span>
                            </div>
                          </div> */}

                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 800 X 800px)</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-4 mt-3">
                            <button
                              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
                              type="submit"
                            >
                              Save
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-5 xl:col-span-1">
                    <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
                      <div className="border-b border-stroke py-2 px-7 dark:border-strokedark">
                        <h3 className="font-medium text-lg text-black dark:text-white">
                          รูปสนามในร้านที่4
                        </h3>
                      </div>
                      <div className="p-7">
                        <form action="#">
                          {/* <div className="mb-4 flex items-center gap-3">
                            <div className="h-14 w-14 rounded-full">
                              <img src={userThree} alt="User" />
                            </div>
                            <div>
                              <span className="mb-1.5 text-black dark:text-white">
                                Edit your photo
                              </span>
                              <span className="flex gap-2.5">
                                <button className="text-sm hover:text-primary">
                                  Delete
                                </button>
                                <button className="text-sm hover:text-primary">
                                  Update
                                </button>
                              </span>
                            </div>
                          </div> */}

                          <div
                            id="FileUpload"
                            className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                          >
                            <input
                              type="file"
                              accept="image/*"
                              className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                            />
                            <div className="flex flex-col items-center justify-center space-y-3">
                              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M1.99967 9.33337C2.36786 9.33337 2.66634 9.63185 2.66634 10V12.6667C2.66634 12.8435 2.73658 13.0131 2.8616 13.1381C2.98663 13.2631 3.1562 13.3334 3.33301 13.3334H12.6663C12.8431 13.3334 13.0127 13.2631 13.1377 13.1381C13.2628 13.0131 13.333 12.8435 13.333 12.6667V10C13.333 9.63185 13.6315 9.33337 13.9997 9.33337C14.3679 9.33337 14.6663 9.63185 14.6663 10V12.6667C14.6663 13.1971 14.4556 13.7058 14.0806 14.0809C13.7055 14.456 13.1968 14.6667 12.6663 14.6667H3.33301C2.80257 14.6667 2.29387 14.456 1.91879 14.0809C1.54372 13.7058 1.33301 13.1971 1.33301 12.6667V10C1.33301 9.63185 1.63148 9.33337 1.99967 9.33337Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.5286 1.52864C7.78894 1.26829 8.21106 1.26829 8.4714 1.52864L11.8047 4.86197C12.0651 5.12232 12.0651 5.54443 11.8047 5.80478C11.5444 6.06513 11.1223 6.06513 10.8619 5.80478L8 2.94285L5.13807 5.80478C4.87772 6.06513 4.45561 6.06513 4.19526 5.80478C3.93491 5.54443 3.93491 5.12232 4.19526 4.86197L7.5286 1.52864Z"
                                    fill="#3C50E0"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M7.99967 1.33337C8.36786 1.33337 8.66634 1.63185 8.66634 2.00004V10C8.66634 10.3682 8.36786 10.6667 7.99967 10.6667C7.63148 10.6667 7.33301 10.3682 7.33301 10V2.00004C7.33301 1.63185 7.63148 1.33337 7.99967 1.33337Z"
                                    fill="#3C50E0"
                                  />
                                </svg>
                              </span>
                              <p>
                                <span className="text-primary">
                                  Click to upload
                                </span>{" "}
                                or drag and drop
                              </p>
                              <p className="mt-1.5">SVG, PNG, JPG or GIF</p>
                              <p>(max, 800 X 800px)</p>
                            </div>
                          </div>

                          <div className="flex justify-end gap-4 mt-3">
                            <button
                              className="flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white"
                              type="submit"
                            >
                              Cancel
                            </button>
                            <button
                              className="flex justify-center rounded bg-primary py-2 px-6 font-medium text-white hover:bg-opacity-90"
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default MBarber_Details;
