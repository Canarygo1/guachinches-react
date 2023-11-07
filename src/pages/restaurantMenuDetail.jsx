import React from 'react';
import {Box, Button, Card, CardContent} from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {useHistory} from "react-router-dom";

function RestaurantMenuDetail() {
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
        justifyContent: 'space-between',
        alignItems: 'center', // Centra horizontalmente
        position: 'absolute',
        top: 0,
        left: 0,
        gap: 18,
        width: '100%',
        height: '100%',
    };
    const cardStyle = {
        borderRadius:'8px', // Ajusta el valor para redondear los bordes
        width: 'calc(100% - 32px)', // Resta 32px (16px de cada lado) del ancho total
        margin: '16px', // Agrega 16px de margen a cada lado
    };
    const videoUrl = 'https://orsay.s3.fr-par.scw.cloud/RPReplay_Final1699385256.mp4'; // Reemplaza con la URL de tu video en S3
    const history = useHistory();

    const product = {
        name: 'Queso asado la maestra',
        description: 'Queso asado con mojo picón',
        allergens: ['Gluten', 'Lactosa'],
        detail: true,
        price: '7.5€'
    }
    return (
        <div>
            <video autoPlay loop playsInline muted style={videoStyle}>
                <source src={videoUrl} type="video/mp4"/>
            </video>
            <div>
                <div style={buttonContainerStyle}>
                    <Box onClick={()=>{history.goBack()}} sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        mt:'16px',
                        alignItems: 'center', // Cambia 'start' a 'center' para alinear verticalmente
                        width: '100%',
                        justifyContent: 'start', // Cambia 'start' a 'start'
                        padding: '8px', // Añade un poco de espacio interior
                    }}>
                        <ArrowBackIosIcon sx={{
                            marginLeft:'16px',
                            color:'white'
                        }}/> {/* Agrega el icono de "volver atrás" */}
                        <Button  sx={{
                            color: 'white',
                        }}>
                            Volver al menú
                        </Button>
                    </Box>
                    <Card style={cardStyle}>
                        <CardContent style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 4,
                        }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}>
                                <h3 style={{
                                    margin: 0,

                                }}>{product.name}</h3>
                                <h3 style={{
                                    margin: 0,

                                }}>{product.price}</h3>
                            </Box>
                            <div style={{
                                margin: 0,

                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <p style={{
                                    margin: 0,
                                }}>{product.description}</p>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                            }
                            }>
                                <p style={{
                                    margin: 0,
                                }}>Alergenos: </p>
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 8,
                                }}>
                                    {product.allergens.map((allergen, index) => <p style={{
                                        margin: 0,

                                    }}>{allergen + ' '}</p>)}
                                </div>

                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default RestaurantMenuDetail;
