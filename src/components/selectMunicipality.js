import React from 'react';
import {MenuItem, Select} from "@material-ui/core";

function SelectMunicipality({municipalities = [], onChange, value}) {

  const municipalitiesFiltered = [];
//
  const filteringMunicipalities = () => {
    if (municipalities.length > 0) {
      for (let i = 0; i < municipalities.length; i++) {
        for (let y = 0; y < municipalities[i]["Municipios"].length; y++) {
          municipalitiesFiltered.push(municipalities[i]["Municipios"][y]);
        }
      }
    }
  }
  filteringMunicipalities();
  console.log(value);
  return (
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      fullWidth={true}
      name={"NegocioMunicipioId"}
      defaultChecked={true}
      value={value}
      onChange={onChange}
    >
      {municipalitiesFiltered.map((e, index) =>{
        return <MenuItem key={e.Id} value={e.Id}>{e.Nombre}</MenuItem>})
      }

    </Select>
  );
}

export default SelectMunicipality;
