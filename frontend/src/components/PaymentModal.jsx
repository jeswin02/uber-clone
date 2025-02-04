import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentModal = ({ amount, onClose }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerAddress, setCustomerAddress] = useState({
    line1: "",
    line2: "",
    city: "",
    state: "",
    postal_code: "",
    country: "IN",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const {
      data: { clientSecret },
    } = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/payment/create-payment-intent`,
      { amount, customerName, customerAddress },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
      setLoading(false);
    } else {
      if (result.paymentIntent.status === "succeeded") {
        alert("Payment successful!");
        setLoading(false);
        onClose();
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <span
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
          onClick={onClose}
        >
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            className="p-3 border rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Address Line 1"
            value={customerAddress.line1}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, line1: e.target.value })
            }
            className="p-3 border rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Address Line 2"
            value={customerAddress.line2}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, line2: e.target.value })
            }
            className="p-3 border rounded-lg mb-4 w-full"
          />
          <input
            type="text"
            placeholder="City"
            value={customerAddress.city}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, city: e.target.value })
            }
            className="p-3 border rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="State"
            value={customerAddress.state}
            onChange={(e) =>
              setCustomerAddress({ ...customerAddress, state: e.target.value })
            }
            className="p-3 border rounded-lg mb-4 w-full"
            required
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={customerAddress.postal_code}
            onChange={(e) =>
              setCustomerAddress({
                ...customerAddress,
                postal_code: e.target.value,
              })
            }
            className="p-3 border rounded-lg mb-4 w-full"
            required
          />
          <CardElement className="p-3 border rounded-lg mb-4" />
          <button
            type="submit"
            disabled={!stripe || loading}
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg w-full"
          >
            {loading ? "Processing..." : `Pay ₹${amount / 100}`}
          </button>
          {error && <div className="text-red-500 mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
