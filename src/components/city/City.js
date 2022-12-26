import React, {useEffect} from "react";
import './city.css'

export const City = ({city, setCity, setData}) => {

    useEffect(() => {
        weatherInfo();

        console.log(document.getElementById('display'));
    }, [city]);

    const handleSubmit = e => {
        e.preventDefault();
        const city = document.getElementById('city').value;
        document.getElementById('city').value = '';
        setCity(city);
        console.log('this is city', city);
    };

    const weatherInfo = async () => {
        try {
            const res = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${city}&days=5`);
            const data = await res.json();
            console.log(data);

            setData(data);
        }catch(err) {
            console.log(err);
        }
    };


    return (
        <div id="city-container">
            <form onSubmit={handleSubmit}>
                <input placeholder="City" id="city"/>
                <input id="searchCity" type="submit" value='Search City' />
            </form>
        </div>
    )
};