import { useEffect, useState } from "react";
import "./Weather.css";
import axios from "axios";

const Weather = () => {

    const [weatherState, setWeatherState] = useState(null);
    const [userInput, setUserInput] = useState("");

    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });


    let apikey = '8714c7a50bd03179f53fc61a9fdbdb5a'


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(success, error);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    async function success(position) {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)

        console.log(res.data);
        setWeatherState(res.data);

    }

    async function error(e) {
        e.preventDefault();
        try {
            if (userInput === "") {

                let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=${apikey}&units=metric`)

                console.log(res.data);
                setWeatherState(res.data);

            } else {
                let res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apikey}&units=metric`)

                console.log(res.data);
                setWeatherState(res.data);
            }
            setUserInput("");
        } catch (error) {
            console.log(error.message);
            alert("Please enter a valid city name");
            setUserInput("");
        }

    }

    useEffect(() => {
        getLocation()
    }, [])

    return (
        <>
            {!weatherState ?
                <div id="preloader">
                    <div id="loader"></div>
                </div>
                :
                <>  <div className="weather-container">
                    <div>
                        <h1 className="dateHeading">{date}</h1>
                        <h1 className="cityHeading">{weatherState.name}</h1>

                        <h4 className="tem">{weatherState?.main?.temp}°</h4>
                        <h1 className="weatherSay">{weatherState.weather[0].main}</h1>


                        <div className="iconParent">
                            <div className="weatherIcon">
                                <img className="iconName" src={`https://openweathermap.org/img/wn/${weatherState.weather[0].icon}@2x.png`} alt="" width={"60px"} />
                            </div>
                        </div>


                        <div className="weatherMain">
                            <img
                                src="../../../images/871d2b381a2d123d573934db8a4bd7505ccd1ea9.png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                    <div className="inputSearchbox">


                        <input value={userInput} onChange={(e) => setUserInput(e.target.value)} type="text" placeholder="Enter city name..." />

                        <button onClick={(e) => error(e)}>Check Weather</button>

                    </div>

                </>}





        </>
    );
};

export default Weather;
