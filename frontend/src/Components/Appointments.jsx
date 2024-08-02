import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../index.css'; // Import the CSS file for custom styles

const localizer = momentLocalizer(moment);

const appointments = [
  {
    title: 'Meeting with John',
    start: new Date(2024, 6, 10, 10, 0), // July 10, 2024, 10:00 AM
    end: new Date(2024, 6, 10, 11, 0), // July 10, 2024, 11:00 AM
  },
  {
    title: 'Doctor Appointment',
    start: new Date(2024, 6, 15, 14, 0), // July 15, 2024, 2:00 PM
    end: new Date(2024, 6, 15, 15, 0), // July 15, 2024, 3:00 PM
  },
  // Add more appointments here
];

const Appointments = () => {
  return (
    <><div className="text-center mx-auto pl-40 pt-8">
    <h1 className='inline-block text-yellow-500 hover:text-yellow-300 text-3xl md:text-7xl'>Appointments</h1>
</div>
    <div className="flex justify-center items-center min-h-screen ml-32 bg-slate-950 text-white">
      
      <div className=" w-full max-w-screen-xl h-auto">
        <div className="bg-yellow-500 p-2 rounded-lg shadow-md">
          <Calendar
            localizer={localizer}
            events={appointments}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            className="bg-slate-950 text-white"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Appointments;
