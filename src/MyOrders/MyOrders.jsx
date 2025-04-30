import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check if user is available before making the fetch request
        if (user && user.email) {
            fetch(`https://agro-sphere-server-ten.vercel.app/orders/${user.email}`)
                .then(res => {
                    if (!res.ok) {
                        throw new Error('Failed to fetch orders');
                    }
                    return res.json();
                })
                .then(data => {
                    setOrders(data);
                    setLoading(false);
                })
                .catch(error => {
                    setError(error.message);
                    setLoading(false);
                });
        } else {
            setLoading(false);
            setError("User is not authenticated.");
        }
    }, [user]);

    // Handle loading, error, and display orders
    if (loading) {
        return <div className="p-4">Loading orders...</div>;
    }

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">My Orders</h2>
            <ul>
                {orders.length === 0 ? (
                    <li>No orders found.</li>
                ) : (
                    orders.map(order => (
                        <li key={order._id} className="mb-4 border-b pb-2">
                            <p><strong>Buyer:</strong> {order.buyerEmail}</p>
                            <p><strong>Waste:</strong> {order.wasteType}</p>
                            <p><strong>Amount:</strong> {order.quantity} KG</p>
                            <p><strong>Total Price:</strong> {order.totalPrice}$</p>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default MyOrders;