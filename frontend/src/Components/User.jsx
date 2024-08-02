import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast'; // Assuming you have react-hot-toast for notifications
import { FaTrash } from 'react-icons/fa'; // Importing the trash icon from react-icons

const User = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(users.length / itemsPerPage);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/appoint/getUser`)
      .then(response => {
        setData(response.data);
        toast.success("Data fetched successfully");
      })
      .catch(error => {
        console.error("There was an error fetching data.", error);
        toast.error("Error fetching data");
      });
  }, []);

  const handleDelete = (email) => {
    axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/delete/deleteUser`, {
      data: { email }
    })
      .then(response => {
        setData(data.filter(contact => contact.email !== email));
        toast.success("Contact deleted successfully");
      })
      .catch(error => {
        console.error('Error deleting item:', error);
        toast.error("Error deleting contact");
      });
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedUsers = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="text-center mx-auto pt-8">
        <h1 className='inline-block hover:text-5xl hover:mb-0 text-yellow-500 hover:text-yellow-200 text-3xl md:text-7xl'>Users</h1>
      </div>
      <div className="flex pt-20 justify-center min-h-screen">
        {/* Main Content */}
        <div className="w-1/2 p-4 text-center">
          <table className="min-w-full outline outline-yellow-500 rounded-xl shadow shadow-lg shadow-yellow-500">
            <thead>
              <tr className='text-yellow-500 text-lg'>
                <th className="py-5 px-4">#</th>
                <th className="py-2 px-4">Name</th>
                <th className="py-2 px-4">Phone Number</th>
                <th className="py-2 px-4">Email</th>
                <th className="py-2 px-4">Message</th>
                <th className="py-2 px-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {selectedUsers.map((data, index) => (
                <tr key={index} className='border border-yellow-500'>
                  <td className="py-5 px-4 text-center">{startIndex + index + 1}</td>
                  <td className="py-2 px-4">{data.name}</td>
                  <td className="py-2 px-4">{data.phone}</td>
                  <td className="py-2 px-4">{data.email}</td>
                  <td className="py-2 px-4 text-wrapped">{data.comment}</td>
                  <td className="py-2 px-4 text-center">
                    <button 
                      onClick={() => handleDelete(data.email)} 
                      className="bg--500 text-white py-1 px-2 rounded">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between items-center mt-4">
            <div className="text-yellow-500">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, data.length)} of {data.length} entries
            </div>
            <div className="flex space-x-2">
              <button
                onClick={handlePreviousPage}
                className={`py-1 px-4 border rounded ${currentPage === 1 ? 'bg-white text-black cursor-not-allowed' : 'bg-yellow-500 text-black'}`}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                className={`py-1 px-4 border rounded ${currentPage === totalPages ? 'bg-white text-black cursor-not-allowed' : 'bg-yellow-500 text-black'}`}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
