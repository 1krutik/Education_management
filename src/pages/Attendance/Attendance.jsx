import React from "react";

function Attendance() {
  return (
    <div className="h-full w-full bg-gray-600 px-3 py-5 xl:px-20 xl:py-12">
      <header className="ie-na-header flex w-full justify-between">
        <h3 className="text-xl font-semibold text-white">Attendance</h3>
      </header>
      <div className="ie-na-content mt-5 text-white flex w-full flex-col gap-10 2xl:flex-row">
        This page will contain attendance records.
      </div>
    </div>
  );
}

export default Attendance;
