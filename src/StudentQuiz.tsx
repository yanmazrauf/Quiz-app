import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Radio, RadioGroup, FormControlLabel, FormControl, AppBar, Toolbar, Container, Divider } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

type Question<T> = {
  id: string;
  questionText: string;
  type: "multiple" | "boolean";
  options: T[];
  correctAnswer: T;
};

const StudentQuiz = () => {
  const [questions, setQuestions] = useState<Question<any>[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<number | null>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "questions"));
        const fetchedQuestions = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Question<any>[];
        setQuestions(fetchedQuestions);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };
    fetchQuestions();
  }, []);


  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  
  const calculateResult = () => {
    let score = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer.toString()) {
        score++;
      }
    });
    setResult(score);
  };

  return (
    <Box sx={{backgroundColor: "#e6e6ff"}}>
      <AppBar position="static" sx={{ backgroundColor: "#8527ff" }}>
        <Toolbar sx={{ px: 6 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            QUICK QUIZ
          </Typography>
          <Button color="inherit" onClick={() => navigate("/")}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
  
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h4" align="center" gutterBottom sx={{color:"#7d7d7d"}}>
          Solve Quiz
        </Typography>
  
        {questions.map((q, index) => (
          <Box
            key={q.id}
            sx={{
              mb: 3,
              p: 2,
              backgroundColor: "#f9f9f9",
              border: "2px solid #ddd",
              borderRadius: 3,
            }}
          >
            <Typography variant="h6" gutterBottom>
              {`${index + 1}. ${q.questionText}`}
            </Typography>
            <Divider sx={{ borderColor: 'grey.300', marginY: 2 }} />
            <FormControl>
              <RadioGroup
                value={answers[q.id] || ""}
                onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              >
                {q.options.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={option.toString()}
                    control={<Radio />}
                    label={option.toString()}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Box>
        ))}
  
        <Box textAlign="center" mt={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={calculateResult}
            disabled={Object.keys(answers).length !== questions.length}
            sx={{backgroundColor: "#770eff", width: "220px", borderRadius: "12px"}}
          >
            Submit Your Answers
          </Button>
        </Box>
  
        {result !== null && (
          <Typography
            variant="h5"
            align="center"
            mt={4}
            sx={{ color: "green" , fontWeight: "bold"}
          }
          >
            Your Score: {((result / questions.length) * 100).toFixed(2)}%
          </Typography>
        )}
      </Container>
    </Box>
  );  
};

export default StudentQuiz;
