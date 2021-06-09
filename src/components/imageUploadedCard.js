import React from 'react';
import ApiRequest from "../Data/Petitions/ApiRequest";

function ImageUploadedCard({imgUrl="",isMain=false,businessId="", photoId="", loadPhotos}) {
  //Mirarse como hacer que las imagenes sean del tamaño del padre
  //Puede ser object-fit: cover ??
  let setPhotoAsMain = async () => {
    let response = await ApiRequest.updatePhoto({type: "principal"},businessId,photoId)
    console.log(response);
    loadPhotos();
  }
  return (
    <div  onClick={()=>setPhotoAsMain()} style={{backgroundImage: `url(${imgUrl})` ,backgroundSize: 'cover', border:"orange",borderStyle:isMain?"solid":"",
    }} className={"image-uploaded-card"}>
    </div>
  );
}


export default ImageUploadedCard;
