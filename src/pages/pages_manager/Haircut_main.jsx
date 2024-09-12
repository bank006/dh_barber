import React, { useState } from "react";
import Sidebar from "../../partials_manager/Sidebar";
import Header from "../../partials_manager/Header";

import Haircut from "./Haircut";


const Haircut_main = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [activeProduct, setActiveProduct] = useState('Haircut'); // ตั้งค่าเริ่มต้นเป็น 'Product'

    return (
        <>
            <div className="flex h-screen overflow-hidden">
                {/* Sidebar */}
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

                {/* Content area */}
                <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    {/* Site header */}
                    <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                    {/* Conditional rendering ของแต่ละ Product */}
                    <div className="p-4">
                        {activeProduct === 'Haircut' && <Haircut />}         
                    </div>
                </div>
            </div>
        </>
    );
};

export default Haircut_main;
