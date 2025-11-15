import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";
import { FaCamera } from "react-icons/fa";

// 컴포넌트
import Tips from "./components/Tips";
import Schedule from "./components/Schedule";
import Quiz from "./components/Quiz";

// FaCamera 타입 캐스팅
const FaCameraIcon = FaCamera as React.ComponentType<any>;

const App: React.FC = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const mirrored = true;

  // 사진 찍기
  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  // 다시 찍기
  const retake = () => setImgSrc(null);

  return (
    <Container>
      <Title>♻️ 쓰레기 분류 앱</Title>

      {/* Stage 표시 */}
      <StageText>Stage: 1</StageText>

      {/* 카메라 위쪽 이미지 */}
      <TopImage src="/images/sprout.png" alt="재활용 이미지" />

      {/* 카메라 화면 */}
      {imgSrc ? (
        <CapturedImg src={imgSrc} alt="Captured" />
      ) : (
        <StyledWebcam
          ref={webcamRef}
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}

      {/* 버튼 */}
      <ButtonWrapper>
        {imgSrc ? (
          <RetakeBtn onClick={retake}>↺ 다시 찍기</RetakeBtn>
        ) : (
          <CaptureBtn onClick={capture}>
            <FaCameraIcon size={24} /> 촬영
          </CaptureBtn>
        )}
      </ButtonWrapper>

      {/* 아래 섹션 */}
      <Tips />

      <SectionTitle>📅공병수거 장소/일정</SectionTitle>
      <Schedule />

      <SectionTitle>❓재활용 퀴즈</SectionTitle>
      <Quiz />
    </Container>
  );
};

export default App;

/* Styled Components */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
  background-color: #ffffff;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Title = styled.h1`
  margin-bottom: 10px;
  color: #4caf50;
  text-align: center;
`;

const StageText = styled.span`
  font-size: 0.8rem;
  color: #888;
  margin-bottom: 5px;
`;

const TopImage = styled.img`
  width: auto;
  max-width: 100%;
  height: 170px;
  margin-bottom: 5px;
`;

const StyledWebcam = styled(Webcam)`
  width: 70%;
  max-width: 400px;
  aspect-ratio: 4 / 3;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const CapturedImg = styled.img`
  width: 70%;
  max-width: 400px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 15px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 90%;
  max-width: 500px;
  margin-bottom: 20px;
`;

const CaptureBtn = styled.button`
  padding: 14px 0;
  font-size: 1.2rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(45deg, #4caf50, #81c784);
  color: white;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`;

const RetakeBtn = styled(CaptureBtn)`
  background: linear-gradient(45deg, #f44336, #e57373);
`;

const SectionTitle = styled.h2`
  margin-top: 25px;
  margin-bottom: 10px;
  color: #333333;
  text-align: center;
`;
