import { useState } from "react";
import useAuth from "../../hooks/useAuth";

const BuyWasteModal = ({ waste, onClose }) => {
  const [quantity, setQuantity] = useState(1); // Default quantity is 1
  const { user } = useAuth();

  const handleOrder = () => {
    const orderData = {
      wasteType: waste.type,
      quantity,
      buyerEmail: user.email,  // Replace with dynamic user email
      sellerEmail: waste.sellerEmail,
      totalPrice: quantity * waste.pricePerUnit,  // Assuming you have pricePerUnit
    };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then(res => res.json())
      .then(data => {
        alert("Order Placed Successfully!");
        onClose();  // Close the modal
      })
      .catch(err => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="bg-green-800 p-6 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-xl font-semibold mb-4">Buy {waste.type}</h2>
        <p><strong>Price per Unit:</strong> ${waste.pricePerUnit}</p>
        <p><strong>Available Quantity:</strong> {waste.quantity}</p>

        <div className="mt-4">
          <label htmlFor="quantity" className="block">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded"
            min="1"
            max={waste.quantity}
          />
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleOrder}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyWasteModal;