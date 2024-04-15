import { footerCol1 } from "../../../../static-img-urls"
import Button from "../../../components/Button";
import { leftArrow, rightArrow } from "../../../../static-img-urls";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const HomeFooter = () => {

    const splideOptions = {
        type: 'loop',
        perPage: 2,
        perMove: 1,
        rewind: true,
        autoplay: true,
        gap: '1rem',
        autoHeight: false,
        pagination: false,
        breakpoints: {
            640: {
                perPage: 1,
            },
        },
    }

    return (
        <div className="md:min-h-fit min-h-[800px] flex md:flex-row flex-col md:py-[90px] py-[15px] relative overflow-hidden">
            <div className="flex items-start md:items-end relative justify-center  overflow-hidden md:h-[500px] h-[800px]">
                <div className="z-20 p-[60px] flex flex-col gap-[20px] relative bottom-10">
                    <h2 className="md:text-[54px] text-[25px] leading-[70px] md:font-bold text-white">OUR MISSION</h2>
                    <p className="text-[16px] leading-[20px] text-white capitalize">example text for this sections paragraph text but longer</p>
                    <Button btnText={"About Us"} />
                </div>
                <img className="absolute bottom-10 " src={footerCol1} alt="" />
            </div>

            <div className="md:w-[70%]">
                <div className="md:relative md:top-0 absolute top-[120px] md:left-0 left-[25px] w-[90%] mx-auto z-30">
                    <Splide options={splideOptions} hasTrack={false}>
                        <div className="splide__arrows absolute left-[30px] -bottom-[30px]">
                            <button className="splide__arrow splide__arrow--prev">
                                <img className="w-[12px] h-[12px]" src={rightArrow} alt="" />
                            </button>
                            <button className="splide__arrow splide__arrow--next">
                                <img className="w-[12px] h-[12px]" src={leftArrow} alt="" />
                            </button>
                        </div>
                        <SplideTrack>
                            <SplideSlide>
                                <div className="h-[600px] md:h-[500px] p-[60px] bg-[#101010] rounded-[9px] flex flex-col gap-[20px] justify-end md:w-full">
                                    <p className="gradient-text text-[15px] leading-[20px]">The Best of 401</p>
                                    <h3 className="text-[35px] leading-[48px] font-bold">It’s Better as a Member</h3>
                                    <Button btnText={"Shop Here"} dark={true} />
                                </div>
                            </SplideSlide>

                            <SplideSlide>
                                <div className="h-[600px] md:h-[500px]  p-[60px] bg-[#101010] rounded-[9px] flex flex-col gap-[20px] justify-end md:w-full">
                                    <p className="gradient-text text-[15px] leading-[20px]">Member Product</p>
                                    <h3 className="text-[35px] leading-[48px] font-bold">Your Exclusive Access</h3>
                                    <Button btnText={"Sign Up"} dark={true} />
                                </div>
                            </SplideSlide>
                        </SplideTrack>
                    </Splide>
                </div>
            </div>

            {/* <div className="md:w-[70%] flex md:flex-row flex-col md:px-0 px-[15px] gap-[10px] z-10 overflow-x-scroll">
                <div className="h-[600px] p-[60px] bg-[#101010] rounded-[9px] flex flex-col gap-[20px] justify-end md:w-[50%]">
                    <p className="gradient-text text-[15px] leading-[20px]">The Best of 401</p>
                    <h3 className="text-[35px] leading-[48px] font-bold">It’s Better as a Member</h3>
                    <Button btnText={"Shop Here"} dark={true} />
                </div>
                <div className="h-[600px] p-[60px] bg-[#101010] rounded-[9px] flex flex-col gap-[20px] justify-end md:w-[50%]">
                    <p className="gradient-text text-[15px] leading-[20px]">Member Product</p>
                    <h3 className="text-[35px] leading-[48px] font-bold">Your Exclusive Access</h3>
                    <Button btnText={"Sign Up"} dark={true} />
                </div>
            </div> */}
            <div className="bg-[#00000099] absolute inset-0" />

        </div>
    )
}

export default HomeFooter