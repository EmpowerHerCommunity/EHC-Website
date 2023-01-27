import { PopperUnstyled } from "@mui/base";
import React from "react";
import Image from "next/image";
import PopupImage from "../../public/PopupImage.svg";
import CancelButton from "../../public/CancelButton.svg";
import PopUpBlock from "../../public/PopUpBlock.svg";
import LineTen from '../../public/Line 10.svg';
import LineEight from '../../public/Line 8.svg';
import LineNine from '../../public/Line 9.svg';
import LineNineB from '../../public/Line 9 (1).svg'



function PopUp() {
  return (
    <main className="grid grid-col-1 py-8">
      <section className="flex justify-between mx-10 items-start">
        <Image src={PopUpBlock} alt="block" width="130px" height="130px" />

        <section className="pt-10 flex flex-col justify-center items-center relative">
        <figure className="display flex justify-between w-80 absolute bottom-48">
          <Image src ={LineTen} alt ='border icon' width="80px" height='80px'/>
          <Image src ={LineEight} alt ='border icon' width="80px" height='72px'/>
        </figure>
        <Image src={PopupImage} alt="bootcamp" width="250px" height="250px" />
        <figure className="display flex justify-between w-80 absolute top-56">
          <Image src ={LineNineB} alt ='border icon' width="80px" height='8px'/>
          <Image src ={LineNine} alt ='border icon' width="80px" height='80px'/>
        </figure>
        </section>

        <Image src={CancelButton} alt="block" width="45px" height="45px" />
      </section>
      <section className="grid place-items-center">
        <figcaption className="py-12 text-center">
          <h2 className="text-4xl text-popUpColor font-semibold">
            Empower a Lady in Tech
          </h2>
          <p className="text-xl w-widthPopUp font-semi-bold pt-4 ">
            You can be a part of our initiative to help over 50,000 women
            kickstart their tech career with as little as $10.
          </p>
        </figcaption>
        <button className="w-widthPopUpBtn h-16 text-primary font-semibold text-lg border-primary border-2">
          Donate Now
        </button>
      </section>
    </main>
  );
}

export default PopUp;
