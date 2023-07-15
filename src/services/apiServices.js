import axios from "axios";

const getAllProducts = () => {
  const options = { method: "GET", url: "https://dummyjson.com/products" };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const getSingleProduct = (id) => {
  const options = {
    method: "GET",
    url: `https://dummyjson.com/products/${id}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const addProduct = (data) => {
  const options = {
    method: "POST",
    url: "https://dummyjson.com/products/add",
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const updateProduct = (id, data) => {
  const options = {
    method: "PUT",
    url: `https://dummyjson.com/products/${id}`,
    headers: { "Content-Type": "application/json" },
    data: data,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

const deleteProduct = (id) => {
  const options = {
    method: "DELETE",
    url: `https://dummyjson.com/products/${id}`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
