import React from "react";
import Card from "./Card";
import movies from "../movies";

const App = () => {
    return (
        <div>
            <h1 className="text-center text-white">🎞 My movies</h1>
            <Card
                name={movies[0].name}
                img={movies[0].img}
                like={movies[0].like}
                year={movies[0].year} 
            />

            <Card
                name={movies[1].name}
                img={movies[1].img}
                like={movies[1].like}
                year={movies[1].year} 
            />

            <Card
                name={movies[2].name}
                img={movies[2].img}
                like={movies[2].like}
                year={movies[2].year} 
            />
        </div>
    );
};

export default App;