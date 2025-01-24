import { getAuth, signOut } from "firebase/auth";

export const handleLogout = async (navigate: (path: string) => void) => {
  const auth = getAuth();
  try {
    await signOut(auth);
    navigate("/login");
  } catch (error) {
    console.error("Logout failed:", error);
    alert("Failed to log out. Please try again.");
  }
};
