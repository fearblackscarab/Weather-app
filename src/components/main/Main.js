import React, { useEffect, useState } from "react";

const Main = () => {
    const [weather, setWeather] = useState({});
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [grid, setGrid] = useState({});

    const [clicked, setClicked] = useState(false);
    const [weatherUpdated, setWeatherUpdated] = useState(false);
    const [positionUpdated, setPositionUpdated] = useState(false);

    useEffect(() => {
        if (clicked) {
            getPosition();
            setPositionUpdated(true);
        }
    }, [clicked])

    useEffect(() => {
        if (positionUpdated) {
            getWeather();
            setWeatherUpdated(true);
        }
    }, [latitude]);

    useEffect(() => {
        if (weatherUpdated) {
            getGrid();
        }
    }, [weather])


    const clickHandle = () => {
        setClicked(true);
    };

    const getPosition = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
        });
        // return(latitude,longitude)
    };

    const getWeather = () => {
        fetch(`https://api.weather.gov/points/${latitude},${longitude}`).then(res => res.json()).then(data => setWeather(data));
        // return(weather)
    };

    const getGrid = () => {
        const url = `https://api.weather.gov/gridpoints/${weather.properties.cwa}/${weather.properties.gridX},${weather.properties.gridY}/forecast/hourly`
        fetch(url).then(res => res.json()).then(data => setGrid(data));
        // return(grid)
    };

    const testClick=()=>{
        console.log(weather)
        console.log(latitude, longitude)
        console.log(grid)
    }
    return (
        <main className='main' id='main'>
            <div className="container">
                {!clicked && <button className="weather-button" onClick={clickHandle}>Weather</button>}
                {clicked && <button className="test" onClick={testClick}>Test</button>}
            </div>
        </main>
    )
};

export default Main;