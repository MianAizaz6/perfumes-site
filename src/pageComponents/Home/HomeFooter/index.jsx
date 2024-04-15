import { footerCol1 } from "../../../../static-img-urls"
import Button from "../../../components/Button"

const HomeFooter = () => {
    return (
        <div className=" bg-[#FFFFFF] flex md:flex-row flex-col py-[90px] relative overflow-hidden">
            <div className="flex items-end relative justify-center  overflow-hidden">
                <div className="z-20 p-[60px] flex flex-col gap-[20px] relative bottom-10">
                    <h2 className="md:text-[54px] text-[45px] leading-[70px] font-bold text-white">OUR MISSION</h2>
                    <p className="text-[16px] leading-[20px] text-white capitalize">example text for this sections paragraph text but longer</p>
                    <Button btnText={"About Us"} />
                </div>
                <img className="absolute bottom-10 " src={footerCol1} alt="" />
            </div>
            <div className="md:w-[70%] flex md:flex-row flex-col md:px-0 px-[15px] gap-[10px] z-10 overflow-x-scroll">
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

                
            </div>
            <div className="bg-[#00000099] absolute inset-0" />

        </div>
    )
}

export default HomeFooter