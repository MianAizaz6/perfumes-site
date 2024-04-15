import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { facebookIcon, instaIcon, linkedInIcon, rightArrow, twitterIcon } from "../../../static-img-urls";

const MobileFooter = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="p-[20px] flex flex-col gap-[30px]">
      <Accordion open={open === 1}>
        <div className="flex justify-between">
          <AccordionHeader onClick={() => handleOpen(1)} className="text-white border-none">Featured</AccordionHeader>
          <img src={rightArrow} alt="" className="rotate-90 " />
        </div>
        <AccordionBody>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">City Scent</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Tropical Rain</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Summer Heat</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">City Summer</p>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 2}>
        <div className="flex justify-between">
          <AccordionHeader onClick={() => handleOpen(2)} className="text-white border-none">Perfume</AccordionHeader>
          <img src={rightArrow} alt="" className="rotate-90 " />
        </div>
        <AccordionBody>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 3}>
        <div className="flex justify-between">
          <AccordionHeader onClick={() => handleOpen(3)} className="text-white border-none">Cologne</AccordionHeader>
          <img src={rightArrow} alt="" className="rotate-90 " />
        </div>
        <AccordionBody>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
          </div>
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <div className="flex justify-between">
          <AccordionHeader onClick={() => handleOpen(4)} className="text-white border-none">Sale</AccordionHeader>
          <img src={rightArrow} alt="" className="rotate-90 " />
        </div>
        <AccordionBody>
          <div className="flex flex-col gap-[10px] mt-[20px]">
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 1</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 2</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 3</p>
            <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Product 4</p>
          </div>
        </AccordionBody>
      </Accordion>

      <div className="flex flex-wrap md:gap-[60px] mx-auto gap-[20px]">
        <div className="flex md:flex-col gap-[20px] flex-wrap">
          <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">GIFT CARDS</h3>
          <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">BECOME A MEMBER</h3>
          <h3 className="text-[18px] font-bold leading-[24px] capitalize text-white">SEND US FEEDBACK</h3>
        </div>

        <Accordion open={open === 5}>
          <div className="flex justify-between">
            <AccordionHeader onClick={() => handleOpen(5)} className="text-white border-none">GET HELP</AccordionHeader>
            <img src={rightArrow} alt="" className="rotate-90 " />
          </div>
          <AccordionBody>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Order Status</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Shipping and Delivery</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Returns</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Order Cancellation</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Payment Options</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Gift Card Balance</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Contact Us</p>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 6}>
          <div className="flex justify-between">
            <AccordionHeader onClick={() => handleOpen(6)} className="text-white border-none">ABOUT NEBU</AccordionHeader>
            <img src={rightArrow} alt="" className="rotate-90 " />
          </div>
          <AccordionBody>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">News</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Careers</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Investors</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Purpose</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Sustainability</p>
            </div>
          </AccordionBody>
        </Accordion>

        <Accordion open={open === 7}>
          <div className="flex justify-between">
            <AccordionHeader onClick={() => handleOpen(7)} className="text-white border-none">PROMOTIONS & DISCOUNTS</AccordionHeader>
            <img src={rightArrow} alt="" className="rotate-90 " />
          </div>
          <AccordionBody>
            <div className="flex flex-col gap-[10px] mt-[20px]">
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Student</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Military</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Teacher</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">First Responders & Medical Professionals</p>
              <p className="text-[#777777] text-[18px] leading-[24px] font-medium">Birthday</p>
            </div>
          </AccordionBody>
        </Accordion>

        <div className="flex md:gap-[15px] gap-[30px]">
          <img src={facebookIcon} className="w-[40px] h-[40px]" />
          <img src={twitterIcon} className="w-[40px] h-[40px]" />
          <img src={linkedInIcon} className="w-[40px] h-[40px]" />
          <img src={instaIcon} className="w-[40px] h-[40px]" />
        </div>

        <div className="flex flex-wrap justify-end md:gap-[40px] gap-[10px]">
          <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Guides</p>
          <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Terms of Sale</p>
          <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Terms of Use</p>
          <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Privacy Policy</p>
          <p className="text-[#777777] text-[12px] leading-[18px] font-medium">Your Privacy Choices</p>
        </div>
      </div>

    </div>
  );
}

export default MobileFooter;
