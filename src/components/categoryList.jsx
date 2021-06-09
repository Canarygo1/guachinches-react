import React from 'react';
import CategoryCard from "./categoryCard";
import ApiRequest from "../Data/Petitions/ApiRequest";

function CategoryList({categories = [],categoriesSelected,setCategoriesSelected, businessId}) {


  const OnClick = async (isSelect, id) => {

    if (isSelect === false) {
      let index = categoriesSelected.findIndex((element) => {
        if (element.categoriaId === undefined) {
          return element.id === id;
        }
        return element.categoriaId === id;
      })
      if (index !== -1) {
        categoriesSelected.splice(index, 1);
      }
      await ApiRequest.deleteRestaurantCategory(businessId, id);

      setCategoriesSelected([...categoriesSelected])
    } else {
      let index = categories.findIndex((element) => {
        return element.id === id;
      })
      await ApiRequest.addCategory(businessId, id);
      setCategoriesSelected(oldArray => [...oldArray, categories[index]])
    }
  }

  return (
    <div className={"category-list"}>
      {categories.map((value) =>
         <CategoryCard name={value.nombre} imgUrl={value.iconUrl} onClick={(test,id) => OnClick(test,id)} id={value.id}
                      isSelect={categoriesSelected !== undefined ?categoriesSelected.find((e) => {
                          if (e.categoriaId === undefined){
                            return e.id === value.id

                          }
                          return e.categoriaId === value.id
                        }
                      ):false}/>
      )}
    </div>
  );
}

export default CategoryList;
