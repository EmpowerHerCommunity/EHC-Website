import { PopperUnstyled } from "@mui/base";
import React from "react";
import Image from "next/image";
import PopupImage from "../../public/popup/PopupImage.svg";
import CancelButton from "../../public/popup/CancelButton.svg";
import PopUpBlock from "../../public/popup/PopUpBlock.svg";
import LineTen from '../../public/popup/Line 10.svg';
import LineEight from '../../public/popup/Line 8.svg';
import LineNine from '../../public/popup/Line 9.svg';
import LineNineB from '../../public/popup/Line 9 (1).svg'

function PopUp() {
  return (
    <main className="grid grid-col-1 lg:py-8 py-0 pb-6">
      <section className="lg:flex lg:justify-between mx-10 items-start mt-8 ">
        <figure className="lg:block hidden">
        <Image src={PopUpBlock} alt="block" width={100} height={100} objectFit="cover"  className="lg:block hidden"/>
        </figure>
        
        <section className=" flex flex-col justify-center items-center relative lg:pt-0 pt-10">
        <figure className="display flex justify-between w-80 absolute bottom-36">
          <Image src ={LineTen} alt ='border icon' width="80px" height='80px'/>
          <Image src ={LineEight} alt ='border icon' width="80px" height='72px'/>
        </figure>
        <Image src={PopupImage} alt="bootcamp" width="200px" height="200px" />
        <figure className="display flex justify-between w-80 absolute lg:top-40 top-48 ">
          <Image src ={LineNineB} alt ='border icon' width="80px" height='8px'/>
          <Image src ={LineNine} alt ='border icon' width="80px" height='80px'/>
        </figure>
        </section>

        <figure className="lg:block hidden">
        <Image src={CancelButton} alt="block" width="40px" height="40px" className="" />
        </figure>

      </section>

      <section className="grid place-items-center">
        <figcaption className="py-10 text-center lg:w-6/12 w-10/12 mt-10">
          <h2 className="text-4xl text-popUpColor font-semibold">
            Empower a Lady in Tech
          </h2>
          <p className=" text-base lg:text-xl text-center font-semi-bold pt-4">
            You can be a part of our initiative to help over 50,000 women
            kickstart their tech career with as little as $10.
          </p>
        </figcaption>
        <button className="w-6/12 h-16 text-primary font-semibold text-lg border-primary border-2">
          Donate Now
        </button>
      </section>
    </main>
  );
}

export default PopUp;
