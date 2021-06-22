import React from 'react';
import ApiRequest from "../Data/Petitions/ApiRequest";
import CancelIcon from '@material-ui/icons/Cancel';
function ImageUploadedCard({imgUrl="",isMain=false,businessId="", photoId="", loadPhotos}) {
  //Mirarse como hacer que las imagenes sean del tamaño del padre
  //Puede ser object-fit: cover ??
  let setPhotoAsMain = async () => {
    let response = await ApiRequest.updatePhoto({type: "principal"},businessId,photoId)
    console.log(response);
    loadPhotos();
  }
  let deletePhoto = async () =>{
    let response = await ApiRequest.deleteRestaurantPhoto(businessId,photoId);
    console.log(response);
    loadPhotos();
  }
  return (
    <div className={"image-uploaded-outside"}>
      <CancelIcon color={"primary"} className={"delete-item"} onClick={()=>deletePhoto()}/>
    <div  onClick={()=>setPhotoAsMain()} style={{backgroundImage: `url(${imgUrl})` ,backgroundSize: 'cover', border:"orange",borderStyle:isMain?"solid":"",
    }} className={"image-uploaded-card"}>
    </div>
    </div>
  );
}


export default ImageUploadedCard;
