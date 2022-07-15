import React, { useEffect, useState } from 'react'

function WeatherInformation() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);

    const apiKeys = "affbf4019d2af36058239af03dc46ee6"
    // useEffect(() => {
    //     const url = "https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=affbf4019d2af36058239af03dc46ee6";

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url);
    //             const json = await response.json();
    //             console.log(json.main.temp);
    //             setData(json.main.temp)

    //         } catch (error) {
    //             console.log("error", error);
    //         }
    //     }
    //     fetchData();
    // }, []);

    const getWeatherData = async (cityName) => {
       
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=affbf4019d2af36058239af03dc46ee6";
        console.log(cityName);

        try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setData(json)
            console.log(data);

        } catch (error) {
            console.log("error", error);
        }

    }
    const inputCity = (event) => {
        // console.log(event.target.value);
        setInput(event.target.value)

    }
    const onSearch = () => {
        getWeatherData(input)
    }
    return (

        <>


            <div className='container weatherBg '>

                <div className='col-md-4'></div>
                <div className='col-md-5'>
                    <h1 className="text-white ">  WeatherInformation</h1>
                </div>
            </div>
            <br />
            <div className='container row '>

                <div className='col-md-4'></div>
                <div className='col-md-4'>
                   
                        <input className='form-control' onChange={(event) => inputCity(event)} /> <br />
                        <button className='btn btn-primary' onClick={onSearch}>Search</button>
                    
                 
                </div>
                <div className='row'>
                <div className='col-md-4'>
                <b>WindSpeed : </b>   {data?.wind?.speed}
                </div>
                <div className='col-md-4 temp'>
                    <img src="weatherimages/weatherpics.webp"></img>
                   <b>Temperature:</b> {data?.main?.temp}
                    </div>
                    <div className='col-md-4'>
                    {data?.weather[0].main} today
                    </div>
                    {/* temperature: {data} */}
                </div>
            </div>

        </>
    )
}

export default WeatherInformation