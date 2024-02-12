import React, { useState } from 'react';

// Define the FaceChanger component outside of the Page component
function FaceChanger({ faceImageUrl, handleChangeImage, positionFace }) {
  const { top, left, width, height } = positionFace;
  const faceStyle = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <img
      className="absolute top-[390px] left-[860px] w-[190px] h-[80px] object-flex z-50"
      style={faceStyle}
      src={faceImageUrl}
      alt=""
      onClick={() => handleChangeImage('new_face_image_url.png')}
    />
  );
}

export function Page({ onClose }) {
  const [top, setTop] = useState(385);
  const [left,setLeft] = useState(770)
  const [width, setWidth] = useState(390);
  const [height,setHeight] = useState(190)
  // State variable to hold the face image URL
  const [faceImageUrl, setFaceImageUrl] = useState('/face1@2x.png');
  
  // State variable to hold the position of the face

  // Function to change the face image
  const changeFaceImage = (newFaceImage) => {
    setFaceImageUrl(newFaceImage);
  };

  return (
    <div className="bg-white w-[1965px] h-[1294px] max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
      {/* Render the FaceChanger component */}
      <FaceChanger
        faceImageUrl={faceImageUrl}
        handleChangeImage={changeFaceImage}
        positionFace={{ top: top, left: left, width: width , height: height }}
      />
     <img
        className="absolute top-[232px] left-[57px] w-[420px] h-[800px] object-flex"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-10-2@2x.png"
      />
      <img
        className="absolute top-[277px] left-[1503px] w-[359px] h-[534px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow--8-removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[295px] left-[1523px] w-[318.2px] h-[492px] object-flex"
        alt=""
        src="/copy-of-justapaper--pitch-11-2@2x.png"
      />
      <img
        className="absolute top-[369px] left-[1545px] w-[97px] h-[63px] object-cover"
        alt=""
        src="/remove@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage("/nobg.png");
        }}
      />
     
      <div className="absolute top-[969px] left-[106px] w-[327px] h-11" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1764px] w-3 h-4 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1619px] w-[13px] h-4 [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[787px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
        2
      </div>
      <img
        className="absolute top-[683px] left-[1698px] w-[132px] h-[55px] object-cover"
        alt=""
        src="/face7@2x.png"
        onClick={(event) => {
          setTop(405)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[479px] left-[1556px] w-[76px] h-[43px] object-cover"
        alt=""
        src="/face2@2x.png"
        onClick={(event) => {
          setTop(390)
          setLeft(850)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[485px] left-[1701px] w-[126px] h-[37px] object-cover"
        alt=""
        src="/face3@2x.png"
        onClick={(event) => {
          setTop(400)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[569px] left-[1555px] w-[101px] h-[60px] object-cover"
        alt=""
        src="/face4@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[585px] left-[1708px] w-[119px] h-[30px] object-cover"
        alt=""
        src="/face5@2x.png"
        onClick={(event) => {
          setTop(410)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[683px] left-[1550px] w-[113px] h-[65px] object-cover"
        alt=""
        src="/face6@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(860)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[369px] left-[1692px] w-[119px] h-[65px] object-cover"
        alt=""
        src="/face1@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(868)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
        
      />
    </div>
  );
}
