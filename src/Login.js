import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) return alert("Please fill in all fields.");

    try {
      const auth = getAuth();
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) return alert("User data not found. Please contact support.");

      navigate(userDoc.data().role === "teacher" ? "/instructor" : "/student");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid email or password.");
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
      <Paper
        elevation={10}
        sx={{ padding: 4, borderRadius: 3, width: 400, backgroundColor: "#fff" }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold", color: "#333" }}>
          Log In
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ marginBottom: 2 }}
        />

        <Button
          variant="contained"
          fullWidth
          sx={{
            fontWeight: "bold",
            backgroundColor: "#667eea",
            textTransform: "none",
            "&:hover": { backgroundColor: "#5765d6" },
            marginBottom: 2,
          }}
          onClick={handleLogin}
        >
          Log In
        </Button>

        <Typography align="center" variant="body2" color="textSecondary">
          Haven't signed up yet? <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Login;
