import React, { useEffect, useState } from "react";

function Weathers() {

  const [city, setCity] = useState("");
  const [country_name, setCountry] = useState("");
  const [wind, setWind] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temperatureApparent, setTemperatureApparent] = useState("");
  const [image, setImage] = useState("");
  const [imagetitle, setImagetitle] = useState("");

  useEffect(() => {
    const fetchdata = async () => {
      const b =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=0fa33726b2a1ce8ccc68724379aecbe3
`);
      const delhidata = await b.json();
      console.log(delhidata);

      setCountry(delhidata.name);
      setTemp(delhidata.main.temp);
      setHumidity(delhidata.main.humidity);
      setWind(delhidata.wind.speed);
      setTemperatureApparent(delhidata.main.feels_like);
      setImagetitle(delhidata.weather[0].main);

      if (delhidata.weather[0].main == "Clouds") {
        setImage("/images/Clouds.png");
        setImagetitle(delhidata.weather[0].main);
      } else if (delhidata.weather[0].main == "Clear") {
        setImage("/images/Clear.png");
        setImagetitle(delhidata.weather[0].main);
      } else if (delhidata.weather[0].main == "Rain") {
        setImage("/images/Rain.png");
        setImagetitle(delhidata.weather[0].main);
      } else if (delhidata.weather[0].main == "Drizzle") {
        setImage("/images/Drizzle.png");
        setImagetitle(delhidata.weather[0].main);
      } else if (delhidata.weather[0].main == "Haze" || "Mist") {
        setImage("/images/mist.png");
        setImagetitle(delhidata.weather[0].main);
      }
  


    };
    fetchdata();
  }, []);

  async function onsearch() {
    const a = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0fa33726b2a1ce8ccc68724379aecbe3
`
    );
    let alldata = await a.json();
    console.log(alldata);

    setCountry(alldata.name);
    setTemp(alldata.main.temp);
    setHumidity(alldata.main.humidity);
    setWind(alldata.wind.speed);
    setTemperatureApparent(alldata.main.feels_like);

    if (alldata.weather[0].main == "Clouds") {
      setImage("/images/Clouds.png");
      setImagetitle(alldata.weather[0].main);
    } else if (alldata.weather[0].main == "Clear") {
      setImage("/images/Clear.png");
      setImagetitle(alldata.weather[0].main);
    } else if (alldata.weather[0].main == "Rain") {
      setImage("/images/Rain.png");
      setImagetitle(alldata.weather[0].main);
    } else if (alldata.weather[0].main == "Drizzle") {
      setImage("/images/Drizzle.png");
      setImagetitle(alldata.weather[0].main);
    } else if (alldata.weather[0].main == "Haze") {
      setImage("/images/mist.png");
      setImagetitle(alldata.weather[0].main);
    }

    setCity("");
  }

  return (
    <div className="h-4/5 w-1/3 bg-gradient-to-tl from-indigo-300 from-10% via-sky-300 via-50% to-emerald-300 to-90% text-black p-10 flex justify-between flex-col rounded-3xl">
      <div className="flex justify-center">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City Name ..."
          className="bg-black text-white px-5 py-2 w-5/6 rounded-l-lg"
          type="text"
        />
        <img
          className="h-12 aspect-square bg-black cursor-pointer rounded-r-lg "
          src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg"
          alt="Search"
          onClick={onsearch}
        />
      </div>

      <div className="flex justify-between items-center p-5">
        <div className="flex justify-start items-start flex-col">
          <h1 className="box-content text-5xl font-bold bg-black text-transparent bg-clip-text mb-4">
            {country_name}
          </h1>

          <div className="text-5xl font-bold bg-black text-transparent bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
            {Math.round((temp - 273.15) * 100) / 100}℃
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="w-32 aspect-square  border-4 rounded-full border-indigo-950 p-3">
            <img src={image} className="w-32 aspect-square" alt="sun" />
          </div>

          <div className="text-2xl font-bold ">{imagetitle}</div>
        </div>
      </div>

      <div className="flex justify-evenly">
        <div className="flex flex-col  justify-center items-center">
          <div>
            <img
              className="m-2 w-24 aspect-square rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaozjcRXQDisPMSBmTJTI9iXYhMuk499dRpQ&ss"
              alt="Humidity"
            />
          </div>
          <div className="text-xl font-bold mb-3">Humidity</div>
          <div className="text-3xl font-extrabold ">{humidity} %</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="m-2 w-24 aspect-square rounded-full"
              src="https://i.pinimg.com/originals/db/7a/44/db7a4470c299c4d5ad0c11d513981ce9.jpg"
              alt="Wind"
            />
          </div>
          <div className="text-xl font-bold mb-3">Wind</div>
          <div>
            <span className="text-3xl font-extrabold ">{wind}</span>{" "}
            <span className="font-bold text-xl">Km/h</span>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <img
              className="m-2 w-24 aspect-square rounded-full"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRHFiaUs1FYlrvpRenysiOB-hBC9zBFKeDSQ&s"
              alt="Temp"
            />
          </div>
          <div className="text-xl font-bold mb-3">Feels Like</div>
          <div>
            <span className="text-3xl font-extrabold ">
              {Math.round((temperatureApparent - 273.15) * 100) / 100}
            </span>
            <span className="text-3xl font-bold">℃</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weathers;
