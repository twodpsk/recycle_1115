import React from "react";
import styled from "styled-components";

const Schedule: React.FC = () => {
  return (
    <Container>
      
      <Button>확인하러 가기</Button>
    </Container>
  );
};

export default Schedule;

const Container = styled.div`
  background: #fff0f5;
  border-radius: 15px;
  padding: 15px;
  margin: 10px 0;
  width: 90%;
  max-width: 500px;
`;

const Button = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 8px 0;
  border-radius: 8px;
  border: none;
  background: #ff69b4;
  color: white;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #ff85c1;
  }
`;
