import React, {useEffect, useState} from 'react';
import Title from "../components/title";
import Banner from "../components/banner";
import ApiRequest from "../Data/Petitions/ApiRequest";
import ImageDragAndDropBanner from "../components/ImageDragAndDropBanner";

function Banners(props) {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    async function getAllBannersPhotos() {
      let {data} = await ApiRequest.getAllBanners();
      setBanners(data.result);
    }

    getAllBannersPhotos();
  }, []);
  return (
    <div>
      <Title title={"Banners"}></Title>
      <div className={"container-drag"}>
      <ImageDragAndDropBanner/>
      </div>

      <div className={"container-banners"}>
      {banners.map((e) =><Banner imgUrl={e.fotoUrl} restaurantId={e.restaurantId}/>)}
      </div>
    </div>
  );
}

export default Banners;
