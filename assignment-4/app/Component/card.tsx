import React from 'react';

interface StudentProps {
  name: string;
  rollNo: string;
  distanceLearning: string;
  city: string;
  center: string;
  campus: string;
  daysTime: string;
  batch: string;
};

function StudentCard(props: StudentProps) {
  return (
    <div className="border-2 p-4 rounded-lg max-w-md w-full bg-purple-300 shadow-md">
       <h1 className="font-bold text-2xl mb-4 text-black text-center">Student ID Card</h1>
      <div className="flex justify-between items-center">
        <div className='text-black'>
          <p className="text-lg font-semibold">Name: {props.name}</p>
          <p>Roll No: {props.rollNo}</p>
          <p>Distance learning: {props.distanceLearning}</p>
          <p>City: {props.city}</p>
          <p>Center: {props.center}</p>
          <p>Campus: {props.campus}</p>
          <p>Days/Time: {props.daysTime}</p>
          <p>Batch: {props.batch}</p>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;