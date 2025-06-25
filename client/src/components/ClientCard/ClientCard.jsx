import React, { useEffect, useState } from "react";
import styles from "../ClientCard/Client.module.css";
import axios from "axios";

const ClientCard = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("http://localhost:8000/getclientPost");
        console.log("Client Response:", res.data);
        setClients(res.data.data); // ✅ assuming response shape: { data: [...] }
      } catch (error) {
        console.error("Failed to fetch clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <h2 className={styles.heading}>Client Section</h2>

      <div className={styles.cardWrapper}>
        {clients.length > 0 ? (
          clients.map((client) => (
            <div className={styles.card} key={client._id}>
              <img
                src={
                  client.image.startsWith("http")
                    ? client.image
                    : `http://localhost:8000/uploads/${client.image}`
                }
                alt={client.name}
                className={styles.image}
              />
              <p className={styles.message}>{client.description}</p>
              <h3 className={styles.name}>{client.name}</h3>
              <p className={styles.role}>{client.designation}</p>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>Loading clients...</p>
        )}
      </div>
    </>
  );
};

export default ClientCard;
