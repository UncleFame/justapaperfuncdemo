import React, { useState } from 'react';
import { BaseModel } from './page2';

function ShirtChanger({ shirtImageUrl, handleChangeImage, positionShirt }) {
  
  
  const { top, left, width, height } = positionShirt;
  const shirtStyle = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  };
  return (
    <img
      className="absolute top-[390px] left-[860px] w-[190px] h-[80px] object-flex z-0"
      style={shirtStyle}
      src={shirtImageUrl}
      alt=""
      onClick={() => handleChangeImage('new_shirt_image_url.png')}
    />
  );
}

export function ShirtModel({ onClose }) {
  
  const [showShirtModel, setShowShirtModel] = useState(false); 
  const [showBase, setShowBase] = useState(false); 
  const [showPage, setShowPage] = useState(false);


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

  const togglePage = () => {
    setShowPage(!showPage);
    setShowShirtModel(false); 
    setShowBase(false); 
  };
  


  const [top, setTop] = useState(545);
  const [left, setLeft] = useState(880);
  const [width, setWidth] = useState(170);
  const [height, setHeight] = useState(150);

  // State variable to hold the shirt image URL
  const [ shirtImageUrl, setShirtImageUrl] = useState('/shirt1@2x.png');

  // Function to change the shirt image
  const changeShirtImage = (newShirtImage) => {
    setShirtImageUrl(newShirtImage);
  };

  // Position of the shirt
  const positionShirt = {
    top,
    left,
    width,
    height,
  };

  return (
    <div className="bg-white w-[1965px] h-[1294px] max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
      <ShirtChanger
        shirtImageUrl={shirtImageUrl}
        handleChangeImage={changeShirtImage}
        positionShirt={positionShirt}
      />
      

      <img
        className="absolute top-[277px] left-[1503px] w-[318.2ppx] h-[534px] object-flex"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow--8-removebgpreview-1@2x.png"
      />
      
      <img
        className="absolute top-[295px] left-[1523px] w-[318.2px] h-[502px] object-flex z-10"
        alt=""
        src="/copy-of-justapaper--pitch-11-2@2x.png"
      />
      <img
        className="absolute top-[369px] left-[1545px] w-[97px] h-[63px] object-cover z-10"
        alt=""
        src="/remove@2x.png"
        onClick={(event) => {
          setTop(420)
          setLeft(860)
          setWidth(2)
          setHeight(90)
          changeShirtImage("/nobg.png");
        }}
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
      <img
        className="absolute top-[384px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step2Box.png"
        onClick={togglePage}
      />
      
      <img
        className="absolute top-[464px] cursor-pointer  left-[128px] w-[269px] h-[370px] object-fix"
        alt=""
        src="Step3Guide.png"
      />
      <img
        className="absolute top-[884px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step4Box.png"
        onClick={toggleBaseModel}/>{showBase && <BaseModel onClose={onClose} 
      />}
      <img
        className="absolute top-[884px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step4Box.png"
        onClick={toggleBaseModel}/>{showBase && <BaseModel onClose={onClose} 
      />}
            <img
        className="absolute top-[954px] cursor-pointer  left-[128px] w-[269px] h-[39px] object-fix"
        alt=""
        src="Step5Box.png"
      />
     
     
      <button 
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[407px] left-[1264px] w-10 h-12 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top] z-10"   />
      
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1619px] w-[13px] h-4 [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[800px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
        3
      </div>
      <img
        className="absolute top-[676px] left-[1701px] w-[95px] h-[81px] object-cover z-10"
        alt=""
        src="/shirt7@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
        
      />
      <img
        className="absolute top-[483px] left-[1550px] w-[87px] h-[77px] object-cover z-10"
        alt=""
        src="/shirt2@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
      />
      
      <img
        className="absolute top-[483px] left-[1701px] w-[87px] h-[78px] object-cover z-10"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-12-2@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
        
      />
      <img
        className="absolute top-[574px] left-[1701px] w-[86px] h-[77px] object-cover z-10"
        alt=""
        src="/shirt5@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[580px] left-[1551px] w-[87px] h-[76px] object-cover z-10"
        alt=""
        src="/shirt4@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[362px] left-[1701px] w-[86px] h-[77px] object-cover z-10"
        alt=""
        src="/shirt1@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[676px] left-[1551px] w-[86px] h-[77px] object-cover z-10"
        alt=""
        src="/shirt6@2x.png"
        onClick={(event) => {
          setTop(545);
          setLeft(880);
          setWidth(170);
          setHeight(150);
          changeShirtImage(event.target.src);
        }}
      />
     
    </div>
  );
}
