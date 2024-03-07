import React from "react";
import "../Styling/dishCard.css";
const DishCard = ({ rest_data ,index }) => {
  const baseUrl = "https://www.google.com/maps/place/"
  const placeDetails = rest_data["Address"] +"/"
  const locationAdress = baseUrl.concat(placeDetails)
  return (

<div className="sir m-4 row border bg-light ">
      <div className="first  col-md m-1 row">
        <div 
        className="dish_image col-lg-6 p-2 first  ">

        <img src={rest_data["Dish Picture"]}  
className="p-3"
style={{
  width:300,
  height:200
}}       
         alt="..." />
        </div>
        <div 
        className=" col-lg-6   dish-details mb-3 second">
          <h5 className="card-title">at 0.8kms </h5>
         <h5>
         <a href={locationAdress} target="_blank" className="">
Direction
          </a>
         </h5>
          <div>           
        </div>
        <div>
         <p className="h5">
             18$  <span className="phone_btn  " data-toggle="collapse"
             
             data-target={`#collapse-${rest_data["Sr#"]}`} 
             
             >
              
             <i class="fa fa-phone text-primary" aria-hidden="true"></i>
          
              </span>

<div id={`collapse-${rest_data["Sr#"]}`} class="collapse ">
<p className="h5 text-primary ">
{rest_data["Phone"]}
            </p>
</div> 
            </p>
          </div>
         <div>
         <p className="h5">
{rest_data["Restaurant Name"]}
            </p>
          </div>
          <div>
   
          </div>




          <div className="insta-toggle">
            <b>
              <a href={rest_data["Website"]} >Instagram</a>
            </b>{" "}
          </div>
        </div>
      </div>
      <div className="row col-lg m-1">
        <div className="insta col-lg-4  m-1">
          <h4 style={{ marginTop: "50%" }}>
            <a href={rest_data["Website"]}>Instagram</a>
          </h4>
        </div>
        <div id="rest-img" className="rest-img col-lg-6  p-2">
        <img src={rest_data["Restaurant Picture"]} className="p-3 first" 
        style={{
          width:300,
          height:200
        }}
        alt="..." />
          
        </div>
      </div>
    </div>
  );
};

export default DishCard;
