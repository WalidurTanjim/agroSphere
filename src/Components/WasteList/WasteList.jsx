import { useEffect, useState } from "react";
import BuyWasteModal from "../BuyWasteModal/BuyWasteModal";

const WasteList = () => {
    const [wastes, setWastes] = useState([]);
    const [selectedWaste, setSelectedWaste] = useState(null);

    useEffect(() => {
        fetch("https://agro-sphere-server-ten.vercel.app/waste")
            .then(res => res.json())
            .then(data => setWastes(data));
    }, []);

    const handleBuyNow = (waste) => {
        setSelectedWaste(waste);
    };

    const handleCloseModal = () => {
        setSelectedWaste(null);
    };

    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {wastes.map(waste => (
                <div key={waste._id} className="border p-4 rounded-lg shadow">
                    {waste.imageURL && <img src={waste.imageURL} alt="Waste" className="rounded w-full h-[200px]" />}
                    <h2 className="text-xl font-bold pt-3">{waste.type}</h2>
                    <p>Quantity: {waste.quantity}KG</p>
                    <p>Days Stored: {waste.daysStored}Day</p>
                    <button onClick={() => handleBuyNow(waste)} className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
                        Buy Now
                    </button>
                </div>
            ))}

            {selectedWaste && (
                <BuyWasteModal waste={selectedWaste} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default WasteList;