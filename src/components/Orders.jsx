// src/components/Orders.js
import React, { useEffect, useState } from 'react';

export default function Orders() {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await fetch('http://localhost:3000/orders'); // Adjust base URL if needed
      const data = await res.json();
      setOrders(data);
    } catch (error) {
      console.error("Failed to fetch orders:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return (
    <div className="pa4">
      <h2 className="f3">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order, index) => (
            <li key={index} className="mb3">
              <strong>Order #{order.id || index + 1}</strong>
              <ul>
                {order.items.map((item, i) => (
                  <li key={i}>
                    {item.title} - {item.quantity} x ${item.price}
                  </li>
                ))}
              </ul>
              <p>Total: ${order.total}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
