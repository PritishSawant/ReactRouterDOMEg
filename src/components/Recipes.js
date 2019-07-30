import React from "react";
import {Link} from "react-router-dom";


const Recipes = (props) => (
    <div className="container">
    <div className="row">
        {props.users.map((user)=>{
            return (
              <div className="col-md-4"  key={user.id} style={{marginBottom:"2rem"}}>
              <div  className="recipes__box">
              <img className="recipes__box-img" src={user.url} alt={user.title}/>
                <div className="recipe__text">
                <h5>{user.title}</h5>
                <button><Link to={{
                  pathname: `/recipe/${user.id}`,
                  state: {user: user}}}>View Recipe</Link></button>
                </div>
              </div>
              </div>
            )
          })}
          </div>
    </div>
);

export default Recipes;