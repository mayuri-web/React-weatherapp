import React, {useState, useEffect} from 'react';
import './Style.css';

const Weather = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState();

    useEffect(() => {
        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=5c66ac36dfb83b04269796ea2fc6d77b`;
            const response = await fetch(url);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);

        }
        fetchApi();
    },[search]);

    return(
        <>
            <div className="box">
                <div className="search">
                    <input type="search" 
                        className="inputFeild"
                        value={search}
                        onChange={(event)=>{setSearch(event.target.value)}}
                    />
                </div>
                {!city ? (<p>No data found...!</p>): 
                   (<div>
                        <div className="info">
                            <h3>
                                <i className="fas fa-street-view"></i> {search}
                            </h3>
                            <h1 className="temp">
                                {city.temp} &deg;C
                            </h1>
                            <h4 className="temp-max">
                               Min: {city.temp_min} &deg;C | Max: {city.temp_max} &deg;C
                            </h4>
                        </div>
                    </div>
                )}
               
            </div>
        </>
    );
};

export default Weather;