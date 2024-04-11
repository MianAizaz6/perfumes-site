import { collectionData } from "../../../../static-data"
import { leftArrow, rightArrow } from "../../../../static-img-urls";
import CollectionCard from "./collection-card"
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const ShopByCollection = () => {

  const splideOptions = {
    type: 'loop',
    perPage: 3,
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
    <div className="md:px-[60px] px-[30px] flex flex-col gap-[25px] relative">
      <div>
        <h3 className="text-[28px] leading-[38px] font-normal">Shop by collection</h3>
      </div>
      <Splide options={splideOptions} hasTrack={false}>
        <div className="splide__arrows absolute right-[60px] -top-[45px]">
          <button className="splide__arrow splide__arrow--prev">
            <img className="w-[12px] h-[12px]" src={rightArrow} alt="" />
          </button>
          <button className="splide__arrow splide__arrow--next">
            <img className="w-[12px] h-[12px]" src={leftArrow} alt="" />
          </button>
        </div>
        <SplideTrack>
          {
            collectionData.map((item, index) => {
              return (
                <SplideSlide key={`${item.heading}${index}`}>
                  {/* <div className="md:mr-[16px] md:w-[320px] w-[340px] min- max-w-[400px] md:pl-0 pl-[16px]"> */}
                  <CollectionCard title={item.heading} bgImage={item.bgimage} />
                  {/* </div> */}
                </SplideSlide>
              )
            })
          }
        </SplideTrack>
      </Splide>
    </div>
  )
}

export default ShopByCollection