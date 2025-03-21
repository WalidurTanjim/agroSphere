import React from 'react';
import DashboardRoutes from '../../../../router/DashboardRoutes';

const AdminDashboard = () => {
    return (
        <section className='admin_dashboard'>
            <DashboardRoutes />

            <h1>Admin Dashboard</h1>
        </section>
    );
};

export default AdminDashboard;