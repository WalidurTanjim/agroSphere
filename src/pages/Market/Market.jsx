const Market = () => {
    return (
        <section className={`market`}>
        {/* TODO:
            1: Sort by price
            2: Sort by popularity */}

            <div className="market-inner container mx-auto px-6 lg:px-48 py-12">
                {/* page title container div starts */}
                <div className={`text-center`}>
                    <h1 className={`text-2xl md:text-3xl lg:text-4xl font-medium text-green-800`}>AgroMarket</h1>
                    <p className={`text-sm text-gray-500 font-medium pt-2`}>Discover fresh produce, quality seeds, tools & equipment directly from farmers.</p>
                </div>

                
            </div>
        </section>
    );
};

export default Market;