import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { ShoppingCart, Users, TrendingUp, DollarSign, Eye, Zap, ArrowUp, ShoppingBag, Icon } from "lucide-react";
import axios from "axios";

export default function Dashboard() {
  const [user, setUser] = useState([]);
  const [products, setProducts] = useState([]);

  // fetch users
  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUser(res.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // fetch order
  useEffect(() => {
    axios
      .get("http://localhost:3000/orders")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const recentOrders = [
    { id: "#ORD-001", customer: "John Doe", product: "Smart Watch Pro", amount: "$299", status: "Delivered" },
    { id: "#ORD-002", customer: "Jane Smith", product: "Wireless Earbuds", amount: "$149", status: "Processing" },
    { id: "#ORD-003", customer: "Mike Johnson", product: "Portable Speaker", amount: "$199", status: "Shipped" },
    { id: "#ORD-004", customer: "Sarah Wilson", product: "Smart Home Hub", amount: "$249", status: "Pending" },
  ];

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-3 lg:p-6 bg-gray-50">
          {/* Welcome Banner */}
          <div className="bg-linear-to-r from-[#ff9900] to-[#ff7700] rounded-2xl p-8 mb-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">Welcome back, Admin! 👋</h2>
              <p className="text-white/90">Here's what's happening with your store today.</p>
            </div>
            <Zap className="absolute right-8 top-8 w-32 h-32 text-white/10 transform rotate-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* revenue */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg smooth-transition hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center smooth-transition hover:rotate-12">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  +20.1%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold">$45,231</p>
            </div>
            {/* orders */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg smooth-transition hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center smooth-transition hover:rotate-12">
                  <ShoppingCart className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  +12.5%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Orders</p>
              <p className="text-2xl font-bold">{products.length + 10}</p>
            </div>
            {/* users */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg smooth-transition hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center smooth-transition hover:rotate-12">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  +8.3%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Users</p>
              <p className="text-2xl font-bold">{user.length + 2781}</p>
            </div>
            {/* growth */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg smooth-transition hover:scale-105">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-linear-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center smooth-transition hover:rotate-12">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-green-500 text-sm font-semibold flex items-center gap-1">
                  <ArrowUp className="w-3 h-3" />
                  +4.2%
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-1">Growth</p>
              <p className="text-2xl font-bold">24.5%</p>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-[#ff9900]" />
                Recent Orders
              </h3>
              <button className="text-[#ff9900] text-sm font-semibold hover:underline flex items-center gap-1">
                View All <Eye className="w-4 h-4" />
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Order ID</th>
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Customer</th>
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Product</th>
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Amount</th>
                    <th className="text-left py-3 text-sm font-semibold text-gray-600">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, idx) => (
                    <tr key={idx} className="border-b hover:bg-gray-50 smooth-transition">
                      <td className="py-4 text-sm font-medium">{order.id}</td>
                      <td className="py-4 text-sm">{order.customer}</td>
                      <td className="py-4 text-sm">{order.product}</td>
                      <td className="py-4 text-sm font-semibold">{order.amount}</td>
                      <td className="py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Processing"
                              ? "bg-blue-100 text-blue-700"
                              : order.status === "Shipped"
                              ? "bg-purple-100 text-purple-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
