// src/components/Tips.tsx
import React, { useState } from "react";
import styled from "styled-components";
import { FaRecycle, FaBeer, FaBox, FaFileAlt } from "react-icons/fa";

// 아이콘 타입 캐스팅
const FaRecycleIcon = FaRecycle as React.ComponentType<any>;
const FaBeerIcon = FaBeer as React.ComponentType<any>;
const FaBoxIcon = FaBox as React.ComponentType<any>;
const FaFileAltIcon = FaFileAlt as React.ComponentType<any>;

interface Tip {
  id: string;
  label: string;
  icon: React.ComponentType<any>;
  description: string;
}

const tips: Tip[] = [
  { id: "plastic", label: "플라스틱", icon: FaRecycleIcon, description: "플라스틱은 깨끗이 씻어서 분리배출하세요." },
  { id: "can", label: "캔", icon: FaBeerIcon, description: "캔은 라벨 제거 후 배출하세요." },
  { id: "bottle", label: "병", icon: FaBoxIcon, description: "병은 라벨 제거 후 배출하세요." },
  { id: "paper", label: "종이", icon: FaFileAltIcon, description: "종이는 젖지 않게 보관 후 배출하세요." },
];

const Tips: React.FC = () => {
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);

  const openModal = (tip: Tip) => setSelectedTip(tip);
  const closeModal = () => setSelectedTip(null);

  return (
    <Container>
      <Title>♻️ 재활용 꿀팁</Title>
      <ButtonRow>
        {tips.map((tip) => {
          const Icon = tip.icon;
          return (
            <TipButton key={tip.id} onClick={() => openModal(tip)}>
              <Icon size={30} />
              {tip.label}
            </TipButton>
          );
        })}
      </ButtonRow>

      {selectedTip && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <ModalTitle>{selectedTip.label}</ModalTitle>
            <ModalDescription>{selectedTip.description}</ModalDescription>
            <CloseButton onClick={closeModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default Tips;

/* Styled Components */
const Container = styled.div`
  margin: 20px 0;
  width: 90%;
  max-width: 500px;
`;

const Title = styled.h2`
  margin-bottom: 10px;
  color: #4caf50;
  text-align: center;
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
  flex-wrap: wrap;
  gap: 10px;
`;

const TipButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 10px;
  font-size: 0.9rem;
  border-radius: 12px;
  border: 2px solid #ccc;
  background-color: #f7f7f7;
  cursor: pointer;
  transition: all 0.2s ease;
  width: 70px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  svg {
    color: #666;
  }
`;

/* 모달 스타일 */
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 25px 20px;
  border-radius: 12px;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`;

const ModalTitle = styled.h3`
  margin-bottom: 15px;
  color: #4caf50;
`;

const ModalDescription = styled.p`
  margin-bottom: 20px;
  font-size: 0.95rem;
  color: #333;
`;

const CloseButton = styled.button`
  padding: 8px 16px;
  border-radius: 8px;
  border: none;
  background-color: #4caf50;
  color: white;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;
