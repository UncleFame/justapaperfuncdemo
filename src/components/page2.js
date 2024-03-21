import React, { useState } from "react";
import {GetTem} from "./step5";
import { useNavigate } from "react-router-dom";
function BaseChanger({ BaseImageUrl, handleChangeImage, positionBase }) {
  const { top, left, width, height } = positionBase;
  const BaseStyle = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <img
      className="absolute top-[390px] left-[860px] w-[190px] h-[80px] object-flex z-0"
      style={BaseStyle}
      src={BaseImageUrl}
      alt=""
      onClick={() => handleChangeImage('new_shirt_image_url.png')}
    />
  );
}




export function BaseModel({ onClose }) {
  const navigate = useNavigate();


  const [showShirtModel, setShowShirtModel] = useState(false); 
  const [showBase, setShowBase] = useState(false); 
  const [showPage, setShowPage] = useState(false);
  const [showTem, setShowTem] = useState(false);
  const toggleShirtModel = () => {
    setShowShirtModel(!showShirtModel);
    setShowBase(false); 
    setShowPage(false); 
  };

  const toggleBaseModel = () => {
    setShowBase(!showBase);
    setShowShirtModel(false); 
    setShowPage(false); 
  };
  const toggleTem = () => {
    setShowTem(!showTem); // Corrected typo here
    setShowBase(false);
    setShowPage(false);
  };
  
  
  
  const togglePage = () => {
    setShowPage(!showPage);
    setShowShirtModel(false); 
    setShowBase(false); 
  };

  const [top, setTop] = useState(690);
  const [left, setLeft] = useState(730);
  const [width, setWidth] = useState(480);
  const [height, setHeight] = useState(60);

  const [BaseImageUrl, setBaseImageUrl] = useState('/nobg.png');

  const changeBaseImage = (newBaseImage) => {
    setBaseImageUrl(newBaseImage);
  };

  const positionBase = {
    top,
    left,
    width,
    height,
  };


    
  return (
        <div className="w-[1965px] h-[1294px] bg-white max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
          
          <BaseChanger
        BaseImageUrl={BaseImageUrl}
        handleChangeImage={changeBaseImage}
        positionBase={positionBase}
      />
          <img
            className="absolute top-[277px] left-[1503px] w-[359px] h-[534px] object-cover z-30"
            alt=""
            src="/copy-of-copy-of-able-booth-slideshow--8-removebgpreview-1@2x.png"
          />
          <img
            className="absolute top-[295px] left-[1524px] w-[318.2px] h-[502px] object-flex z-30"
            alt=""
            onClick={BaseChanger}

            src="/copy-of-justapaper--pitch-11-2@2x.png"
          />
          <img
            className="absolute top-[369px] left-[1545px] w-[97px] h-[63px] object-cover z-30"
            alt=""
            src="/remove@2x.png"
           
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage("/base1@2x.png");
            }}
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1764px] w-3 h-4 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1619px] w-[13px] h-4 [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <div className="absolute top-[787px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
            1
          </div>
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
      <img
        className="absolute top-[384px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step2Box.png"
          onClick={togglePage}
      />
      
      <img
        className="absolute top-[464px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step3Box.png"

      />

<img
        className="absolute top-[524px] cursor-pointer  left-[128px] w-[269px] h-[390px] object-fix"
        alt=""
        src="Step4Guide.png"
      />
<img
        className="absolute top-[954px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step5Box.png"
        onClick={toggleTem}/>{showTem && <GetTem onClose={onClose} 
      />}
    
          <img
            className="absolute top-[506px] left-[1706px] w-32 h-[38px] object-cover z-30"
            alt=""
            src="/base3@2x.png"
            
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}/>
          <img
            className="absolute top-[610px] left-[1532px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base4@2x.png"
          
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}/>
          <img
            className="absolute top-[502px] left-[1524px] w-[122px] h-[38px] object-cover z-30"
            alt=""
            src="/base2@2x.png"
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}
          />
          <img
            className="absolute top-[610px] left-[1706px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base5@2x.png"
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}
          />
          <img
            className="absolute top-[381px] left-[1692px] w-[122px] h-[38px] object-cover z-30"
            alt=""
            src="/base1@2x.png"
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}
          />
          <img
            className="absolute top-[697px] left-[1532px] w-[123px] h-[41px] object-cover z-30"
            alt=""
            src="/base6.png"
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(448)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}
          />
            
         
          <img
            className="absolute cursor-pointer top-[718px] left-[1692px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base7@2x.png"
            onClick={(event) => {
              setTop(690)
              setLeft(730)
              setWidth(478)
              setHeight(60)
              changeBaseImage(event.target.src);
            }}
          />
        </div>
      );    
    };