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

  const retake = () => {
    setImgSrc(null);
  };

  return (
    <div>
      {imgSrc ? (
        <img src={imgSrc} alt="webcam" />
      ) : (
        <Webcam
          height={600}
          width={600}
          ref={webcamRef}
          mirrored={mirrored}
          screenshotFormat="image/jpeg"
          screenshotQuality={0.8}
        />
      )}
      <div>
        {imgSrc ? (
          <RetakeBtn onClick={retake}>↺</RetakeBtn>
        ) : (
          <CaptureBtn onClick={capture}>📸</CaptureBtn>
        )}
      </div>
    </div>
  );
};

const CaptureBtn = styled.button`
  width: 600px;
  font-size: 30px;
  border: 3px solid green;
  border-radius: 8px;
`;

const RetakeBtn = styled.button`
  width: 600px;
  font-size: 30px;
  border: 3px solid red;
  border-radius: 8px;
`;

export default CustomWebcam;
