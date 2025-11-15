import { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import styled from "styled-components";

const CustomWebcam = () => {
  const webcamRef = useRef<Webcam | null>(null);
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [mirrored, setMirrored] = useState(true);

  const capture = useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    }
  }, [webcamRef]);

  const retake = () => setImgSrc(null);

  return (
    <Container>
      {imgSrc ? (
        <CapturedImg src={imgSrc} alt="webcam" />
      ) : (
        <StyledWebcam
          ref={webcamRef}
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}

      <ButtonWrapper>
        {imgSrc ? (
          <RetakeBtn onClick={retake}>↺ 다시 찍기</RetakeBtn>
        ) : (
          <CaptureBtn onClick={capture}>📸 촬영</CaptureBtn>
        )}
      </ButtonWrapper>
    </Container>
  );
};

export default CustomWebcam;

/* 스타일링 */

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const StyledWebcam = styled(Webcam)`
  width: 90%;
  max-width: 500px;
  aspect-ratio: 4/3;
  border-radius: 20px;
  border: 2px solid #4caf50;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const CapturedImg = styled.img`
  width: 90%;
  max-width: 500px;
  border-radius: 20px;
  border: 2px solid #4caf50;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 90%;
  max-width: 500px;
`;

const CaptureBtn = styled.button`
  padding: 14px 0;
  font-size: 1.5rem;
  border-radius: 50px;
  border: none;
  background: linear-gradient(45deg, #4caf50, #81c784);
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  }
`;

const RetakeBtn = styled(CaptureBtn)`
  background: linear-gradient(45deg, #f44336, #e57373);
`;
