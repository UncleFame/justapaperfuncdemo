import React, { useState } from "react";


function BaseChanger(  BaseImageUrl, handleChangeImage,positionBase ) {
    
    const {top , left ,width , height} = positionBase
    const BaseStyle = {

        top: `${top}px`,
        left: `${left}px`,
        width: `${width}px`,
        height: `${height}px`,



    }
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
  <BaseChanger/>
    



    
  return (
        <div className="w-[1965px] h-[1294px] bg-white max-w-full max-h-full overflow-auto text-center text-xs text-black font-inter">
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
            onClick={BaseChanger}
            
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1764px] w-3 h-4 bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-1@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[787px] left-[1619px] w-[13px] h-4 [transform:_rotate(180deg)] [transform-origin:0_0] bg-[url('/public/copy-of-copy-of-able-booth-slideshow-7-2@3x.png')] bg-cover bg-no-repeat bg-[top]" />
          <div className="absolute top-[787px] left-[1682px] leading-[15px] inline-block w-[19px] h-5 [text-shadow:1px_0_0_rgba(0,_0,_0,_0.2),_0_1px_0_rgba(0,_0,_0,_0.2),_-1px_0_0_rgba(0,_0,_0,_0.2),_0_-1px_0_rgba(0,_0,_0,_0.2)]">
            1
          </div>
          <img
            className="absolute top-[232px] left-[57px] w-[420px] h-[800px] object-flex z-30"
            alt=""
            src="/copy-of-copy-of-able-booth-slideshow-40-1@2x.png"
          />
          <img
            className="absolute top-[506px] left-[1706px] w-32 h-[38px] object-cover z-30"
            alt=""
            src="/base3@2x.png"
            
          />
          <img
            className="absolute top-[610px] left-[1532px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base4@2x.png"
          />
          <img
            className="absolute top-[502px] left-[1524px] w-[122px] h-[38px] object-cover z-30"
            alt=""
            src="/base2@2x.png"
          />
          <img
            className="absolute top-[610px] left-[1706px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base5@2x.png"
          />
          <img
            className="absolute top-[381px] left-[1692px] w-[122px] h-[38px] object-cover z-30"
            alt=""
            src="/base1@2x.png"
          />
          <img
            className="absolute top-[697px] left-[1532px] w-[123px] h-[41px] object-cover z-30"
            alt=""
            src="/base6.png"
          />
          <img
            className="absolute top-[718px] left-[1692px] w-[123px] h-[38px] object-cover z-30"
            alt=""
            src="/base7@2x.png"
          />
        </div>
      );    
    };