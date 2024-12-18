const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3001;

app.get("/products", async (req, res) => {
  try {
    // Fetch user information from User Service
    const userResponse = await axios.get("http://user-service.default.svc.cluster.local/users");
    const users = userResponse.data;

    // Simulated product data enriched with user preferences
    const products = [
      { id: 1, name: "Laptop", preferredBy: users[0]?.name || "N/A" },
      { id: 2, name: "Smartphone", preferredBy: users[1]?.name || "N/A" }
    ];

    res.json(products);
  } catch (error) {
    console.error("Error communicating with User Service:", error.message);
    res.status(500).send("Error fetching user data.");
  }
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});