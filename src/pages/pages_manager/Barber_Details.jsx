import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import userThree from "../../images/user/user-03.png";

import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../../partials_manager/Sidebar";
import Header from "../../partials_manager/Header";

import { useDispatch, useSelector } from "react-redux";
import { useQuery, useQueryClient } from "react-query";
import { setDataServe, setError } from "../../reduxs/reducers/userReduce";
import api from "../../utils/api";

const Store_Details = ({ user }) => {
  console.log(user)

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mybarber, setmybarber] = useState([])

  useEffect(() => {
    const idBarber = user._id
    axios.get(`http://localhost:3000/api/getMybarber/${idBarber}`)
      .then(res => {
        if (res) {
          setmybarber(res.data)
          console.log(res)
        }
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  const [formData, setFormData] = useState({
    idBarber: '',
    nameBarber: '',
    phone: '',
    location: '',
    dateOpen: '',
    dateClose: '',
    address: '',
    facebook: '',
    line: '',
    instagram: '',
  });

  const [image, setImage] = useState(null); // เก็บรูปภาพ
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(); // ใช้ FormData เพื่อส่งไฟล์
    data.append('idBarber', user._id)
    data.append('nameBarber', formData.nameBarber);
    data.append('phone', formData.phone);
    data.append('location', formData.location);
    data.append('dateOpen', formData.dateOpen);
    data.append('dateClose', formData.dateClose);
    data.append('address', formData.address);
    data.append('contact', JSON.stringify({
      facebook: formData.facebook,
      line: formData.line,
      instagram: formData.instagram,
    }));
    if (image) {
      data.append('image', image); // เพิ่มไฟล์เข้าไป
    }

    try {
      // ส่งข้อมูลไปยัง backend
      const response = await axios.post('http://localhost:3000/api/create-barber', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  const handleupdateBarber = (e) => {
    const { name, value } = e.target;

    // แยกส่วนของชื่อฟิลด์ให้ตรงกับ `contact` หรือฟิลด์อื่น ๆ
    if (name === 'facebook' || name === 'line' || name === 'instagram') {
      setmybarber(prevState => ({
        ...prevState,
        contact: {
          ...prevState.contact,
          [name]: value
        }
      }));
    } else {
      setmybarber(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handlesubmitupdate = async () => {
    try {
      // สร้างอ็อบเจ็กต์ข้อมูลที่ต้องการส่ง
      const data = {
        idBarber: user._id,
        nameBarber: mybarber.nameBarber,
        phone: mybarber.phone,
        dateOpen: mybarber.dateOpen,
        dateClose: mybarber.dateClose,
        address: mybarber.address,
        contact: {
          facebook: mybarber?.contact?.facebook || '',
          line: mybarber?.contact?.line || '',
          instagram: mybarber?.contact?.instagram || '',
        }
      };
      // ส่งข้อมูลด้วย axios
      const response = await axios.post(`http://localhost:3000/api/updateBarber/${user._id}`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // ตรวจสอบข้อมูลที่ตอบกลับ
      console.log('Response data:', response.data);
    } catch (error) {
      console.log(error);
    }
  }


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
                        {mybarber.staus == false &&
                          <form onSubmit={handleSubmit}>
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
                                    name="nameBarber" value={formData.nameBarber} onChange={handleInputChange}
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
                                  name="phone" value={formData.phone} onChange={handleInputChange}
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
                                  name="location" value={formData.location} onChange={handleInputChange}
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
                                        name="dateOpen" value={formData.dateOpen} onChange={handleInputChange}
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
                                        name="dateClose" value={formData.dateClose} onChange={handleInputChange}
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
                                    name="address"
                                    value={formData.address} onChange={handleInputChange}
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
                                    name="facebook" value={formData.facebook} onChange={handleInputChange}
                                    type="text"
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
                                    name="line" value={formData.line} onChange={handleInputChange}
                                    type="text"
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
                                    name="instagram" value={formData.instagram} onChange={handleInputChange}

                                    type="text"
                                    className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:py-3 file:px-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
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
                        }
                        {mybarber.staus !== false &&
                          <div className='p-[20px] w-full'>
                            <div className='flex justify-between w-fulll '>
                              <div className="mb-4 w-[48%]">
                                <label className="block text-gray-700">ชื่อร้าน:</label>
                                <input
                                  type="text"
                                  name="nameBarber"
                                  value={mybarber.nameBarber}
                                  onChange={handleupdateBarber}
                                  className="w-full p-2 border rounded-md"
                                />
                              </div>
                              <div className="mb-4 w-[48%]">
                                <label className="block text-gray-700">เบอร์โทร:</label>
                                <input
                                  type="text"
                                  name="phone"
                                  value={mybarber.phone}
                                  onChange={handleupdateBarber}
                                  className="w-full p-2 border rounded-md"
                                />
                              </div>
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700">เวลาทำการ:</label>
                              <input
                                type="time"
                                name="dateOpen"
                                value={mybarber.dateOpen}
                                onChange={handleupdateBarber}
                                className="w-full p-2 border rounded-md"
                              />
                              <input
                                type="time"
                                name="dateClose"
                                value={mybarber.dateClose}
                                onChange={handleupdateBarber}
                                className="w-full p-2 border rounded-md mt-2"
                              />
                            </div>
                            <div className="mb-4">
                              <label className="block text-gray-700">ที่อยู่:</label>
                              <input
                                type="text"
                                name="address"
                                value={mybarber.address}
                                onChange={handleupdateBarber}
                                className="w-full p-2 border rounded-md"
                              />
                            </div>

                            <div className='w-[70%] flex  h-[100px]'>
                              <div className='w-[30%] mr-[20px]'>
                                <p>Facebook</p>
                                <input type="text" className='w-full p-2 border rounded-md' name="facebook" value={mybarber?.contact?.facebook} onChange={handleupdateBarber} />
                              </div>
                              <div className='w-[30%] mr-[20px]'>
                                <p>Line</p>
                                <input type="text" className='w-full p-2 border rounded-md' name="line" value={mybarber?.contact?.line} onChange={handleupdateBarber} />
                              </div>
                              <div className='w-[30%] mr-[20px]'>
                                <p>Instagram</p>
                                <input type="text" className='w-full p-2 border rounded-md' name="instagram" value={mybarber?.contact?.instagram} onChange={handleupdateBarber} />
                              </div>
                            </div>

                            <div className='flex justify-end'>
                              <button
                                onClick={handlesubmitupdate}
                                className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                              >
                                Save
                              </button>
                              <button
                                // onClick={handleEditToggle}
                                className="bg-red-500 text-white py-2 px-4 rounded"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>

                        }
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

export default Store_Details;
