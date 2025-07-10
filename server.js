const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json()); 


app.post("/reset-password", (req, res) => {
  const { email, newPassword } = req.body;


  if (!email) {
    return res.status(400).json({ error: "Email cannot be empty" });
  }

 
  if (!newPassword || newPassword.length < 8 || newPassword.length > 16) {
    return res.status(400).json({
      error: "Password length should be greater than 8 or less than or equal to 16",
    });
  }

  return res.status(200).json({
    message: "Password reset successful",
    email: email,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
