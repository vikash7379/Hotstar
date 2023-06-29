import React from 'react'
import ThumbnailContainer from './ThumbnailsContainer'

const showData = [
    {
      id : 1,
      imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3492/1363492-h-cb68215806d2",
    },
    {
        id : 2,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/405/1350405-h-6ef014bbbb18",
      },
      {
        id : 3,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3882/1373882-h-518fcc66b4ec",
      },
      {
        id : 4,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6978/1306978-h-f55db01533dc",
      },
      {
        id : 5,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3868/1303868-h-5001c332f6e1",
      },
      {
        id : 6,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5941/1085941-h-0d70f05663f9",
      },
      {
        id : 7,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5937/1085937-h-6244dd773735",
      },

]


const HotstarSpecial = () => {
  return (
    <>
        <ThumbnailContainer
            title="Hotstar Specials - First Episode Free"
            imgData={showData}
            gridGap = "5px"
        />
    </>
  )
}

export default HotstarSpecial