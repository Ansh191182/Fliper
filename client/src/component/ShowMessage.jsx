import React, { useEffect, useState } from "react";
import axios from "axios";

const ShowMessage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "https://fliper-1-uzjb.onrender.com/getcontact"
      );

      // Check if data is array
      if (Array.isArray(res.data)) {
        setContacts(res.data);
      } else {
        console.error("API didn't return array:", res.data);
        setContacts([]);
      }
    } catch (err) {
      try {
        const fallback = await axios.get("http://localhost:8000/getcontact");

        if (Array.isArray(fallback.data)) {
          setContacts(fallback.data);
        } else {
          console.error("Fallback API didn't return array:", fallback.data);
          setContacts([]);
        }
      } catch (error) {
        console.error("Error fetching contact messages", error);
        setContacts([]);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-blue-100 px-4 py-10">
      <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
        Contact Messages
      </h2>

      {loading ? (
        <p className="text-center text-xl text-gray-600">Loading messages...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center text-lg text-red-500">No messages found.</p>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 border border-blue-200"
            >
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                {contact.name}
              </h3>
              <p className="text-gray-700">
                <strong>Email:</strong> {contact.email}
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> {contact.phone}
              </p>
              <p className="text-gray-700">
                <strong>City:</strong> {contact.city}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowMessage;
