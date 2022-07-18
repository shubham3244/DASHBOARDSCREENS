import { Fragment, useState } from "react";


const Temp = () => {
    const [option, setOption] = useState(-1)
    const [selectData,setSelectData] = useState();
    const [countryCodes,setCountryCodes] = useState('');
    const [cityNames,setCityNames] = useState([]);
    const [data,setData] = useState('')
    const getWeatherData = async (cityName,countryCode) => {

        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName +","+countryCode+ "&appid=affbf4019d2af36058239af03dc46ee6";
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
    const country = [{
        id: 1,
        countryName: 'Usa',
        countryCode: 'usa'

    },
    {
        id: 2,
        countryName: 'India',
        countryCode: 'ind'

    }]
    const indiaCity = [{
        id: 1,
        cityName: 'Noida',
        mainId: 1

    },
    {
        id: 2,
        cityName: 'Agra',
        mainId: 1

    }]
   const usaCity = [
    {  id: 1,
        cityName: 'california',
        mainId: 2
    },



    {
        id: 2,
        cityName: 'New York',
        mainId: 2


    }

    ]
    const chooseCountry = (event) => {
        console.log(event.target.value);
    country.map(item=>{
        if(event.target.value==1){
            setCountryCodes(item.countryCode)
            setCityNames(usaCity)
            console.log(item.countryCode);
        }
        else 
        if(event.target.value==2){
            setCountryCodes(item.countryCode)
            setCityNames(indiaCity)
            console.log(item.countryCode);
        }
    
        
    })
    }
    const onSearch = () => {
        getWeatherData(cityNames,countryCodes)
    }
    const chooseCity = (event) => {
        console.log(event.target.value);
    cityNames.map(item=>{

        if(event.target.value==item.id){
            setCityNames(item.cityName)
            console.log(item.cityName);
        }
        
    })
    }
    return (
        <Fragment>
            <div class="container px-1 px-md-4 py-5 mx-auto">
                <div class="row d-flex justify-content-center px-3">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div class="card">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-10">
                                    <h2 class="ml-auto mr-4 mt-3 mb-0 text-end text-white">{data?.name} &nbsp;</h2>
                                    <p class="ml-auto mr-4 mb-0 med-font text-end text-white">

                                        &nbsp;
                                        <i class='far fa-snowflake'></i>
                                    </p>
                                    <h1 class="ml-auto mr-4 large-font text-end text-white">{data?.main?.temp}&#176;</h1>
                                </div>
                                <div className="col-md-1"></div>
                            </div>


                            <p class="time-font mb-0 ml-4 mt-auto text-white">&nbsp;08:30 <span class="sm-font">AM</span></p>
                            <p class="ml-4 mb-4 text-white">&nbsp;Wednesday, 18 October 2019</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>


                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-md-6">
                                <select className="form-control" placeholder="please select country" onChange={(event) => chooseCountry(event)}>
                                    <option value="0">Please select Country Name</option>
                                    {country?.map(item => (
                                        <option className="form-control" key={item.id} value={item.id} >{item.countryName}</option>
                                    )
                                )}
                                    {/* <option className="form-control" value="1">INDIA</option>
                                    <option className="form-control" value="1">USA</option> */}
                                </select>
                            </div>
                            <div className="col-md-6">
                                <select className="form-control" placeholder="please select city"  onChange={(event) => chooseCity(event)}>
                                    <option value="0">Please select City Name</option>
                                    {cityNames?.map(item => (
                                        <option className="form-control" key={item.id} value={item.id}>{item.cityName}</option>
                                    ))}
                                    {/* <option className="form-control" value="1">NOIDA</option>
                                <option className="form-control" value="1">AGRA</option> */}
                                </select>
                            </div>
                            <br />
                            &nbsp;
                            <button className="from-control btn btn-success" onClick={onSearch}>Search</button>
                        </div>



                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

        </Fragment>

    )
}
export default Temp;