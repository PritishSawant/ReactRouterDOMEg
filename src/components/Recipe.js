import React from "react";


class Recipe extends React.Component {

state={
    activeRecipe: []
}




    render(){
        return(<div>
            <img className="recipes__box-img"
             src={this.props.location.state.user.url}
              alt={this.props.location.state.user.title}/>
<h1>{this.props.location.state.user.title}</h1>
            </div>);
    };
    
}

export default Recipe;