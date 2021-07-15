import React, {useCallback, useState} from 'react';
import {CircularProgress, Typography} from "@material-ui/core";
import {useDropzone} from "react-dropzone";
import S3 from 'scaleway-s3';
import ApiRequest from "../Data/Petitions/ApiRequest";

function ImageDragAndDropBanner({loadPhotos, photos=0, isBanner=false}) {

  const onDrop = useCallback(acceptedFiles => {
    setLoading(true)
    let s3 = new S3({
      accessKey: 'SCWCQ4T6XZ3GD867V1AQ',
      secretKey: '670f4f13-ced9-4f42-8dea-9862d9e64953',
      region: 'fr-par',
      domain: 'scw.cloud'
    });

    acceptedFiles.forEach(async (file) => {

      let bucket = 'louvre';
      let key = `/guachinches/${file.name}`;
      const reader = new FileReader();
      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = async () => {
        const binaryStr = reader.result;
        let response = await s3.putObject({bucket, key, "body": binaryStr});
        if (response.status === 200) {
          const photoData = {
            fotoUrl:response.url,
            };
          await ApiRequest.addBanner(photoData);
          setLoading(false);
          loadPhotos();
        }
      }

      reader.readAsArrayBuffer(file);    });
  }, [])

  const {getRootProps, getInputProps} = useDropzone({onDrop})
  const [loading, setLoading] = useState(false);

  return (
    <div  {...getRootProps()} className={"image-drag-and-drop"}>
      {loading ? <CircularProgress disableShrink/> : <input {...getInputProps()} />
      }
      {
        <div>
          <div  style={{backgroundImage: `url("/upload-icon.png")` ,minWidth:'50px',minHeight:'200px'
            , backgroundSize: 'contain' ,backgroundRepeat:"no-repeat"}}/>
          <Typography align={"center"}>Arrastra una foto</Typography>
          <Typography align={"center"}>O clicka para seleccionar una</Typography>
        </div>
      }
    </div>
  );
}

export default ImageDragAndDropBanner;
