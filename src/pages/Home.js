import React, { useState, useMemo } from 'react';
import { useQuery } from "react-query";
import { getAllProducts } from "../services/apiServices";
import Slider from '@mui/material/Slider';
import Loading from "../components/Loading";
import Products from './Products';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function valuetext(value) {
  return `${value}`;
}
const minDistance = 1;


const Home = () => {

  const [searchParams, setSearchParams] = useState("")
  const [value1, setValue1] = useState([0, 100]);
  const [category, setCategory] = useState('All');



  const { data, isLoading, error } = useQuery(
    "getAllProductData",
    getAllProducts
  );

  if (isLoading) return <Loading />;
  if (error) return "An error has occurred: " + error.message;


 

  const handleChange = (event) => {
    setCategory(event.target.value);
  };


  // const myDebounce = (cb, time) => {
  //   let timer;
  //   return function (...args) {
  //     if (timer) {
  //       clearTimeout(timer)
  //     }
  //     timer = setTimeout(cb(...args), time)
  //   }
  // };

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    console.log("value", value1);
  };


  let categoryArray = [...new Set(data?.map(ele => ele.category))]
  console.log("categoryArray", categoryArray)

  return (
    <div className='home'>
      <div className='home__menu'>
        {/* name */}
        
        <div className='menu__searchBox'>
        <span>Name</span>
          <input type='text' value={searchParams} onChange={(e) => setSearchParams(e.target.value)} placeholder='Type Item to Search' />
        </div>


        {/* price */}
        
        <div className='menu__slider'>
        <span>Price</span>
          <Slider
          className='slider'
            getAriaLabel={() => 'Minimum distance'}
            value={value1}
            onChange={handleChange1}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            // disableSwap
          />
        </div>

        {/* category */}
        {/* <span>Category</span> */}
        <div className='menu__dropdown'>
          <InputLabel className='dropdown__input' id="demo-simple-select-filled-label">Category</InputLabel>
          <Select
          className='slider__select'
            labelId="demo-simple-select-filled-label"
            id="demo-select-small"
            value={category}
            label="Category"
            onChange={handleChange}
          >
            {
              categoryArray?.map((singleCategory, index) => {
                return (
                  <MenuItem key={index} value={singleCategory || ""}>{singleCategory || "All"}</MenuItem>
                )
              })
            }
          </Select>
        </div>
      </div>
      <div className='home__content'>
        <Products params={searchParams} data={data} />
      </div>
    </div>
  );
}

export default Home;

