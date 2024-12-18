const express = require("express");
const app = express();
const PORT = process.env.PORT || 3003;

app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Fola Louis", email: "fola.louis@gmail.com"},
    { id: 2, name: "Sah Micheal", email: "sah@gmail.com" },
    { id: 3, name: "Ludwig Fola", email: "fola@gmail.com" }
  ];

  res.json(users);
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});

