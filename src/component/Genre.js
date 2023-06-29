import React from 'react'
import ThumbnailContainer from './ThumbnailsContainer'


const genreData = [
    {
        id : 1,
        desc : "romance",
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2168/1272168-h-0b9e56f3a569"
    },
    {
        id : 2,
        desc : "drama",
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2164/1272164-h-a40109f63230"
    },
    {
        desc : "family",
        id : 3,
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2184/1272184-h-dc6d91e320bb"
    },
    {
        id : 4,
        desc : "Reality",
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58"
    },
    {
        id : 5,
        desc : "mythology",

        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2194/1272194-h-c7381829728b"
    },
    {
        id : 6,
        desc : "Action",

        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2163/1272163-h-6a39e5230553"
    },
    {
        id : 7,
        desc : "talkshow",
        imgSrc : "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/2196/1272196-h-a60017186aff"
    },

]

const stylecss = {
    position: "absolute",
  width: "100%",
  top: "0",
  left: "0",
  right: "0",
  bottom: "0",
  textTransform: "uppercase",
  backgroundColor: "rgba(0,0,0,0.4)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}


const Genre = () => {
  return (
    <ThumbnailContainer
        title="Popular Genres"
        gridGap="5px"
        imgData={genreData}
        stylecss={stylecss}
    />
  )
}

export default Genre