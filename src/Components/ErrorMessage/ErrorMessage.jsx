const ErrorMessage = ({ errMsg }) => {
    return (
        <div className={`errorMessage w-full py-14 text-center`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-red-600 font-medium">{errMsg ? errMsg : "No error message available"}</h1>
        </div>
    );
};

export default ErrorMessage;