import React from 'react'
import ThumbnailContainer from './ThumbnailsContainer'

const imgSrcArray = [
    {
        id : 1,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/7527/267527-v",
    },
    {
        id : 2,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/2876/862876-v",
    },
    {
        id : 3,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/8763/1308763-v-18eb691de01f",
    },
    {
        id : 4,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4267/1364267-v-59ed5cfdea3a",
    },
    {
        id : 5,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/4253/1364253-v-17a2ff74143c",
    },
    {
        id : 6,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_1_5x/sources/r1/cms/prod/9411/1329411-v-3ca2edc2e802",
    },
    {
        id : 7,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_3x/sources/r1/cms/prod/3434/1373434-v-509c9dbd22dc",
    },
]

const TrendingShow = () => {
  return (
    <>
        <ThumbnailContainer
            title="Recomended Show for You"
            imgData={imgSrcArray}
            gridGap="20px"
        />
    </>
  )
}

export default TrendingShow