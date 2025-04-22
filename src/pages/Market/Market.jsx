import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductsLoadingSpinner from "../../components/ProductsLoadingSpinner/ProductsLoadingSpinner";
import useAllProducts from "../../hooks/useAllProducts";

const Market = () => {
    const [ products, isPending, isError, error, refetch ] = useAllProducts();

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

                {/* display all products posted by farmer */}
                <div className="products-container mt-10">
                    {/* buttons-container div starts */}
                    <div className="buttons-container"></div>

                    {/* products-container div starts */}
                    {
                        isPending ? <ProductsLoadingSpinner /> :
                        isError ? <ErrorMessage errMsg={error?.message} /> : (
                            <div className={`grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4`}>
                                {
                                    products?.map(product => <ProductCard key={product?._id} product={product} />)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Market;