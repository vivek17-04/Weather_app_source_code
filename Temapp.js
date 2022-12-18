import React, { useEffect, useState } from "react";
import './css/style.css';

const Temapp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    const date = new Date;
    

    useEffect(() => {
        let timerOut = setTimeout(() =>{ 
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${process.env.REACT_APP_API_KEY}`
            const response = await fetch(url);
            const reJson = await response.json();
            console.log(reJson);
            setCity(reJson.main);
        }
        fetchApi();
    }, 500);

    return () =>clearTimeout(timerOut);
    }, [search])

    return (
        <>
        <div className="container">
            <h1 className="heading">Search Live Weather</h1>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        placeholder="Enter place"
                        className="inputField"
                        value={search}
                        onChange={(event) => { setSearch(event.target.value) }}
                    />
                </div>

                {
                    !city ? (
                        <p className="errorMsg">No Data Found</p>
                    ) : (
                            <div className="info">
                                <h2 className="location">
                                    <i className="fa fa-street-view" aria-hidden="true"></i>{search}
                                </h2>
                                <h1 className="temp">
                                    {city.temp}&#176;Cel
                                </h1>
                                <h3 className="tempmin_max">Min : {city.temp_min}&#176;Cel | Max : {city.temp_max}&#176;Cel</h3>

                            </div>
                    )
                }

            </div>
            <footer>
                <p>Copyright &copy; {date.getFullYear()} All Rights Reserved</p>
                <p>Made by Mr.Tech (vivek) ❤️</p>
            </footer>
            </div>

            
        </>
    );
}

export default Temapp;