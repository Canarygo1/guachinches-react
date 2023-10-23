import React from 'react';
import {Link, useParams} from "react-router-dom";
import GlobalMethods from "../helpers/globalMethod";

const LateralBar = ({isAdmin}) => {
  //Hay que cogerlo de la URL//
  let {businessId} = useParams();

  let canSeeAll = GlobalMethods.getSessionAdmin();

  return (
    <div className={"lateral-bar"}>
      <div className={"lateral-bar-content"}>
        <div className={"up-section-lateral-bar"}>
          <img className={"logo-lateral-bar"} src="/logo.png" alt=""/>
        </div>
        <div  className={"down-section-lateral-bar"}>
          {canSeeAll ? <Link style={{textDecoration: 'none'}} to={`/app/admin/main`}>
            <p style={{color: "white"}} className={"menu-item"}>Principal</p>
          </Link>: <></>}
          {canSeeAll ? <Link style={{textDecoration: 'none'}} to={`/app/admin/banners`}>
            <p style={{color: "white"}} className={"menu-item"}>Banners</p>
          </Link>: <></>}
          {canSeeAll ? <Link style={{textDecoration: 'none'}} to={`/app/admin/areas`}>
            <p style={{color: "white"}} className={"menu-item"}>Areas</p>
          </Link>: <></>}
          {canSeeAll ? <Link style={{textDecoration: 'none'}} to={`/app/admin/areas`}>
            <p style={{color: "white"}} className={"menu-item"}>Links</p>
          </Link>: <></>}
          {!isAdmin?<Link style={{ textDecoration: 'none' }} to={`/app/${businessId}`}>
            <p style={{color:"white"}} className={"menu-item"}>Mi perfil</p>
          </Link>:<></>}
          {!isAdmin?<Link style={{ textDecoration: 'none' }} to={`/app/${businessId}/menu`}>
            <p style={{color:"white"}} className={"menu-item"}>Carta</p>
          </Link>:<></>}
          {!isAdmin?<Link style={{textDecoration: 'none'}} to={`/app/${businessId}/review`}>
            <p style={{color: "white"}} className={"menu-item"}>Valoraciones</p>
          </Link>:<></>}
        </div>
      </div>
    </div>
  );
};

export default LateralBar;
