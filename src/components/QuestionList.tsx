import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Question } from "../InstructorPanel";

type QuestionListProps = {
  questions: Question<any>[];
  onDeleteQuestion: (id: string) => void;
};

const QuestionList = ({ questions, onDeleteQuestion }: QuestionListProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Question</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Correct Answer</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions.map((q) => (
            <TableRow key={q.id}>
              <TableCell>{q.questionText}</TableCell>

              <TableCell>{q.options.join(", ")}</TableCell>
              <TableCell>{q.correctAnswer.toString()}</TableCell>
              <TableCell align="right">
                <IconButton color="secondary" onClick={() => onDeleteQuestion(q.id)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default QuestionList;
