import useSellers from "../../hooks/useSellers";

const Sellers = () => {
    const [ sellers, isPending, isError, error, refetch ] = useSellers();

    return (
        <section className="sellers w-full min-h-screen">
            <div className="container mx-auto px-6 lg:px-48 py-14">
                {/* page title container div starts */}
                <div className={`text-center`}>
                    <h1 className={`text-2xl md:text-3xl lg:text-4xl font-medium text-green-800`}>All Registered Sellers</h1>
                    <p className={`text-sm text-gray-500 font-medium pt-2`}>Browse the list of verified sellers offering products on the platform.</p>
                </div>
            </div>
        </section>
    );
};

export default Sellers;