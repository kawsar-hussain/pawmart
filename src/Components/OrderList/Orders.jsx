import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { AuthContext } from "../../Provider/AuthProvider";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://server-a10-six.vercel.app/orders")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  const downloadPdf = () => {
    if (!products.length) return;

    const doc = new jsPDF();

    // header
    doc.setTextColor("#ff9900");
    doc.setFontSize(20);
    doc.setFont(undefined, "bold"); // Set bold
    doc.text("My Order Lists (PawMart)", doc.internal.pageSize.getWidth() / 2, 15, { align: "center" }); // Centered

    // Table headers
    const headers = [["SL No", "Product", "Buyer Name", "Quantity", "Price", "Address", "Phone", "Date"]];

    // Table rows
    const rows = [...products]
      .filter((product) => product.email === user.email)
      .map((order, index) => [index + 1, order.productName, order.buyerName, order.quantity, order.price === 0 ? "Free For Adoption" : order.price, order.address, order.phone, order.date]);

    // Table
    autoTable(doc, {
      head: headers,
      body: rows,
      startY: 25,
      theme: "grid",
      headStyles: { fillColor: [255, 153, 0], textColor: 255 },
    });

    // Realtime download date & time at bottom left (AM/PM format)
    const pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight();
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const year = now.getFullYear();
    const hours = String(now.getHours() % 12 || 12).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    const dateTimeString = `${day}-${month}-${year}, ${hours}:${minutes}:${seconds} ${ampm}`;

    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text(`Downloaded at: ${dateTimeString}`, 14, pageHeight - 10);
    doc.text(`Customer Name: ${user.displayName}`, 14, pageHeight - 16);

    doc.save("orders (PawMart).pdf");
  };

  return (
    <div className="px-3 lg:px-20 py-5 pb-10 lg:py-15 bg-base-200 lg:min-h-[500px] min-h-auto">
      <h2 className="text-2xl lg:text-4xl font-bold primary-text mb-5 lg:mb-10 text-center">My Order Lists</h2>

      <div className="mb-4 text-center flex justify-end">
        <button onClick={downloadPdf} className="btn h-9 bg-linear-to-tr from-[#ff6f00] to-[#ffb03a] text-white rounded hover:scale-105 duration-200">
          Download PDF
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-[#ff9900] text-white">
            <tr>
              <th>SL No</th>
              <th>Product</th>
              <th>Buyer Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {[...products]
              .filter((product) => product.email === user.email)
              .map((order, index) => (
                <tr key={index} className="even:bg-[#ffefd7] odd:bg-white hover:bg-gray-200">
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={order?.image} alt={order?.productName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{order?.productName}</div>
                        <div className="text-sm opacity-50">{order?.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>{order.buyerName}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price === 0 ? "Free For Adoption" : order.price}</td>
                  <td>{order.address}</td>
                  <td>{order.phone}</td>
                  <td>{order.date}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
