import React, { useState } from 'react';

const casesData = [
    { id: '#p245879', date: '14 April 2021', client: 'Aaliyah Clark', attorney: 'Mr. Johen Doe', type: 'Business Litigation', status: 'Win', hearing: '1 Hearing' },
    { id: '#p245880', date: '18 April 2021', client: 'Mical Clark', attorney: 'Mr. Aiden Doe', type: 'Criminal Law', status: 'Win', hearing: '3 Hearing' },
    { id: '#p245881', date: '22 May 2021, 15:30 PM', client: 'Stela Clark', attorney: 'Mr. Lalvani Doe', type: 'Identity Theft', status: 'Lost', hearing: 'FF-112' },
    { id: '#p245882', date: '26 April 2021', client: 'Boone Doe', attorney: 'Mr. Don Paton', type: 'Travel Accident', status: 'Lost', hearing: 'No Hearing' },
    { id: '#p245883', date: '30 April 2021', client: 'Carlie Paton', attorney: 'Mr. Mical Doe', type: 'Legal Advice', status: 'Declined', hearing: '5 Hearing' },
    { id: '#p245884', date: '1 May 2021', client: 'Delilah', attorney: 'Mr. Johen Doe', type: 'Business Law', status: 'Win', hearing: '3 Hearing' },
    { id: '#p245885', date: '2 May 2021', client: 'Hannah Doe', attorney: 'Mr. Jennifer Ruby', type: 'Civil Litigation', status: 'Declined', hearing: '7 Hearing' },
    { id: '#p245886', date: '3 May 2021', client: 'Emerson Clark', attorney: 'Mr. Alex Siauw', type: 'Insurance Defence', status: 'Declined', hearing: '1 Hearing' },
    { id: '#p245887', date: '4 May 2021', client: 'Crystal Doe', attorney: 'Mr. Samuel Jr.', type: 'Family Law', status: 'Win', hearing: '3 Hearing' },
    { id: '#p245888', date: '5 May 2021', client: 'Jenny Don', attorney: 'Mr. Widan Cheeh', type: 'Cold & Flu', status: 'Declined', hearing: '3 Hearing' },
    { id: '#p245885', date: '2 May 2021', client: 'Hannah Doe', attorney: 'Mr. Jennifer Ruby', type: 'Civil Litigation', status: 'Declined', hearing: '7 Hearing' },
    { id: '#p245886', date: '3 May 2021', client: 'Emerson Clark', attorney: 'Mr. Alex Siauw', type: 'Insurance Defence', status: 'Declined', hearing: '1 Hearing' },
    { id: '#p245887', date: '4 May 2021', client: 'Crystal Doe', attorney: 'Mr. Samuel Jr.', type: 'Family Law', status: 'Win', hearing: '3 Hearing' },
    { id: '#p245888', date: '5 May 2021', client: 'Jenny Don', attorney: 'Mr. Widan Cheeh', type: 'Cold & Flu', status: 'Declined', hearing: '3 Hearing' }
];

const Cases = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const casesPerPage = 10;

    const indexOfLastCase = currentPage * casesPerPage;
    const indexOfFirstCase = indexOfLastCase - casesPerPage;
    const currentCases = casesData.slice(indexOfFirstCase, indexOfLastCase);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
        <div className="text-center mx-auto pl-40 pt-8">
            <h1 className='inline-block  text-yellow-500 hover:text-yellow-300 text-3xl md:text-7xl'>Cases</h1>
        </div>
            <div className="flex justify-center items-center min-h-screen bg-slate-950 ">
                <div className="container mx-auto p-10" style={{ marginLeft: '320px' /* Adjust this value based on your sidebar width */ }}>
                    <div className="overflow-x-auto rounded-xl outline outline-yellow-500">
                        <table className="min-w-full bg-slate-900 rounded-xl outline outline-yellow-500 text-white text-center">
                            <thead >
                                <tr className='text-yellow-500 text-lg'>
                                    <th className="px- py-4">Cases ID</th>
                                    <th className="px- py-2">Date</th>
                                    <th className="px- py-2">Client Name</th>
                                    <th className="px- py-2">Attorney Assigned</th>
                                    <th className="px- py-2">Case Type</th>
                                    <th className="px- py-2">Status</th>
                                    <th className="px- py-2">Hearing</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentCases.map((caseItem, index) => (
                                    <tr key={index} className="border-b border-gray-700">
                                        <td className="px-4 py-4">{caseItem.id}</td>
                                        <td className="px-4 py-2">{caseItem.date}</td>
                                        <td className="px-4 py-2">{caseItem.client}</td>
                                        <td className="px-4 py-2">{caseItem.attorney}</td>
                                        <td className="px-4 py-2">{caseItem.type}</td>
                                        <td className="px-4 py-2">
                                            <span className={`px-2 py-1 rounded-full ${caseItem.status === 'Win' ? 'bg-green-500' : caseItem.status === 'Lost' ? 'bg-red-500' : 'bg-yellow-500'}`}>
                                                {caseItem.status}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">{caseItem.hearing}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                        <span>Showing {indexOfFirstCase + 1} to {indexOfLastCase} of {casesData.length} entries</span>
                        <div className="flex space-x-2">
                            {[...Array(Math.ceil(casesData.length / casesPerPage)).keys()].map(number => (
                                <button
                                    key={number + 1}
                                    onClick={() => paginate(number + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === number + 1 ? 'bg-yellow-500 text-black' : 'bg-gray-300 text-black'}`}
                                >
                                    {number + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
};

export default Cases;
