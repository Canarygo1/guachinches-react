import React, {useEffect, useRef} from 'react';
import {IconButton} from "@mui/material";
import {Box} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const videoStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1,
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column', // Columna en lugar de fila
    justifyContent: 'center', // Centra verticalmente
    alignItems: 'center', // Centra horizontalmente
    position: 'absolute',
    top: 0,
    left: 0,
    gap: 18,
    width: '100%',
    height: '100%',
};

const buttonStyle = {
    background: '#0085C4',
    borderRadius: '16px', // Ajusta el valor para redondear los bordes
    padding: '16px 20px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '324px',
    minWidth: '326px',
    justifyContent: 'start'

};
const googleLogo = '../google_icon.png'; // Reemplaza con la URL de tu imagen
const instagramLogo = '../instagram_icon.png'; // Reemplaza con la URL de tu imagen
const guachichinchesModernosLogo = '../logo_guachinches.png'; // Reemplaza con la URL de tu imagen
const menuLogo = '../menu_icon.png'; // Reemplaza con la URL de tu imagen
const facebookLogo = '../facebook_icon.png'; // Reemplaza con la URL de tu imagen
const whatsappLogo = '../whatsapp_app_icon.png'; // Reemplaza con la URL de tu imagen
const businessLogo = '../logo_carpintero.png'; // Reemplaza con la URL de tu imagen
const videoUrl = 'https://orsay.s3.fr-par.scw.cloud/menus/el_carpintero.mp4'; // Reemplaza con la URL de tu video en S3
const googleUrl = 'https://search.google.com/local/writereview?placeid=ChIJZ6r1yEgtQAwRiO3KQ9AC-hY'
const facebookUrl = 'https://www.facebook.com/guachincheelcarpintero'
const instagramUrl = 'https://www.instagram.com/guachincheelcarpintero/'
const cartaPDF = 'https://orsay.s3.fr-par.scw.cloud/menus/carta_el_carpintero.pdf'
const whatsAppUrl = 'https://wa.me/?text=Valora el guachinche el carpintero en el siguiente link: ' + googleUrl

const LinkDetails = () => {
    const handleButtonClick = (href) => {
        window.open(href, '_blank'); // Replace with your external link
    };
    const history = useHistory();
    const videoRef = useRef(null);

    return (
        <div>
            <video
                ref={videoRef}
                loop
                playsInline
                muted
                autoPlay
                style={videoStyle}
            >
                <source src={videoUrl} type="video/mp4" />
            </video>
            <div>
                <div style={buttonContainerStyle}>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 18,
                        justifyContent: 'center',
                        alignItems: 'center',
                        weight: '100%',
                        height: '100%',
                    }}>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: 0,
                        }}>

                            <img src={businessLogo} style={{
                                width: '80px',
                                borderRadius: '16%',
                            }}/>
                            <h1 style={{
                                color: 'white',
                            }}>Guachinche la maestra</h1>
                        </div>

                        <IconButton sx={buttonStyle} onClick={() => handleButtonClick(googleUrl)}>
                            <img src={googleLogo} alt="Logo" style={{width: '30px', marginRight: '10px'}}/>
                            Escribe tu valoración
                        </IconButton>

                        <IconButton style={{...buttonStyle, backgroundColor: 'white', color: '#0085C4'}}
                                    onClick={() => handleButtonClick(whatsAppUrl)}>
                            <img src={whatsappLogo} alt="Logo" style={{
                                width: '30px', marginRight: '10px',
                                objectFit: 'cover'
                            }}/>

                            Comparte para valorar
                        </IconButton>
                        <IconButton style={{...buttonStyle, backgroundColor: 'white', color: '#0085C4'}}
                                    onClick={() => handleButtonClick(instagramUrl)}>
                            <img src={instagramLogo} alt="Logo" style={{width: '30px', marginRight: '10px'}}/>
                            <div style={{
                                fontSize: '23px',
                            }}>Síguenos en Instagram
                            </div>
                        </IconButton>
                        <IconButton style={{...buttonStyle, backgroundColor: 'white', color: '#0085C4'}}
                                    onClick={() => handleButtonClick(instagramUrl)}>
                            <img src={guachichinchesModernosLogo} alt="Logo" style={{width: '30px', marginRight: '10px'}}/>
                            <div style={{
                                fontSize: '23px',
                            }}>
                                Únete a nuestro grupo
                            </div>
                        </IconButton>
                        <IconButton style={{...buttonStyle, backgroundColor: 'white', color: '#0085C4'}}
                                    href={cartaPDF}>
                            <div style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                            }}>
                                Ver carta
                            </div>
                        </IconButton>
                    </Box>
                    <Box style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'end',
                        alignItems: 'center',
                        height: '30%',
                        padding: 0,
                        margin: 0,
                        color: 'white',
                    }}>
                        <Box>
                            <img src={'../app_icon.png'} alt="Logo" style={{width: '42px', marginRight: '10px'}}/>
                            <img src={guachichinchesModernosLogo} alt="Logo" style={{width: '42px', marginRight: '10px'}}/>
                        </Box>

                        <p style={{
                            fontWeight: 'bold',
                            marginBottom: '8px',
                        }}>Donde Comer Canarias</p>
                        <p style={{
                            marginTop: '0px',
                            marginBottom: '8px',

                        }}
                           onClick={() => handleButtonClick('https://apps.apple.com/tr/app/donde-comer-canarias/id1575882373')}>Descarga
                            nuestra app <span style={{
                                textDecoration: 'underline',
                            }}>aquí</span></p>
                    </Box>

                </div>


            </div>
        </div>
    );
};

export default LinkDetails;
