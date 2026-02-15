// components/StudentPortalLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentNavbar from './Navbar';

const StudentPortalLayout = ({ user }) => {
  return (
    <>
      <StudentNavbar user={user} />
      <main>
        <Outlet /> 
      </main>
    </>
  );
};

export default StudentPortalLayout;