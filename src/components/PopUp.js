import { PopperUnstyled } from "@mui/base";
import React from "react";
import Image from "next/image";
import PopupImage from "../../public/PopupImage.svg";
import CancelButton from "../../public/CancelButton.svg";
import PopUpBlock from "../../public/PopUpBlock.svg";

function PopUp() {
  return (
    <main className="grid grid-col-1 py-8">
      <section className="flex justify-between mx-10 items-start">
        <Image src={PopUpBlock} alt="block" width="130px" height="130px" />
        <div className="pt-10">
        <Image src={PopupImage} alt="bootcamp" width="200px" height="200px" className="" />
        </div>
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
