import React, { useRef, useState, useCallback } from "react";
import Webcam from "react-webcam";

const WebcamComponent = () => {
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);

  const handleDownload = useCallback(() => {
    if (imgSrc) {
      const image = document.querySelector('img');
      const a = document.createElement('a');
      a.href = image.src
      a.download = "imagename.jpg";
      a.click();
      document.body.appendChild(a);
      setImgSrc(null);
    }
  },
    [imgSrc],
  );

  return (
    <>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />
      <button onClick={capture}> Capture photo</button>
      {imgSrc && (
        <img alt="" src={imgSrc} />
      )}
      {imgSrc && (
        <button onClick={handleDownload}>Download</button>
      )}
    </>
  )
};

export default WebcamComponent;