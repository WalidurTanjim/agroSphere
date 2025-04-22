import DashboardRoutes from "../../../../router/DashboardRoutes";

const IncommingRequests = () => {
    return (
        <section className={`incomming-requests w-full min-h-screen`}>
            <DashboardRoutes />

            <div className={`incomming-requests_inner container mx-auto px-6 py-14`}>
                {/* page title div starts */}
                <div className="text-center">
                    <h1 className="text-2xl md:text-3xl text-slate-700 mb-10">Member Access Requests</h1>
                    <p className={`text-sm text-gray-500 font-medium pt-2`}>Approve or deny role change applications to maintain secure access control.</p>
                </div>

                
            </div>
        </section>
    );
};

export default IncommingRequests;