import React, { useEffect, useState } from "react";
import axios from "axios";

const Client = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const getClients = async () => {
    try {
      const res = await axios.get(
        "https://fliper-1-uzjb.onrender.com/getclientPost"
      );
      if (res.data && Array.isArray(res.data.data)) {
        setClients(res.data.data);
      } else {
        throw new Error("Render API did not return expected format");
      }
    } catch (err) {
      try {
        const fallback = await axios.get("http://localhost:8000/getclientPost");
        if (fallback.data && Array.isArray(fallback.data.data)) {
          setClients(fallback.data.data);
        } else {
          console.error("Localhost API format invalid");
        }
      } catch (error) {
        console.error("Error fetching clients", error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getClients();
  }, []);

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Happy Clients
        </h1>
        <p className="text-gray-700 max-w-2xl mx-auto text-lg">
          Our happy clients are the heart of our success. Their satisfaction
          reflects our commitment to quality, innovation, and personalized
          service.
        </p>
      </div>

      {/* Content */}
      {loading ? (
        <p className="text-center text-gray-500 text-xl">Loading...</p>
      ) : clients.length === 0 ? (
        <p className="text-center text-gray-500 text-xl">No clients found.</p>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex space-x-6 flex-nowrap pb-4">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-xl p-6 min-w-[280px] max-w-sm w-full text-center flex-shrink-0"
              >
                {/* Client Image */}
                <div className="flex justify-center mb-4">
                  <img
                    src={
                      client.image && client.image.startsWith("http")
                        ? client.image
                        : "https://via.placeholder.com/100"
                    }
                    alt={client.name}
                    className="w-24 h-24 rounded-full border-4 border-green-400 object-cover"
                  />
                </div>

                {/* Client Info */}
                <p className="text-gray-600 mb-4 text-sm">
                  {client.description}
                </p>
                <h3 className="text-lg font-semibold text-green-700">
                  {client.name}
                </h3>
                <p className="text-sm text-gray-500">{client.designation}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Client;
