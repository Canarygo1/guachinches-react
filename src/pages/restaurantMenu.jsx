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
                allergens: ['Gluten',],
                price: '6,5€'
            },
                {
                    name: 'Queso asado la maestra',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Lácteos'],
                    detail: true,
                    price: '7,5€'
                },
                {
                    name: 'Garbanzas con bacalao',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Dióxido de azufre y sulfitos'],
                    price: '8,5€'
                },
                {
                    name: 'Croquetas variadas',
                    description: 'Queso asado con mojo picón',
                    allergens: ['Gluten','Huevos','Dióxido de azufre y sulfitos','Frutos de cáscara','Pescado'],
                    price: '8,5€'
                },
                {
                    name: 'Ensaladilla de batata',
                    description: 'Con langostinos y crema rosa',
                    allergens: ['Pescado', 'Crustáceos', 'Huevos', 'Moluscos'],
                    price: '8,5€'
                },
                {
                    name: 'Verduras en tempura con salsa de bacon',
                    description: '',
                    allergens: ['Gluten'],
                    price: '9€'
                },
                {
                    name: 'Champiñones rellenos de almogrote y miel de palma',
                    description: '',
                    allergens: [ 'Lácteos'],
                    price: '9€'
                },
                {
                    name: 'Empanadilla de atún con guacamole',
                    description: '',
                    allergens: ['Gluten', 'Pescado'],
                    price: '9€'
                },
                {
                    name: 'Langostinos al ajillo',
                    description: '',
                    allergens: ['Crustaceo'],
                    price: '12€'
                },
                {
                    name: 'Huevos rotos con jamón y cebolla confitada',
                    description: '',
                    allergens: ['Huevos'],
                    price: '10,50€'
                },
                {
                    name: 'Ceviche de langostinos',
                    description: 'Con crema e la pasion y galleta de chocolate',
                    allergens: ['Frutos de cascara', 'Pescado', 'Crustaceo'],
                    price: '10,50€'
                },
                {
                    name: 'Parrillada de embutidos',
                    description: 'Salchichas, chistorras, morcilla y chronizo parrillero',
                    allergens: ['Gluten', 'Frutos de cascara'],
                    price: '10,50€'
                },
            ]
        },
        {
            title: 'Ensaladas',
            items: [{
                name: 'Ensalada furor',
                description: 'Tomate, lechuga, aguacate, ,atún, maiz, pimientos ' +
                    'y aliño.',
                allergens: [],
                price: '8.5€'
            },
                {
                    name: 'Ensalada chafiras',
                    description: 'Pollo kentaky, queso rulo, mermelada de fresa, tomate cherry, lechuga y aliño',
                    allergens: [],
                    price: '10€'
                },
                {
                    name: 'Ensalada la maestra',
                    description: 'Timbal de guacamole con tomate y cebolla, pimientos con galleta de pollo, mostaza y miel',
                    allergens: ['Mostaza'],
                    price: '10,5€'
                }]
        } ,
        {
            title: 'Carnes',
            items: [{
                name: '1/2 Pollo asado',
                description: 'A la brasa.',
                allergens: ['Dioxido de azufre y sulfitos'],
                price: '5,5€'
            },
                {
                    name: '1 Pollo asado',
                    description: 'A la brasa',
                    allergens: ['Dioxido de azufre y sulfitos'],
                    price: '8,5€'
                },
                {
                    name: 'Bistec de cerdo',
                    description: 'A la brasa',
                    allergens: [],
                    price: '8,5€'
                },
                {
                    name: 'Bistec de novillo',
                    description: 'A la brasa',
                    allergens: [],
                    price: '11€'
                },
                {
                    name: 'Chuleta de palo',
                    description: 'A la brasa',
                    allergens: [],
                    price: '12€'
                },
                {
                    name: 'Solomillo de cerdo',
                    description: 'A la brasa',
                    allergens: [],
                    price: '13,5€'
                },
                {
                    name: 'Solomillo de red',
                    description: 'A la brasa',
                    allergens: [],
                    price: '22€'
                },{
                    name: 'Codillo asado con salsa de champán',
                    description: 'A la brasa',
                    allergens: [],
                    price: '16€'
                },{
                    name: 'Chuletón de novillo',
                    description: 'Carne madurada a la brasa por peso 28€/kg',
                    allergens: [],
                    price: '28€/kg'
                },{
                    name: 'T-Bone de novillo',
                    description: 'Carne madurada a la brasa por peso 32€/kg',
                    allergens: [],
                    price: '32€/kg'
                },{
                    name: 'Chuletón frisona',
                    description: 'Carne madurada a la brasa por peso 45€/kg',
                    allergens: [],
                    price: '45€/kg'
                },{
                    name: 'Chuletón black angus',
                    description: 'Carne madurada a la brasa por peso 45/kg',
                    allergens: [],
                    price: '45€/kg'
                },{
                    name: 'Chuletón simental',
                    description: 'Carne madurada a la brasa por peso preguntar precio/kg',
                    allergens: [],
                    price: '€/kg'
                },{
                    name: 'Ternera rosada ',
                    description: 'Carne madurada a la brasa por peso preguntar precio/kg',
                    allergens: [],
                    price: '€/kg'
                }]
        },
        {
            title: 'Pescados',
            items: [{
                name: 'Bacalao guisado',
                description: '',
                allergens: ['Pescado'],
                price: '13,50€'
            },
                {
                    name: 'Bacalao encebollado',
                    description: '',
                    allergens: ['Pescado'],
                    price: '14,5€'
                },
                {
                    name: 'Bacalao thai',
                    description: 'Con leche de coco',
                    allergens: ['Mostaza'],
                    price: '15,5€'
                },
                {
                    name: 'Pulpo frito',
                    description: '',
                    allergens: ['Moluscos'],
                    price: '14,0€'
                },
                {
                    name: 'Pulpo guisado',
                    description: '',
                    allergens: ['Moluscos'],
                    price: '16,5€'
                },
                {
                    name: 'Merluza estilo maestra ',
                    description: 'Con salsa verdey langostinos',
                    allergens: ['Gluten','Moluscos','Pescado'],
                    price: '15,5€'
                },
                {
                    name: 'Calamares a la romana',
                    description: 'Con salsa verdey langostinos',
                    allergens: ['Gluten','Huevos','Moluscos'],
                    price: '9€'
                }]
        } ,
        {
            title: 'Estrellas la maestra',
            items: [{
                name: 'Papas con piñas y costillas',
                description: '',
                allergens: ['Gluten'],
                price: '9€'
            },
                {
                    name: 'Papas con piñas y costillas 2 personas',
                    description: 'Para 2 personas',
                    allergens: [],
                    price: '17,5€'
                },
                {
                    name: 'Gordon blue la maestra',
                    description: 'Relleno de jamon y queso, cebolla caramelizada, champiñones al ajillo y aguacate',
                    allergens: ['Leche','Gluten','Huevos'],
                    price: '15,5€'
                },
                {
                    name: 'Arroz caldoso de pescado y marisco',
                    description: 'Minimo 2 personas, precio por persona 13,5€',
                    allergens: ['Leche','Gluten','Huevos'],
                    price: '26,5€'
                }]
        } ,
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
                                                flexFlow: 'wrap',
                                                marginTop:16,
                                            }}>
                                                <p style={{ margin: 0 }}>
                                                    {item.allergens.join(' ')}
                                                </p>
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
