import "./Weather.css";

const Weather = () => {
    const date = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    return (
        <>
            <div className="weather-container">
                <div>
                    <h1 className="dateHeading">{date}</h1>
                    <h1 className="cityHeading">Karachi</h1>

                    <h4 className="tem">19°</h4>
                    <h1 className="weatherSay">Mostly Clear</h1>

                    <div className="weatherIcon">
                        <img
                            className="iconName"
                            src="https://w1.pngwing.com/pngs/1013/247/png-transparent-love-black-and-white-rain-icon-design-symbol-weather-cloud-openweathermap-black-and-white.png"
                            alt=""
                            width={"60px"}
                        />
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
                <input type="text" placeholder="Enter city name..." />
                <button>Check Weather</button>
            </div>

        </>
    );
};

export default Weather;
