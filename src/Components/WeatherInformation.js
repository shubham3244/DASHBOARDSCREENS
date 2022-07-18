import React, { useEffect, useState } from 'react'

function WeatherInformation() {
    const [input, setInput] = useState('');
    const [data, setData] = useState(null);

    const apiKeys = "affbf4019d2af36058239af03dc46ee6"
    const country = [{
        id: 1,
        countryName: 'Usa',
        countryCode:'usa'

    },
    {id:2,
        countryName:'India',
        countryCode:'ind'

    }]
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
            if (json.cod == 200) {
                setData(json)
                console.log(data);
            }
            else {
                setData(null)
            }



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

            {/* <head>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
</head> */}
            <div className='container weatherBg '>

                <div className='col-md-4'>

                </div>
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
                <br />
                <div className='row'>
                    <div className='col-md-4'>

                        <b> <i class='fas fa-wind'></i>: </b>   {data?.wind?.speed}
                    </div>
                    <div className='col-md-4 temp'>
                        <i class='fas fa-temperature-high'></i>


                        {/* <i class="fa-solid fa-temperature-half"></i> <br/> */}
                        <b>     <i class="fa-solid fa-temperature-half"></i>:</b> {data?.main?.temp}
                    </div>
                    <div className='col-md-4'>
                        <b>{data?.weather[0]?.main}</b>   today
                    </div>
                    {/* temperature: {data} */}
                </div>
            </div>

        </>
    )
}

export default WeatherInformation