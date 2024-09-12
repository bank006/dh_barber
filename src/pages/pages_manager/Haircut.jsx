import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";

import React, { useState } from "react";

import { RadioButton } from "primereact/radiobutton";
import { Image } from "primereact/image";
import { fetchHaircut } from "../../hooks/GetHaircut";
import { toast } from "react-toastify";
import api from "../../utils/api";
import { useQuery, useQueryClient } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { setDataHaircut, setError } from "../../reduxs/reducers/userReduce";
import { useParams } from "react-router-dom";


import { FaRegAddressBook } from "react-icons/fa";

const Haircut = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const { hid } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [nameHaircut, setNameHaircut] = useState();
  const [imgHaircut, setImgHaircut] = useState();
  const { user } = useSelector((state) => state.user);
  const haircut = useSelector((state) => state?.user?.haircut);

  const fetchHaircut = async (id) => {
    const { data } = await api.get(`/all-haircut/${id}`);
    return data || null;
  };

  const { isLoading } = useQuery("haircutData", () => fetchHaircut(hid), {
    onSuccess: (data) => {
      dispatch(setDataHaircut(data?.data));
    },
    onError: (error) => {
      dispatch(setError(error?.message));
    },
    staleTime: 1000 * 10,
    refetchOnWindowFocus: false,
  });

  console.log(user);

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgHaircut(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handHaircut = async (e) => {
    e.preventDefault();
    console.log("handRegister");

    if (!nameHaircut || !imgHaircut) {
      toast.error("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    const data = {
      nameHaircut: nameHaircut,
      imgHaircut: imgHaircut,

    };

    try {
      await api.post(`/create-haircut/${hid}`, data).then(async (res) => {
        toast.success("เพิ่มสำเร็จ");
        queryClient.invalidateQueries("haircutData");
      });
    } catch (e) {


      toast.error("เพิ่มช่างตัดผมไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");

    }
  };

  const deleteHaircut = async (id) => {
    // Show confirmation dialog
    const isConfirmed = window.confirm("คุณแน่ใจหรือไม่ว่าต้องการลบช่างคนนี้นี้");

    // If the user confirms, proceed with deletion
    if (isConfirmed) {
      try {
        await api.delete(`/delete-haircut/${id}`);
        queryClient.invalidateQueries("haircutData");
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
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  ข้อมูลช่างตัดผม
                </h1>
              </div>


            </div>
            <div className="mx-auto max-w-270">
              <Breadcrumb pageName=" Haircut" />

              <div className="grid grid-cols-5 gap-3.5">
                <div className="col-span-5 xl:col-span-5">
                  <div className="rounded-lg border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">

                    <div className="p-7">
                      <form onSubmit={handHaircut}>
                        <div className="mb-5 flex flex-col gap-5 sm:flex-row">
                          <div className="w-full sm:w-1/2">
                            <label
                              className="mb-3 block text-lg font-medium text-black dark:text-white"
                              htmlFor="fullName"
                            >
                              ชื่อ
                            </label>
                            <div className="relative">
                              <span className="absolute left-4 top-4">
                                <FaRegAddressBook className="w-5 h-5" />
                              </span>
                              <input
                                className="w-full rounded border border-stroke bg-gray py-3 pl-12 pr-5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                type="text"
                                name="fullName"
                                id="fullName"
                                placeholder="กรอกชื่อ"
                                defaultValue=""
                                onChange={(e) =>
                                  setNameHaircut(e.target.value)
                                }
                              />

                            </div>

                          </div>

                        </div>

                        <div className="w-full sm:w-1/2">
                          <label
                            className="mb-3 block text-lg font-medium text-black dark:text-white"
                            htmlFor="fullName"
                          >
                            รูปภาพ
                          </label>
                          <div className="relative">
                            <div
                              id="FileUpload"
                              className="relative mb-5.5 block w-full cursor-pointer appearance-none rounded border border-dashed border-primary bg-gray py-4 px-4 dark:bg-meta-4 sm:py-7.5"
                            >
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFile}
                                className="absolute inset-0 z-50 m-0 h-full w-full cursor-pointer p-0 opacity-0 outline-none"
                              />
                              {!imgHaircut ? (
                                <div className="flex flex-col items-center justify-center space-y-3">
                                  <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-stroke bg-white dark:border-strokedark dark:bg-boxdark">
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
                                  <p className="mt-1.5">
                                    SVG, PNG, JPG or GIF
                                  </p>
                                  <p>(max, 800 X 800px)</p>
                                </div>
                              ) : (
                                <div className="mt-4 ">
                                  <img
                                    src={imgHaircut}
                                    alt=""
                                    className="w-full h-full object-cover rounded-md border"
                                  />
                                </div>
                              )}
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
                      ช่างตัดผม
                    </h1>
                  </div>
                  {/* Right: Actions */}
                </div>

                <section className="overflow-hidden bg-white rounded-md shadow dark:bg-gray-800 mt-10">

                  <div className="p-6 overflow-x-auto">
                    <div className="overflow-x-auto rounded-lg">
                      <table className="overflow-x-auto w-full whitespace-no-wrap">
                        <thead>
                          <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-700">
                            <th className="px-4 py-3">รูปภาพ</th>
                            <th className="px-4 py-3">ชื่อ</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                          {haircut?.map((item) => (
                            <tr
                              className="text-gray-700 dark:text-gray-400"
                              key={item.id}
                            >
                              <td className="px-4 py-3">
                                <div className="flex items-center text-sm">
                                  <div className="card flex justify-content-center ">
                                    <Image
                                      src={item.imgHaircut}
                                      alt="Image"
                                      width="100"
                                      height="100"
                                      preview
                                    />
                                  </div>
                                </div>
                              </td>
                              <td className="px-4 py-3 text-sm">
                                {item.nameHaircut}
                              </td>
                              <td className="px-4 py-4 text-sm whitespace-nowrap">
                                <div className="flex items-center gap-x-6">
                                  <button onClick={() => deleteHaircut(item?._id)} className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none">
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

      )}
    </>
  );
};

export default Haircut;
