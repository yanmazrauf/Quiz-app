import React, { useState } from "react";
import { Box, TextField, Button, Typography, Select, MenuItem } from "@mui/material";
import { Question } from "../InstructorPanel";

type QuestionAddProps = {
  onAddQuestion: <T>(newQuestion: Question<T>) => void;
};

const QuestionAdd = ({ onAddQuestion }: QuestionAddProps) => {
  const [questionText, setQuestionText] = useState("");
  const [type, setType] = useState<"multiple" | "boolean">("multiple");
  const [options, setOptions] = useState<string[]>([]);
  const [correctAnswer, setCorrectAnswer] = useState<string | boolean>("");

  const handleAddQuestion = () => {
    if (!questionText || (type === "multiple" && options.some((opt) => !opt)) || correctAnswer === "") {
      alert("Please fill in all fields.");
      return;
    }

    onAddQuestion({
      id: Date.now().toString(),
      questionText,
      type,
      options: type === "boolean" ? ["True", "False"] : options,
      correctAnswer,
    });

    setQuestionText("");
    setOptions([]);
    setCorrectAnswer("");
  };

  const handleOptionChange = (index: number, value: string) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  return (
    <Box sx={{ padding: 5, backgroundColor: "#f9f9f9", borderRadius: 2, display: "flex",flexDirection: "column" }}>
      <Typography variant="h5" sx={{ marginBottom: 2 , color:"#7d7d7d"}}>
        Add New Question
      </Typography>
      <TextField
        label="Question Text"
        variant="outlined"
        fullWidth
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        sx={{ marginBottom: 2 , borderRadius: "15px"}}
      />
      <Select
        value={type}
        onChange={(e) => setType(e.target.value as "multiple" | "boolean")}
        sx={{ marginBottom: 2,borderRadius: "12px",width: "200px" }}
      >
        <MenuItem value="multiple">Multiple Choice</MenuItem>
        <MenuItem value="boolean">True/False</MenuItem>
      </Select>
      {type === "multiple" && (
        <>
          {options.map((option, index) => (
            <TextField
              key={index}
              label={`Option ${index + 1}`}
              variant="outlined"
              fullWidth
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              sx={{ marginBottom: 2 }}
            />
          ))}
          <Button
            variant="outlined"
            onClick={() => setOptions([...options, ""])}
            sx={{ marginBottom: 2, borderRadius: "12px" , borderColor: "#770eff", color: "#770eff", width: "200px"}}
          >
            Add Option
          </Button>
        </>
      )}
      <TextField
        label="Correct Answer"
        variant="outlined"
        fullWidth
        value={correctAnswer as string}
        onChange={(e) =>
          setCorrectAnswer(type === "boolean" ? e.target.value === "True" : e.target.value)
        }
        sx={{ marginBottom: 2 , borderRadius: "12px" }}
      />
      <Box sx={{display: "flex",justifyContent: "center"}}>
        <Button variant="contained" sx={{backgroundColor: "#770eff", width: "220px", borderRadius: "12px", height: "50px"}} 
          onClick={handleAddQuestion}>
          Create New Question
        </Button>
      </Box>
    </Box>
  );
};

export default QuestionAdd;
