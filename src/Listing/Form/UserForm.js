import React, { useEffect, useState } from "react";
import axios from "axios";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const UserForm = ({ mode, id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("mode", mode);
  }, [mode]);

  const Noti = (type, msg) => {
    messageApi.open({
      type: type,
      content: msg,
    });
  };
  const API_URL = "https://jsonplaceholder.typicode.com/posts"; // Fake API URL
  const accessToken = "your_access_token_here";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("dsdsdsd", response?.data);
        setName(response.data.name);
        setEmail(response.data.email);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    if (mode === "EDIT") {
      fetchData();
    }
  }, [id, mode]);

  const postData = async (formData) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`, // Attach token in headers
          },
        }
      );
      return response.data;
    } catch (error) {
      console.error("API Error:", error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    if (!name || !email) {
      alert("Please fill in both fields!");
      return;
    }

    setLoading(true);

    try {
      const formData = {
        name: name,
        email: email,
      };
      const data = await postData(formData);
      setResponseData(data);
      await Noti("success", "User created successfully!");

      navigate(-1);
    } catch (error) {
      Noti("error", "sdsdsd");
      alert("Failed to submit data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {contextHolder}
      <h2 style={styles.heading}>Submit Data</h2>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button onClick={handleSubmit} disabled={loading} style={styles.button}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {responseData && (
        <div style={styles.responseContainer}>
          <h3>API Response:</h3>
          <pre style={styles.response}>
            {JSON.stringify(responseData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

// 🔥 Inline CSS styles
const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  inputContainer: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "5px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    fontSize: "16px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  responseContainer: {
    marginTop: "20px",
    textAlign: "left",
  },
  response: {
    backgroundColor: "#eee",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "12px",
    wordWrap: "break-word",
  },
};

export default UserForm;
