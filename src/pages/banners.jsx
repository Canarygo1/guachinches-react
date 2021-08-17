import React, {useEffect, useState} from 'react';
import Title from "../components/title";
import Banner from "../components/banner";
import ApiRequest from "../Data/Petitions/ApiRequest";
import ImageDragAndDropBanner from "../components/ImageDragAndDropBanner";
import {arrayMove, SortableContainer, SortableElement} from "react-sortable-hoc";

function Banners(props) {
  const [banners, setBanners] = useState([]);
  const SortableItem = SortableElement(({value}) => <Banner imgUrl={value.fotoUrl}/>);

  const SortableList = SortableContainer(({items}) => {
    return (
      <div className={"container-banners"} >
        {items.map((e,index) =><SortableItem index={index} value={e}/>)}
      </div>
    );
  });

  useEffect(() => {

    getAllBannersPhotos();
  }, []);
  async function getAllBannersPhotos() {
    let {data} = await ApiRequest.getAllBanners();
    setBanners(data.result);
  }
  const onSortEnd = async ({oldIndex, newIndex}) => {
    let orden = {orden: newIndex}
    let element = banners[oldIndex];
    console.log('/////////////////')
    console.log(element.id);
    console.log(orden);
    let updateBanner = await ApiRequest.updateBannerOrder(element.id, orden)
    setBanners(arrayMove(banners, oldIndex, newIndex))
  };

  return (
    <div>
      <Title title={"Banners"}></Title>
      <div className={"container-drag"}>
      <ImageDragAndDropBanner loadPhotos={() => getAllBannersPhotos().bind}/>
      </div>
          <div className={"container-banners"} >
            <SortableList axis={'xy'} items={banners} onSortEnd={onSortEnd} />;
          </div>
    </div>
  );
}

export default Banners;
