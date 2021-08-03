import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}> Capture photo</button>
      {imgSrc && (<img src={imgSrc} />)}
    </>
  )
};

export default WebcamComponent;