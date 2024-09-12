import React, { useState } from "react";
import Sidebar from "../../partials/Sidebar";
import Header from "../../partials/Header";
import Booking1 from "./mBooking1";

const Booking_main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState('Product'); // ตั้งค่าเริ่มต้นเป็น 'Product'

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                    <div className="mt-7 grid grid-flow-col sm:auto-cols-max justify-center sm:justify-center gap-2">
                        {/* <button
                            className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            onClick={() => setActiveProduct('booking1')}
                        >
                            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                            </svg>
                            <span className="max-xs:sr-only">Football</span>
                        </button> */}
                        {/* <button
                            className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            onClick={() => setActiveProduct('Product2')}
                        >
                            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                            </svg>
                            <span className="max-xs:sr-only">Basketball</span>
                        </button>
                        <button
                            className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                            onClick={() => setActiveProduct('Product3')}
                        >
                            <svg className="fill-current shrink-0 xs:hidden" width="16" height="16" viewBox="0 0 16 16">
                                <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                            </svg>
                            <span className="max-xs:sr-only">Futsal</span>
                        </button> */}
                    </div>

                    {/* Conditional rendering ของแต่ละ Product */}
                    <div className="p-4">
                        {activeProduct === 'booking1' && <Booking1 />}
                        {/* {activeProduct === 'Product2' && <Product2 />}
                        {activeProduct === 'Product3' && <Product3 />} */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Booking_main;



