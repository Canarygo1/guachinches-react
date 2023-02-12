import React, {useState} from 'react';
import {Box, Card, CardContent, Checkbox, MenuItem, Select, Typography} from "@material-ui/core";


function Weekdays({days,setDays}) {
    const handleChangeTurno = (event,index)=>{
        const aux  = [...days];
        aux[index].turno = event.target.value;
        setDays([...aux]);
    }
    const handleActiveDay = (index)=>{
        const aux  = [...days];
        aux[index].isSelected = !aux[index].isSelected;
        setDays([...aux]);
    }
    const turno = ['almuerzo','noche','día']
    return (
        <Box sx={{
            display:'flex',
            flexDirection:'row',
            gap:8,
            marginLeft:20,
            flexWrap:'wrap',
            justifyContent:'center',
            alignItems:'center',
        }}>
        {    days.map((element,index)=>{
                return (
                    <Card
                        key={element.day+index}
                        style={{
                            width:'45%',
                            borderRadius: 8,
                        }}
                    >
                        <CardContent style={{
                            display:'flex',
                            flexDirection:'row',
                            gap:2
                        }}>
                            <Box style={{
                                display:'flex',
                                flexDirection:'row',
                                alignItems:'center',
                                justifyContent:'center'
                            }}>
                                <Typography style={{
                                    textAlign:'center'
                                }}>
                                    {element.day}
                                </Typography>
                                <Checkbox checked={element.isSelected} onChange={()=>handleActiveDay(index)}>
                                </Checkbox>
                            </Box>
                            <Box style={{
                                display:'flex',
                                flexDirection:'row',
                                justifyContent:'center',
                                alignItems:'center',
                                gap:2
                            }}>
                                <Typography>
                                    Turno
                                </Typography>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={element.turno}
                                    onChange={(event)=>handleChangeTurno(event,index)}
                                >{
                                    turno.map((element,index)=>{
                                        return (
                                            <MenuItem key={element} value={element}>{element}</MenuItem>
                                        )
                                    })
                                }
                                </Select>
                                <Typography>
                                    Mesas
                                </Typography>
                            </Box>
                        </CardContent>
                    </Card>
                )
            })}
        </Box>
    );
}

export default Weekdays;
