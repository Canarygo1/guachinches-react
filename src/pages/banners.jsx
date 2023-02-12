import React, {useEffect, useState} from 'react';
import Title from "../components/title";
import Banner from "../components/banner";
import ApiRequest from "../Data/Petitions/ApiRequest";
import ImageDragAndDropBanner from "../components/ImageDragAndDropBanner";
import {arrayMove, SortableContainer, SortableElement} from "react-sortable-hoc";
import {Button, Typography} from "@material-ui/core";

function Banners(props) {
  const [banners, setBanners] = useState([]);
  let removeBanner = async (id) => {
    await ApiRequest.deleteBanner(id);
    await getAllBannersPhotos();
  }
  const SortableItem = SortableElement(({value}) => <div>
    <Banner  id={value.id} imgUrl={value.fotoUrl}/>
    <div style={{marginTop:3 ,display:'flex',justifyContent:'center'}}>
      <Button
        variant="contained"
        color="secondary"
        size={'small'}
        onClick={()=>removeBanner(value.id)}
      >
        Borrar
      </Button>
    </div>

  </div>);

  const SortableList = SortableContainer(({items}) => {
    return (
      <div className={"container-banners"} >
        {items.map((e,index) => <SortableItem index={index} value={e}/>)}
      </div>
    );
  });

  useEffect(() => {

    getAllBannersPhotos();
  }, []);
  async function getAllBannersPhotos() {
    let {data} = await ApiRequest.getAllBanners();
    console.log(data);
    setBanners(data.result);
  }
  const onSortEnd = async ({oldIndex, newIndex}) => {
    let orden = {orden: newIndex}
    let element = banners[oldIndex];

    let updateBanner = await ApiRequest.updateBannerOrder(element.id, orden)
    setBanners(arrayMove(banners, oldIndex, newIndex))
  };

  return (
    <div>
      <Title title={"Banners"}></Title>
      <div className={"container-drag"}>
      <ImageDragAndDropBanner  loadPhotos={() => getAllBannersPhotos().bind}/>
      </div>
          <div className={"container-banners"} >
            <SortableList distance={1} axis={'xy'} items={banners} onSortEnd={onSortEnd} />
          </div>
      <div>
      </div>
    </div>
  );
}

export default Banners;
