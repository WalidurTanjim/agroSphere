import React from 'react';
import DashboardRoutes from '../../../../router/DashboardRoutes';
import MyOrders from '../../../../MyOrders/MyOrders';

const SellerDashboard = () => {
    return (
        <section className='farmer_dashboard'>
            <DashboardRoutes />
            <h1>Seller dashboard</h1>
            <MyOrders></MyOrders>
        </section>
    );
};

export default SellerDashboard;