import React from 'react';
import {Box, Button, Divider, Grid} from "@mui/material";
import { useHistory } from 'react-router-dom'; // Importa useHistory desde react-router-dom

function RestaurantMenu({}) {
    const history = useHistory();

    const menu = [
        {
            title: 'Entrantes',
            items: [{
                name: 'Escaldon gofio',
                description: 'A los 2 mojos',
                allergens: ['Gluten', 'Lactosa', 'Gluten', 'Lactosa'],
                price: '6.5€'
            },
                {
                    name: 'Queso asado la maestra',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Gluten', 'Lactosa'],
                    detail: true,
                    price: '7.5€'
                },
                {
                    name: 'Garbanzas con bacalao',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '8.5€'
                },
                {
                    name: 'Croquetas variadas',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '8.5€'
                },
                {
                    name: 'Ensaladilla de batata',
                    description: 'Con langostinos y crema rosa',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '8.5€'
                },
                {
                    name: 'Verduras en tempura con salsa de bacon',
                    description: '',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '9€'
                },
                {
                    name: 'Champiñones rellenos de almogrote y miel de palma',
                    description: '',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '9€'
                },
                {
                    name: 'Empanadilla de atún con guacamole',
                    description: '',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '9€'
                },
                {
                    name: 'Langostinos al ajillo',
                    description: '',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '12€'
                },
                {
                    name: 'Huevos rotos con jamón y cebolla confitada',
                    description: '',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '10,50€'
                },
                {
                    name: 'Ceviche de langostinos',
                    description: 'Con crema e la pasion y galleta de chocolate',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '10,50€'
                },
                {
                    name: 'Parrillada de embutidos',
                    description: 'Salchichas, chistorras, morcilla y chronizo parrillero',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '10,50€'
                },
            ]
        },
        {
            title: 'Ensaladas',
            items: [{
                name: 'Ensalada furror',
                description: 'Tomate, lechuga, aguacate, ,atún, maiz, pimientos ' +
                    'y aliño.',
                allergens: ['Gluten', 'Lactosa'],
                price: '8.5€'
            },
                {
                    name: 'Ensalada chafiras',
                    description: 'Pollo kentaky, queso rulo, mermelada de fresa, tomate cherry, lechuga y aliño',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '3.5€'
                },
                {
                    name: 'Ensalada la maestra',
                    description: 'Timbal de guacamole con tomate y cebolla, pimientos con galleta de pollo, mostaza y miel',
                    allergens: ['Gluten', 'Lactosa'],
                    price: '3.5€'
                }]
        }
    ];
    return (
        <div>
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
            }}>
                <img src={'../../banner.jpg'} style={{
                    width: '100%',
                    fit: 'cover',
                }}>
                </img>
            </Box>
            {menu.map((section) => {
                return (
                    <div style={{
                        marginLeft: '16px',
                        marginRight: '16px',
                    }}>
                        <h1>{section.title}</h1>
                        {section.items.map((item) => {
                            return (
                                <Grid container sm={12} display={'flex'} flexDirection={'column'}>
                                    <Grid sm={12} item>

                                    </Grid>
                                    <Grid item xs={12} style={{}}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            flexDirection: 'row',
                                        }}>
                                            <h3 style={{
                                                marginBottom: 8,
                                            }}>{item.name}</h3>
                                            <h3 style={{
                                                marginBottom: 8,
                                            }}>{item.price}</h3>
                                        </Box>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                        }}>
                                            <p style={{
                                                margin: 0,
                                            }}>{item.description}</p>
                                        </div>
                                        <div style={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                        }
                                        }>
                                            <p>Alergenos: </p>
                                            <div style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                gap: 8,
                                            }}>
                                                {item.allergens.map((allergen, index) => <p>{allergen + ' '}</p>)}
                                            </div>

                                        </div>

                                        {item.detail?<Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                        }}>
                                            <Button onClick={()=>history.push(`/link/guachinche_la_maestra/menu/${item.name}`)} style={{
                                                textDecoration: 'underline',
                                            }}>Ver Plato</Button>
                                        </Box>:null}
                                    </Grid>
                                    <Divider light/>

                                </Grid>

                            )
                        })}
                    </div>
                )
            })}

        </div>
    );
}

export default RestaurantMenu;
