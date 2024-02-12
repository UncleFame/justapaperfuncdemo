import React, { useState } from 'react';
import FRAMEmarketsquare from './FRAMEmarketsquare';

function HairChanger({ hairImageUrl, handleChangeImage }) {
  return (
    <img
      className="absolute top-[252px] left-[804px] w-[335px] h-[221px] object-cover z-50"
      src={hairImageUrl}
      alt="Displayed Hair Image"
      onClick={() => handleChangeImage('new_hair_image_url.png')}
    />
  );
}

function FaceChanger({ faceImageUrl, handleChangeImage }) {
  return (
    <img
      className="absolute top-[152px] left-[804px] w-[335px] h-[221px] object-cover z-50"
      src={faceImageUrl}
      alt="Displayed Face Image"
      onClick={() => handleChangeImage('new_face_image_url.png')}
    />
  );
}

const Homepage = ({ onClose }) => {
  // State variables to hold hair and face image URLs
  const [hairImageUrl, setHairImageUrl] = useState('/pink-hair-girls@2x.png');
  const [faceImageUrl, setFaceImageUrl] = useState('/default-face-image.png');

  // Function to change the hair image
  const changeHairImage = (newHairImage) => {
    console.log("Changing hair image to:", newHairImage);
    setHairImageUrl(newHairImage);
  };

  // Function to change the face image
  const changeFaceImage = (newFaceImage) => {
    setFaceImageUrl(newFaceImage);
  };

  return (
    <div className="relative bg-white w-[1965px] h-[1294px] max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
      <img
        className="absolute top-[277px] left-[1503px] w-[359px] h-[534px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow--8-removebgpreview-1@2x.png"
      />
      <FRAMEmarketsquare />
      <HairChanger hairImageUrl={hairImageUrl} handleChangeImage={changeHairImage} />
      <FaceChanger faceImageUrl={faceImageUrl} handleChangeImage={changeFaceImage} />
      
      
      <img
        className="absolute top-[29px] left-[1593px] w-72 h-[62px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-13-1@2x.png"
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
          className="absolute top-[61.1px] left-[108px] w-[212.2px] h-[170.4px] object-cover"
          alt=""
          src="/eye-1@2x.png"
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
      />
    <img
  className="absolute top-[352px] left-[1681px] w-[123px] h-[85px] object-cover"
  alt=""
  src="/hair-1@2x.png"
  onClick={(event) => changeHairImage(event.target.src)}
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
        className="absolute top-[284px] left-[128px] w-[269px] h-[399px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-11-1@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[784px] left-[106px] w-[327px] h-11 bg-[url('/public/copyofjustapaperpitch81@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[846px] left-[106px] w-[327px] h-[43px] bg-[url('/public/copyofjustapaperpitch141@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[907px] left-[106px] w-[327px] h-[45px] bg-[url('/public/copyofjustapaperpitch151@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[969px] left-[106px] w-[327px] h-11" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[732px] left-[106px] w-[327px] h-[43px] bg-[url('/public/copyofjustapaperpitch131@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <img
        className="absolute top-[444px] left-[158px] w-4 h-[26px] object-cover"
        alt=""
        src="/group-1@2x.png"
      />
      <img
        className="absolute top-[464px] left-[1545px] w-[120px] h-[68px] object-cover"
        alt=""
        src="/pink-hair-girls@2x.png"
      />
      <img
        className="absolute top-[342px] left-[177px] w-[177px] h-[263px] object-cover"
        alt=""
        src="/copy-of-justapaper--pitch-11-5@2x.png"
      />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[442px] left-[364px] w-[19px] h-[31px] [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copyofjustapaperpitch121@2x.png')] bg-cover bg-no-repeat bg-[top]" />
      <img
        className="absolute top-[452px] left-[1714px] w-[90px] h-[92px] object-cover"
        alt=""
        src="/bown-hair-girls@2x.png"
      />
      <img
        className="absolute top-[570px] left-[1552px] w-[90px] h-[61px] object-cover"
        alt=""
        src="/pink-men@2x.png"
      />
      <img
        className="absolute top-[566px] left-[1700px] w-[111px] h-[65px] object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-2-1@2x.png"
      />
      <img
        className="absolute top-[122px] left-[531px] w-[469px] h-32 object-cover"
        alt=""
        src="/copy-of-copy-of-able-booth-slideshow-3-1@2x.png"
      />
      <img
        className="absolute top-[659px] left-[1550px] w-[111px] h-[73px] object-cover"
        alt=""
        src="/blue-hair@2x.png"
      />
      <img
        className="absolute top-[663px] left-[1699px] w-28 h-[66px] object-cover"
        alt=""
        src="/hair-brown@2x.png"
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
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1764px] w-3 h-4 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1619px] w-[13px] h-4 [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top]" />
      <div className="absolute top-[787px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
        1
      </div>
    </div>
  );
};

export default Homepage;
