import React, { useState } from "react";
import styled from "styled-components";

interface QuizItem {
  question: string;
  options: string[];
  answer: string;
}

const quizzes: QuizItem[] = [
  {
    question: "플라스틱 병을 분리배출하기 전에 무엇을 해야 할까요?",
    options: ["그냥 버린다", "깨끗이 씻는다"],
    answer: "깨끗이 씻는다",
  },
  {
    question: "종이는 어떻게 분리배출해야 할까요?",
    options: ["비닐과 함께 버린다", "종이만 모아서 버린다"],
    answer: "종이만 모아서 버린다",
  },
  {
    question: "유리병을 분리배출할 때 주의할 점은?",
    options: ["뚜껑을 닫고 그대로 버린다", "뚜껑을 분리하고 깨끗이 헹군다"],
    answer: "뚜껑을 분리하고 깨끗이 헹군다",
  },
];

const Quiz: React.FC = () => {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuiz < quizzes.length - 1) {
      setCurrentQuiz(currentQuiz + 1);
    } else {
      alert("퀴즈가 모두 끝났습니다!");
    }
  };

  return (
    <Container>
      <Question>{quizzes[currentQuiz].question}</Question>
      <ButtonWrapper>
        {quizzes[currentQuiz].options.map((option, idx) => (
          <QuizBtn key={idx} onClick={() => setSelectedAnswer(option)}>
            {option}
          </QuizBtn>
        ))}
      </ButtonWrapper>
      {selectedAnswer && (
        <>
          <Answer>
            {selectedAnswer === quizzes[currentQuiz].answer ? "정답!" : "틀렸습니다!"}
          </Answer>
          <NextBtn onClick={handleNext}>다음 문제</NextBtn>
        </>
      )}
    </Container>
  );
};

export default Quiz;

const Container = styled.div`
  background: #e6ffe6;
  border-radius: 15px;
  padding: 15px;
  margin: 10px auto;
  width: 90%;
  max-width: 500px;
`;

const Question = styled.p`
  margin-bottom: 10px;
  font-weight: bold;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const QuizBtn = styled.button`
  flex: 1;
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  background: #4caf50;
  color: white;
  cursor: pointer;
  &:hover {
    background: #45a049;
  }
`;

const Answer = styled.p`
  margin-top: 10px;
  font-weight: bold;
  color: #d32f2f;
`;

const NextBtn = styled.button`
  margin-top: 10px;
  padding: 8px 0;
  width: 100%;
  border-radius: 8px;
  border: none;
  background: #1976d2;
  color: white;
  cursor: pointer;
  &:hover {
    background: #1565c0;
  }
`;
