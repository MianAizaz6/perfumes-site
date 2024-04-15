import { latestTrendBg } from "../../../../static-img-urls"
import Button from "../../../components/Button"
import RibbonText from "../../../components/RibbonText"

const LatestTrends = () => {
  return (
    <div className="relative h-[70vh] overflow-hidden flex md:px-[60px] px-[30px] items-center">
      <div className="flex flex-col gap-[20px] z-10 relative">
        <h2 className="md:text-[45px] md:leading-[60px] text-[35px] leading-[40px] font-bold text-white">Indulge in the allure of luxury</h2>
        <p className="text-[16px] leading-[20px] text-white capitalize">example text for this sections paragraph text but longer for vsual.  example text for this sections paragraph text but longer for vsual</p>
        <div className="flex gap-[10px] mt-3">
          <Button btnText={"Shop Perfume"} />
          <Button btnText={"Shop Cologne"} dark={true} />
        </div>
      </div>
      <img className="absolute inset-0 h-[70vh] w-full object-cover" src={latestTrendBg} alt="" />
      <div className="absolute bottom-[30px] left-0 z-10 textScrollToLeft  w-[800%] md:w-[200%]">
        <RibbonText />
      </div>
    </div>
  )
}

export default LatestTrends