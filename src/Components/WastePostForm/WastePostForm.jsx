import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const WastePostForm = () => {
    const { user } = useAuth();
    const [wasteData, setWasteData] = useState({
        type: "",
        quantity: "",
        imageURL: "",
        pricePerUnit: "",
        sellerEmail: user.email // You can fetch from auth context
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setWasteData({ ...wasteData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/waste", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(wasteData),
        })
            .then(res => res.json())
            .then(data => {
                alert("Waste Posted Successfully!");
                setWasteData({
                    type: "",
                    quantity: "",
                    imageURL: "",
                    pricePerUnit: "",
                    sellerEmail: user.email
                });
            });
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded shadow mt-10 bg-white">
            <h2 className="text-xl font-bold mb-4">Post Waste Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="wasteType"
                    placeholder="Waste Type"
                    className="w-full p-2 border rounded"
                    value={wasteData.type}
                    onChange={handleChange}
                    required
                />
                <input
                    name="quantity"
                    type="number"
                    placeholder="Quantity (e.g., 10 kg)"
                    className="w-full p-2 border rounded"
                    value={wasteData.quantity}
                    onChange={handleChange}
                    required
                />
                
                <input
                    name="image"
                    placeholder="Image URL"
                    className="w-full p-2 border rounded"
                    value={wasteData.imageURL}
                    onChange={handleChange}
                    required
                />
                <input
                    name="pricePerUnit"
                    type="number"
                    placeholder="Price per Unit (৳)"
                    className="w-full p-2 border rounded"
                    value={wasteData.pricePerUnit}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
                >
                    Post Waste
                </button>
            </form>
        </div>
    );
};

export default WastePostForm;