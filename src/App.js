import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe.js';

function App() {
    const apiId = "875435a7";
    const apiKey = "33fa20c71ba7386f37ce0b023ca8c31a";
    const [Recipes , setRecipes] = useState([]);
    const [Search, setSearch] = useState('');
    const [query, setQuery] = useState("");

    useEffect(
        () => {
          getRecipes();
        },[query]
    );

    const getRecipes = async() => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}n&app_id=${apiId}&app_key=${apiKey}`);
        const data = await response.json();
        setRecipes(data.hits);
    };

    const updateSearch = e =>{
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(Search);
        setSearch('');
    }

    return ( <div className = "App" >
        <form className="search-form" onSubmit={getSearch}>
        <input className = "search-bar" type = "text" value={Search} onChange={updateSearch} />
        <button className = "search-button"type = "submit" > Get Recipe </button>
        </form >
            <div className="recipes">
                {Recipes.map( recipe =>(
                    <Recipe 
                    key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    img={recipe.recipe.image}
                    ingredients = {recipe.recipe.ingredients}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;