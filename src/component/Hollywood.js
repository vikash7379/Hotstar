import React from 'react'
import ThumbnailContainer from './ThumbnailsContainer'


const hollywoodData = [
  {
    id :  1,

    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/8462/1348462-v-261896304bbc",
  },
  {
    id :  2,
    description : "The God of Thunder teams up with King Valkyrie,Korg and ex-girlfriend-turned-Mighty-Thor Jane Foster to take on a galactic killer known as Gorr the God Butcher....",
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8317/1328317-v-56412010beba",
  },
  {
    id :  3,
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/6786/1416786-v-ca1e342d9ab7",
  },
  {
    id :  4,
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2350/1282350-v-15ffecf89380",
  },
  {
    id :  5,
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5190/875190-v",
  },
  {
    id : 6,
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/1691/1011691-v-657881703c09",
  },
  {
    id :  7,
    imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/5171/875171-v",
  },
]


const Hollywood = () => {
  return (
    <ThumbnailContainer
      title="Hollywood Special - Action"
      imgData={hollywoodData}
      gridGap = "20px"
    />
  )
}

export default Hollywood