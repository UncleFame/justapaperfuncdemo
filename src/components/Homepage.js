import React, { useState } from 'react';
import FRAMEmarketsquare from './FRAMEmarketsquare';
import { Page} from './Page';
import { BaseModel } from './page2';
import { ShirtModel } from './Page1';
 
function HairChanger({ hairImageUrl, handleChangeImage, position }) {

  const { top, left,width,height } = position;
  
  const imageStyle = {
    top: `${top}px`,
    left: `${left}px`,
    width: `${width}px`,
    height: `${height}px`,
  };
   const toggleShirtModel = () => {
    setShowShirtModel(!showShirtModel);
  };

  const changeHairImage = (newHairImage, position) => {
    console.log("Changing hair image to:", newHairImage);
    setHairImageUrl(newHairImage);
    // You can also set the position here if needed
  };

  return (
    <img
      className="absolute w-[365px] h-[221px] object-flex z-50"
      style={imageStyle} 
      src={hairImageUrl}
      alt="Displayed Hair Image"
      onClick={() => handleChangeImage('new_hair_image_url.png', position)}
    />
  );
}


export const Homepage = ({ onClose }) => {
  const [showPage, setShowPage] = useState(false);
  
  const [showBase, setShowBase] = useState(false);  
  
  const toggleBaseModel = () => {
    setShowBase(prev => !prev);
  };
  const togglePage = () => {
    setShowPage(!showPage);

  };


  // State variables to hold hair and face image URLs
  const [hairImageUrl, setHairImageUrl] = useState('/pink-hair-girls@2x.png');

  // Function to change the hair image
  const changeHairImage = (newHairImage, position) => {
    console.log("Changing hair image to:", newHairImage);
    setHairImageUrl(newHairImage);
    // You can also set the position here if needed
  };
  const [top, setTop] = useState(225);
  const [left,setLeft] = useState(770)
  const [width, setWidth] = useState(390);
  const [height,setHeight] = useState(190)
  

  return (
    <div className="relative bg-white w-[1965px] h-[1294px] max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
      <img
        className="absolute top-[277px] left-[1503px] w-[359px] h-[534px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow--8-removebgpreview-1@2x.png"
      />
      <FRAMEmarketsquare />
      <HairChanger
  hairImageUrl={hairImageUrl}
  handleChangeImage={changeHairImage}
  position={{ top: top, left: left, width: width , height: height }} // Updated to include width
/>

      <div className='absolute top-[29px] left-[1603px] '>
        <h2></h2>
      </div>
      
      <img
        className="absolute top-[29px] left-[1703px] w-42 h-[62px] object-flex "
        alt=""
        src="profile icon.png"
      />
      <div className="absolute top-[308px] left-[740px] w-[448px] h-[447px]">
        <img
          className="absolute top-[169.4px] left-[98.5px] w-[257.6px] h-[177.9px] object-cover"
          alt=""
          src="/imageremovebgpreview-12-1@2x.png"
        />
        <img
          className="absolute top-[0px] left-[76.7px] w-[301.2px] h-[258.3px] object-cover"
          alt=""
          src="/face-1@2x.png"
        />
        
        <img
          className="absolute top-[370.9px] left-[0px] w-[448px] h-[76.1px] object-cover"
          alt=""
          src="/base-1@2x.png"
        />
        <img
          className="absolute top-[212.2px] left-[137.3px] w-[173.3px] h-[189.7px] object-cover"
          alt=""
          src="/shirt-pafe-1@2x.png"
        />
      </div>
      <img
        className="absolute top-[308px] left-[1522px] w-[318.2px] h-[472px] object-cover"
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
          setWidth(2)
          setHeight(90)
          changeHairImage("/nobg.png");
        }}
        
      />
    <img
  className="absolute top-[352px] left-[1681px] w-[123px] h-[85px] object-flex"
  alt=""
  src="/hair-1@2x.png"
  onClick={(event) => {
    setTop(255)
    setLeft(820)
    setWidth(290)
    setHeight(210)

    changeHairImage(event.target.src);
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
     
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[784px] left-[106px] w-[327px] h-11 bg-[url('/public/copyofjustapaperpitch81@2x.png')] bg-cover bg-no-repeat bg-[top]" 
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
      <div className="absolute top-[969px] left-[106px] w-[327px] h-11" />
   
       
      <img
        className="absolute top-[444px] left-[158px] w-4 h-[26px] object-cover"
        alt=""
        src="/group-1@2x.png"
      />
      <img
        className="absolute top-[464px] left-[1545px] w-[120px] h-[68px] object-cover"
        alt=""
        src="/pink-hair-girls@2x.png"
        onClick={(event) => {
          setTop(225)
          setLeft(770)
          setWidth(390)
          setHeight(210)
      
          changeHairImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[342px] left-[177px] w-[177px] h-[263px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-11-5@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[442px] left-[364px] w-[19px] h-[31px] [transform-origin:0_0] bg-[url('/public/copyofjustapaperpitch121@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <img
        className="absolute top-[452px] left-[1714px] w-[90px] h-[92px] object-cover"
        alt=""
        src="BROWNGIRLS.png"
        onClick={(event) => {
    setTop(185)
    setLeft(600)
    setWidth(700)
    setHeight(340)
    changeHairImage(event.target.src);
  }}
  />
      <img
        className="absolute top-[570px] left-[1552px] w-[90px] h-[61px] object-cover"
        alt=""
        src="Pink.png"
        onClick={(event) => {
          setTop(255)
          setLeft(770)
          setWidth(390)
          setHeight(240)
          changeHairImage(event.target.src);
        }}
        
        
      />
      <img
        className="absolute top-[566px] left-[1700px] w-[111px] h-[65px] object-cover"
        alt=""
        src="Gold.png"
        onClick={(event) => {
          setTop(255)
          setLeft(740)
          setWidth(480)
          setHeight(240)
          changeHairImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[122px] left-[531px] w-[469px] h-32 object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-3-1@2x.png"
      />
      <img
        className="absolute top-[659px] left-[1550px] w-[111px] h-[73px] object-cover"
        alt=""
        src="/Blue.png"
        onClick={(event) => {
          setTop(225)
          setLeft(790)
          setWidth(350)
          setHeight(240)
          changeHairImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[663px] left-[1699px] w-28 h-[66px] object-cover"
        alt=""
        src="BROWNHAIR.png"
        onClick={(event) => {
          setTop(215)
          setLeft(780)
          setWidth(370)
          setHeight(240)
          changeHairImage(event.target.src);
        }}
      />
      <img
        className="absolute top-[839px] left-[1479px] w-[407px] h-[75px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-6-1@2x.png"
      />
      <img
        className="absolute top-[1024px] left-[1277px] w-[585px] h-[198px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-9-1@2x.png"
      />
      <img
        className="absolute top-[812px] left-[538px] w-[832px] h-[157px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-10-1@2x.png"
      />
      <img
        className="absolute top-[1104px] left-[423px] w-[381px] h-[70px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-11-1@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[407px] left-[1264px] w-10 h-12 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top] object-flex"
        
      />
      {showPage && <Page onClose={onClose} />}
      
      <button
      
      className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[407px] left-[719px] w-10 h-12 transform   [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top] object-flex" />
      <div className="absolute top-[787px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
        1
      </div>
    </div>
  );
};

export default Homepage;
