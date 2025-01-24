import React, { useEffect, useState } from "react";
import { Box, Typography, Button, AppBar, Toolbar, Container } from "@mui/material";
import QuestionAdd from "./components/QuestionAdd";
import QuestionList from "./components/QuestionList";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { handleLogout } from "./AuthUtils";
import { useNavigate } from "react-router-dom";

export type Question<T> = {
  id: string;
  questionText: string;
  type: "multiple" | "boolean";
  options: T[];
  correctAnswer: T;
};

const InstructorPanel = () => {
  const [questions, setQuestions] = useState<Question<any>[]>([]);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "questions"));
      setQuestions(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Question<any>[]);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  const addQuestion = async <T,>(newQuestion: Question<T>) => {
    try {
      const docRef = await addDoc(collection(db, "questions"), newQuestion);
      setQuestions((prev) => [...prev, { ...newQuestion, id: docRef.id }]);
    } catch (error) {
      console.error("Error adding question:", error);
    }
  };

  const deleteQuestion = async (id: string) => {
    try {
      await deleteDoc(doc(db, "questions", id));
      setQuestions((prev) => prev.filter((q) => q.id !== id));
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <Box sx={{backgroundColor: "#e6e6ff"}}>
      <AppBar position="static" sx={{ backgroundColor: "#8527ff" }}>
        <Toolbar sx={{ px: 6 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            QUICK QUIZ
          </Typography>
          <Button color="inherit" onClick={() => handleLogout(navigate)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <QuestionAdd onAddQuestion={addQuestion} />
        </Box>
        <Box>
          <QuestionList questions={questions} onDeleteQuestion={deleteQuestion} />
        </Box>
      </Container>
    </Box>
  );
};

export default InstructorPanel;
