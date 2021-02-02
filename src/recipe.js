import React from 'react';
import style from "./recipe.module.css";

const Recipe = ({title,calories,img,ingredients}) => {

    return(
        <div className={style.recipe}>
            <h1 className={style.title}>{title}</h1>
            <img className={style.img} src={img} alt=""/>
            <h3 className={style.ingre}>Ingredients needed :</h3>
            <ol >
                {ingredients.map(ingredient =>(
                    <li className={style.ingredient}>{ingredient.text}</li>
                ))}
            </ol>
            <p className={style.calories}>Calories = {Math.round(calories)}</p>
        </div>
    )
}

export default Recipe;