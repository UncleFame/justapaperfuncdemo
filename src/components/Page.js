import React, { useState } from 'react';
import { ShirtModel } from './Page1'; // Note: PascalCase for component names

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
      className="absolute top-[390px] left-[860px] w-[190px] h-[80px] object-flex z-5"
      style={faceStyle}
      src={faceImageUrl}
      alt=""
      onClick={() => handleChangeImage('new_face_image_url.png')}
    />
  );
}

export function Page({ onClose }) {
  const [showBase, setShowBase] = useState(false);
  const [showShirtModel, setShowShirtModel] = useState(false); // State to manage visibility of shirtModel
  const [showPage, setShowPage] = useState(false);
  const toggleShirtModel = () => {
    setShowShirtModel(!showShirtModel);
    setShowBase(false); // Hide baseModel when showing shirtModel
    setShowPage(false); // Hide page when showing shirtModel
  };

  const toggleBaseModel = () => {
    setShowBase(!showBase);
    setShowShirtModel(false); // Hide shirtModel when showing baseModel
    setShowPage(false); // Hide page when showing baseModel
  };

  const togglePage = () => {
    setShowPage(!showPage);
    setShowShirtModel(false); // Hide shirtModel when showing page
    setShowBase(false); // Hide baseModel when showing page
  };
  
  const [top, setTop] = useState(410);
  const [left, setLeft] = useState(868);
  const [width, setWidth] = useState(210);
  const [height, setHeight] = useState(90);
  // State variable to hold the face image URL
  const [faceImageUrl, setFaceImageUrl] = useState('/face1@2x.png');

  // Function to change the face image
  const changeFaceImage = (newFaceImage) => {
    setFaceImageUrl(newFaceImage);
  };

  return (
    <div className="bg-white w-[1965px] h-[1294px] max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
      <FaceChanger
        faceImageUrl={faceImageUrl}
        handleChangeImage={changeFaceImage}
        positionFace={{ top: top, left: left, width: width, height: height }}
      />
      
      <img
        className="absolute top-[284px] left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="step1box (2).png"
      />
      <img
        className="absolute top-[654px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step2Box.png"
        onClick={togglePage}
      />
       <img
        className="absolute top-[704px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step3Box.png"
      />
      <img
        className="absolute top-[784px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step4Box.png"
        onClick={toggleBaseModel}/>{showBase && <BaseModel onClose={onClose} 
      />}
            <img
        className="absolute top-[854px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step5Box.png"
      />
     <img
        className="absolute top-[339px] left-[128px] w-[165px] h-[322px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-10-1@2x.png"
      />
      <img
        className="absolute top-[238px] left-[63px] w-[412px] h-[775px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-9-1@2x.png"
      />
      <img
        className="absolute top-[284px] left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="step1box (2).png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[784px] left-[106px] w-[327px] h-11 bg-[url('/public/copyofjustapaperpitch81@2x.png')] bg-cover bg-no-repeat bg-[top]" 
       onClick={toggleShirtModel} />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[846px] left-[106px] w-[327px] h-[43px] bg-[url('/public/copyofjustapaperpitch141@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[907px] left-[106px] w-[327px] h-[45px] bg-[url('/public/copyofjustapaperpitch151@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[969px] left-[106px] w-[327px] h-11" />
      
      <img
        className="absolute top-[444px] left-[158px] w-4 h-[26px] object-fill"
        alt=""
        src="/group-1@2x.png"
        ></img>
       
      <img
        className= "absolute top-[364px] left-[140px] w-600  h-[350px] object-fill"
        alt=''
        src='/Step2guide.png'
      >
        
      </img>
      <img
        className="absolute top-[369px] left-[1545px] w-[97px] h-[63px] object-cover z-10"
        alt=""
        src="/remove@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(860)
          setWidth(2)
          setHeight(90)
          changeFaceImage("/nobg.png");
        }}
      />
      <img
        className="absolute top-[308px] left-[1522px] w-[318.2px] h-[472px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-11-2@2x.png"
      />
      <div className="absolute top-[969px] left-[106px] w-[327px] h-11" />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[407px] left-[1264px] w-10 h-12 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top] z-10"
        onClick={toggleShirtModel}
      />{showShirtModel && <ShirtModel onClose={onClose} />}
      
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
          setTop(410)
          setLeft(868)
          setWidth(210)
          setHeight(90)
          changeFaceImage(event.target.src);
        }}
      />
    </div>
  );
}
