const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.post("/orders", async (req, res) => {
  const { productId, userId } = req.body;
  
  try {
    // Validation: Verify product details by calling the Product- Service
    const productResponse = await axios.get(`http://product-service.default.svc.cluster.local/products`);
    const products = productResponse.data;

    const product = products.find(p => p.id === productId);
    
    if (!product) {
      return res.status(404).send("Product not found.");
    }
    
    // Simulate creating an order
    const order = { orderId: 1, productId, userId, productName: product.name, status: "created" };
    res.status(201).json(order);
  } catch (error) {
    console.error("Error creating order:", error.message);
    res.status(500).send("Error creating order.");
  }
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});