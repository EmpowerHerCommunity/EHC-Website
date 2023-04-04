import { PopperUnstyled } from "@mui/base";
import React from "react";
import Image from "next/image";
import PopupImage from "../../public/popup/PopupImage.svg";
import PopUpBlock from "../../public/popup/PopUpBlock.svg";
import LineTen from '../../public/popup/Line 10.svg';
import LineEight from '../../public/popup/Line 8.svg';
import LineNine from '../../public/popup/Line 9.svg';
import LineNineB from '../../public/popup/Line 9 (1).svg'

function PopUp({ closePopup }) {
  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 p-2 flex items-center justify-center z-50 bg-black/25">
      <div className="grid grid-col-1 py-5 lg:px-4 px-4 xl:w-4/12 w-full bg-white rounded-md">
        {/* <section className="flex justify-center mx-10 items-start mt-8 relative">
          <figure className="md:block hidden absolute top-0 left-0">
            <Image src={PopUpBlock} alt="block" width={100} height={100} objectFit="cover" className="lg:block hidden" />
          </figure>

          <div className=" flex flex-col justify-center items-center relative lg:pt-0 pt-10">
            <figure className="display flex justify-between w-80 absolute bottom-36">
              <Image src={LineTen} alt='border icon' width="80px" height='80px' />
              <Image src={LineEight} alt='border icon' width="80px" height='72px' />
            </figure>
            <Image src={PopupImage} alt="bootcamp" width="200px" height="200px" />
            <figure className="display flex justify-between w-80 absolute lg:top-40 top-48 ">
              <Image src={LineNineB} alt='border icon' width="80px" height='8px' />
              <Image src={LineNine} alt='border icon' width="80px" height='80px' />
            </figure>
          </div>
          <button className="cursor-pointer absolute top-0 right-0" onClick={() => closePopup()}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2643_686)">
                <path d="M15.9998 31.2382C24.4156 31.2382 31.2379 24.4158 31.2379 16.0001C31.2379 7.58429 24.4156 0.761963 15.9998 0.761963C7.58405 0.761963 0.761719 7.58429 0.761719 16.0001C0.761719 24.4158 7.58405 31.2382 15.9998 31.2382Z" fill="#DDDDDD" />
                <path d="M20.5716 20.5713L11.4287 11.4285L20.5716 20.5713ZM20.5716 11.4285L11.4287 20.5713L20.5716 11.4285Z" fill="white" />
                <path d="M20.5716 20.5713L11.4287 11.4285M20.5716 11.4285L11.4287 20.5713" stroke="#999999" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_2643_686">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </section> */}

        <section className="flex justify-center flex-col">
        <button className="cursor-pointer flex justify-end mr-2" onClick={() => closePopup()}>
            <svg width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_2643_686)">
                <path d="M15.9998 31.2382C24.4156 31.2382 31.2379 24.4158 31.2379 16.0001C31.2379 7.58429 24.4156 0.761963 15.9998 0.761963C7.58405 0.761963 0.761719 7.58429 0.761719 16.0001C0.761719 24.4158 7.58405 31.2382 15.9998 31.2382Z" fill="#DDDDDD" />
                <path d="M20.5716 20.5713L11.4287 11.4285L20.5716 20.5713ZM20.5716 11.4285L11.4287 20.5713L20.5716 11.4285Z" fill="white" />
                <path d="M20.5716 20.5713L11.4287 11.4285M20.5716 11.4285L11.4287 20.5713" stroke="#999999" stroke-width="2" stroke-linecap="round" />
              </g>
              <defs>
                <clipPath id="clip0_2643_686">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <div className=" text-center lg:w-12/12 w-12/12 py-2">
            <h2 className="text-3xl text-popUpColor font-semibold">
              Empower a Lady in Tech
            </h2>
            <p className=" text-lg lg:text-lg text-center font-semi-bold pt-4">
              You can be a part of our initiative to help over 50,000 women
              kickstart their career in technology.
            </p>
          </div>
          <button className="pt-7 pb-4">
          <a href="https://paystack.com/pay/empowerhercommunity" target="_blank" rel="noopener noreferrer" className="w-96 px-5 py-4 text-primary rounded-md hover:bg-primary hover:text-white font-semibold text-lg text-center border-primary border-2 c-pointer">
            Donate Now
          </a>
          </button>
       
        </section>
      </div>
    </div>
  );
}

export default PopUp;
