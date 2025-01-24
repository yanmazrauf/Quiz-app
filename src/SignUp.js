import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!email || !password) return alert("Please fill in all fields.");

    try {
      const { user } = await createUserWithEmailAndPassword(
        getAuth(),
        email,
        password
      );

      await setDoc(doc(db, "users", user.uid), { email, role: "student" });
      navigate("/login");
    } catch (error) {
      console.error("Error during sign-up:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "linear-gradient(to right, #667eea, #764ba2)",
        padding: 2,
      }}
    >
      <Paper elevation={10} sx={{ padding: 4, borderRadius: 3, width: 400 }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: "bold", mb: 2 }}
        >
          Sign Up
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          onClick={handleSignUp}
          sx={{
            fontWeight: "bold",
            textTransform: "none",
            backgroundColor: "#667eea",
            ":hover": { backgroundColor: "#5765d6" },
          }}
        >
          Sign Up
        </Button>

        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          Already have an account? <Link to="/login">Log In</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default SignUp;
