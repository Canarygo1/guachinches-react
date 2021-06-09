import React, {useCallback, useState} from 'react';
import {Button, TextField} from "@material-ui/core";
import ApiRequest from "../Data/Petitions/ApiRequest";
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import S3 from "scaleway-s3";
import {useDropzone} from "react-dropzone";

function MenuCard({menu = {}, restaurantId = "",}) {
  const [inputValues, setInputValues] = useState(menu);
  const [imgUrl, setImgUrl] = useState(menu.fotoUrl);
  const onDrop = useCallback(acceptedFiles => {
    let s3 = new S3({
      accessKey: 'SCWCQ4T6XZ3GD867V1AQ',
      secretKey: '670f4f13-ced9-4f42-8dea-9862d9e64953',
      region: 'fr-par',
      domain: 'scw.cloud'
    });

    acceptedFiles.forEach(async (file) => {
      console.log("gol")
      let bucket = 'louvre';
      let key = `/guachinches/menu/${file.name}`;
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
        const binaryStr = reader.result;
        let response = await s3.putObject({bucket, key, "body": binaryStr});

        if (response.status === 200) {
          if (imgUrl !== "") {
            let splitImg = imgUrl.split('/');
            key = `/guachinches/menu/${splitImg[splitImg.length - 1]}`;

            let test = await s3.deleteObject({bucket, key});
            console.log("/////////////////")
            console.log(test);
            console.log("/////////////////")
          }
          setImgUrl(response.url);
          let photoData = {
            fotoUrl:response.url
          }
          await ApiRequest.updateMenuItem(photoData,restaurantId,menu.id);

        }
      }

      reader.readAsArrayBuffer(file);
    });
  }, [])
  const {getRootProps, getInputProps} = useDropzone({onDrop})

  const handleOnChange = useCallback(event => {
    const {name, value} = event.target;
    console.log(inputValues)
    setInputValues({...inputValues, [name]: value});
  });


  const saveHandle = async () => {

    await ApiRequest.updateMenuItem(inputValues, restaurantId, menu.id);


  }

  return (
    <div className={"menu-card"}>
      <div className="card-content">
        <div className={"card-content-left"}>
          <div {...getRootProps()} className={"menu-card-img"}
               style={{backgroundImage: `url(${imgUrl})`, backgroundSize: 'cover'}}>
            <input {...getInputProps()} />
            {imgUrl === "" || imgUrl === null ? <AddPhotoAlternateIcon color={"primary"} fontSize={"large"}/> : <></>}
          </div>
          <TextField fullWidth={true}
                     onChange={handleOnChange}
                     name={"precio"}
                     id="standard-basic" value={inputValues.precio}/>
        </div>
        <div className="card-content-right">
          <TextField fullWidth={true}
                     onChange={handleOnChange}
                     name={"plato"}
                     id="standard-basic" value={inputValues.plato}/>
          <TextField
            id="outlined-textarea"
            multiline
            rowsMax="3"
            rows="3"
            fullWidth={true}
            onChange={handleOnChange}
            value={inputValues.descripcion}
            name={"descripcion"}
          />
          {/*<TextField fullWidth={true}*/}
          {/*           id="standard-basic" value={menu.alergenos}/>*/}

          <div className="card-buttons">
            <Button variant="contained" color="primary">
              Oferta
            </Button>
            <Button variant="contained" color="primary" onClick={() => saveHandle()}>
              Guardar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
