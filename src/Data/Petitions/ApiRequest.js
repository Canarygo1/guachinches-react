// let userId = GlobalMethods.getUserIdCookies();

import Axios from "../../helpers/api";

const ApiRequest = {

  //GET
  async getBusinessDetails(businessId) {
    return await Axios().get(`restaurant/details/${businessId}`);
  },
  async getAllBusiness() {
    return await Axios().get(`restaurant/admin`);
  },
  async getAllMunicipalities() {
    return await Axios().get(`municipality`);
  },
  async getAllCategories() {
    return await Axios().get(`restaurant/category`);
  },
  async getEmployee(employeeId) {
    return await Axios().get(`user/employee/${employeeId}`);
  },
  async getAllPhotos(businessId) {
    return await Axios().get(`restaurant/details/${businessId}/photos`);
  },
  //POST
  async login(data) {
    return await Axios().post(`/login`, data);
  },
  async addMenuItem(data, restaurantId) {
    return await Axios().post(`/restaurant/details/${restaurantId}/menu`, data);

  },
  async addRestaurant(data) {
    return await Axios().post(`/restaurant`, data);
  },
  async addCategory(businessId, categoriaId) {
    let data = {categoriaId: categoriaId};
    return await Axios().post(`/restaurant/details/${businessId}/category`,
      data
    )
  },
  async addPhoto(data, businessId){
    return await Axios().post(`/restaurant/details/${businessId}/photos`,data)
  },

  //PUT
  async updateRestaurant(businessId, data) {
    return await Axios().put(`restaurant/details/${businessId}`, data);
  },
  async updateMenuItem(data, restaurantId, menuItemId) {
    return await Axios().put(`/restaurant/details/${restaurantId}/menu/${menuItemId}`, data);
  },
  async updatePhoto(data, businessId, photoId){
    return await Axios().put(`/restaurant/details/${businessId}/photos/${photoId}`,data)
  },
  //REMOVE
  async deleteRestaurantCategory(businessId, categoryId) {
    return await Axios().delete(`restaurant/details/${businessId}/category/${categoryId}`);

  }
}


export default ApiRequest;
