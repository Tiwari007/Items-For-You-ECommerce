import axios from "axios";

const getAllProducts = async () => {
  const data = await axios.get("https://dummyjson.com/products");

  return data.data.products;
};

const getSingleProduct = async (id) => {
  const data = await axios.get(`https://dummyjson.com/products/${id}`);

  return data.data;
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

export {
  getAllProducts,
  getSingleProduct,
  addProduct,
  updateProduct,
  deleteProduct,
};
