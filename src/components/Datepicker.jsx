import React from 'react';
import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_blue.css"; // อย่าลืมเพิ่มการนำเข้าธีมที่ต้องการ

function formatDateToDDMMYYYY(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // เดือนใน JavaScript เริ่มจาก 0
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
}

function Datepicker({ align, onDateChange }) {
  const options = {
    mode: 'single', // ใช้โหมด 'single' สำหรับการเลือกวันที่เดี่ยว
    static: true,
    monthSelectorType: 'static',
    dateFormat: 'd-m-Y', // ใช้รูปแบบวันที่ตรงนี้
    defaultDate: new Date(),
    prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
    nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = formatDateToDDMMYYYY(new Date()); // ตั้งค่าเริ่มต้น
      const customClass = (align) ? align : '';
      instance.calendarContainer.classList.add(`flatpickr-${customClass}`);
    },
    onChange: (selectedDates, dateStr, instance) => {
      if (selectedDates.length > 0) {
        const date = selectedDates[0];
        const formattedDate = formatDateToDDMMYYYY(date);
        instance.element.value = formattedDate;
        if (onDateChange) {
          onDateChange(formattedDate); // ส่งข้อมูลวันที่กลับไปที่ component แม่
        }
      }
    },
  };

  return (
    <div className="relative">
      <Flatpickr className="form-input pl-9 dark:bg-gray-800 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-100 font-medium w-[15.5rem]" options={options} />
      <div className="absolute inset-0 right-auto flex items-center pointer-events-none">
        <svg className="fill-current text-gray-400 dark:text-gray-500 ml-3" width="16" height="16" viewBox="0 0 16 16">
          <path d="M5 4a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z" />
          <path d="M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4ZM2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Z" />
        </svg>
      </div>
    </div>
  );
}

export default Datepicker;
