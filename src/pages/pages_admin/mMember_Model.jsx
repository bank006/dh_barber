import React from 'react'

const Member_Model = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded shadow-lg w-96 ">
      <h2 className="text-lg font-bold mb-4 text-black"> {user.name}</h2>
      <img src={user.image} alt={user.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 " />
      <p className='text-black'><strong>ช่างตัดผม:</strong> {user.haircut}</p>
      <p className='text-black'><strong>บริการ: </strong> {user.serve}</p>
      <p className='text-black'><strong>วันที่:</strong> {user.date}</p>
      <p className='text-black'><strong>เวลา: </strong> {user.time}</p>
      <p className='text-black'><strong>ราคา: </strong> {user.price}</p>
      <button className="mt-4 btn bg-gray-900 text-gray-100 hover:bg-gray-800" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);
};

export default Member_Model