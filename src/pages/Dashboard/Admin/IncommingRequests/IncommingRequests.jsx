import DashboardRoutes from "../../../../router/DashboardRoutes";

const IncommingRequests = () => {
    return (
        <section className={`incomming-requests w-full min-h-screen`}>
            <DashboardRoutes />

            <div className={`incomming-requests_inner container mx-auto px-6 py-14`}>
                <h1>Incomming requests page only for admin</h1>
            </div>
        </section>
    );
};

export default IncommingRequests;