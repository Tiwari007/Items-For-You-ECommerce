import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Products = ({params, data}) => {
 

  const [productsData, setProductsData ] = useState(data)
  const [ pageIndex, setPageIndex ] = useState(1);
  

  useEffect(() => {
    filteringData()
  }, [params])

  
  function filteringData(){
    let filteredData = data && data?.filter(product => product?.title?.toLowerCase().includes(params?.toLowerCase()))
    setProductsData(filteredData)
  }
  


  const arr = productsData && productsData?.slice(1, Math.ceil(productsData?.length / 9)).map((prdct, i) => {
    return i + 1;
  });

  return (
    <div>
      <h1 style={{textAlign: "center", color: "white", marginTop: "20px"}}>Products</h1>
      <div className="products">
      {productsData && productsData
          .slice((pageIndex - 1) * 10, (pageIndex - 1) * 10 + 10)
          .map((product, index) => {
            return <Product key={index} data={product} />;
          })}
      </div>
      {/* for previous (pages) next buttons */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => setPageIndex(pageIndex - 1)}
          style={{ padding: "20px", marginRight: "10px" }}
          disabled={pageIndex === arr[0] ? true : false}
        >
          ⏮ Prev
        </button>
        {arr.map((val) => {
          return (
            <button
              style={{ padding: "20px", marginRight: "10px" }}
              onClick={() => setPageIndex(val)}
            >
              {val}
            </button>
          );
        })}
        <button
          onClick={() => setPageIndex(pageIndex + 1)}
          style={{ padding: "20px", marginRight: "10px" }}
          disabled={pageIndex === arr[arr.length - 1] ? true : false}
        >
          ⏭ Next
        </button>
      </div>
      
    </div>
  );
};

export default Products;
