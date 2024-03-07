import React,{useState,useEffect} from 'react'
import DishCard from './Comps/DishCard'
import style from '../src/Styling/dishCard.css'
import NavBar from './Comps/NavBar'
import Footer from './Comps/Footer'
import resturant from './resturant.json'
const App = () => {
const array_1 = resturant.splice(3,100)


return (
<>
      <NavBar />
      
      <div className={
        'container-fluid row'
      }  >
<div className="filters mt-5 pt-5  col-md-2 bg-light">
{/*  */}
<div className="filter-container p-4 mt-5">
  <h3>Filter Restaurants</h3>
  <form id="product-filter">
    <div className="filter-category">
      <h4>Categories</h4>
      <ul>
        <li>
          <input type="checkbox" id="category-all" name="category[]" defaultValue="all" defaultChecked />
          <label htmlFor="category-all">All</label>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Cuisine</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Dietry Restrictions</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Mealtime</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Delivery/Takeout</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#Price">Price</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="Price" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">    Under $10
</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">  $10 - $20</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">  $20 - $30</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">  $30 - $40</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">  Above</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>

        
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Ratings Reviews</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-cuisine" name="category[]" defaultValue="cuisine" />
          <label data-toggle="collapse" htmlFor="category-cuisine  " data-target="#cuisine">Additional</label>
          <ul className="nested-list" id="cuisine-subcategories">

<div id="cuisine" class="collapse">
<li>

          <input type="checkbox" id="category-dietary" name="category[]" defaultValue="dietary" />
          <label htmlFor="category-dietary">American</label>
          <ul className="nested-list" id="dietary-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Italian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Asian</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Chinese</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
        <li>
          <input type="checkbox" id="category-mealtime" name="category[]" defaultValue="mealtime" />
          <label htmlFor="category-mealtime">Thai</label>
          <ul className="nested-list" id="mealtime-subcategories">
          </ul>
        </li>
</div> 
          </ul>
        </li>


      </ul>


    </div>
    <div className="filter-price">
      <h4>Price Range</h4>
      <div className="price-slider">
        <label htmlFor="min-price">Min Price:</label>
        <input type="range" id="min-price" name="min_price" min={0} defaultValue={0} />
        <span id="min-price-value">0</span>
      </div>
      <div className="price-slider">
        <label htmlFor="max-price">Max Price:</label>
        <input type="range" id="max-price" name="max_price" min={0} defaultValue={100} />
        <span id="max-price-value">100</span>
      </div>
    </div>
    <button type="submit" className="btn btn-primary">Filter</button>
  </form>
</div>

{/*  */}
</div>
<div className="main col-lg">
        <div className=" search-container">
          <form action="#">
            <input type="text" placeholder="Search..." />
            <input type="submit" class="btn btn-primary" value={"Search"} />
          </form>
        </div>
        <div className=" mt-4 mb-3 row">
          <div className=" d-flex text-center  align-items-center  justify-content-center  col-md-10 result-box">
            <h2>
              3  Results for "Eggs Benedict" in Nice
            </h2>
          </div>
          <div className=" col-md  mb-4 mt-4">
            <div className="dropdown">
              <button className="btn btn-primary  dropdown-toggle" type="button" id="sortDropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
              </button>
              <i class=" m-4 fa fa-arrow-down" aria-hidden="true"></i>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="sortDropdownMenuButton">
                <a className="dropdown-item" href="#">Price</a>
                <a className="dropdown-item" href="#">Distance</a>
                <a className="dropdown-item" href="#">Popularity</a>
                <a className="dropdown-item" href="#">Rating</a>

              </div>
            </div>
          </div>
        </div>
        <div classname="mt-2">
  {
   array_1.map((rest,index)=>{
     return(
      <DishCard rest_data={rest} index={index} />
      )
})
} 
        </div>

        <div className="load-more text-center row  m-5 p-3">
          <b>
            <span  >Load More</span>
          </b>
        </div>
      </div>
      </div>
      <Footer />
    </>

  )
}

export default App
