import React, { useEffect, useState } from "react";


function Weathers() {

  function temp_img(){

    let i1='https://cdn-icons-png.flaticon.com/512/6122/6122561.png' //cloud
    let i2='https://cdn-icons-png.freepik.com/256/10603/10603913.png?semt=ais_hybrid'//sun
    let i3='https://cdn-icons-png.flaticon.com/512/4668/4668769.png' //thunder
    let i4='https://cdn-icons-png.freepik.com/512/4970/4970412.png' //rain
  
    let arr= [i1,i2,i3,i4]
  
    let arr_index = Math.floor(Math.random() * (arr.length+1))

    return setImage(arr[arr_index])
  }

  
  const [city, setCity] = useState("");
  const [country_name,setCountry] = useState("")
  const [wind,setWind] = useState('')
  const [temp,setTemp] = useState('')
  const [humidity,setHumidity] = useState('')
  const [temperatureApparent,setTemperatureApparent] = useState('')
  const [image,setImage] = useState('')

  useEffect(()=>{
    temp_img();
    const fetchdata = async ()=>{

      const b = await fetch(`https://api.tomorrow.io/v4/weather/realtime?location=delhi&apikey=TUXLr5VrNZF5QqnAJzfX3yFEPq0F6aL9`)
      const delhidata = await b.json();
      console.log(delhidata);

      setCountry(delhidata.location.name)
      setTemp(delhidata.data.values.temperature)
      setHumidity(delhidata.data.values.humidity)
      setWind(delhidata.data.values.windSpeed)
      setTemperatureApparent(delhidata.data.values.temperatureApparent)

    }
    fetchdata();
    
    

  },[])


  async function onsearch () {
    temp_img();
    const a = await fetch(
      `https://api.tomorrow.io/v4/weather/realtime?location=${city}&apikey=TUXLr5VrNZF5QqnAJzfX3yFEPq0F6aL9`)
      let alldata = await a.json();
      console.log(alldata)

      setCountry(alldata.location.name)
      setTemp(alldata.data.values.temperature)
      setHumidity(alldata.data.values.humidity)
      setWind(alldata.data.values.windSpeed)
      setTemperatureApparent(alldata.data.values.temperatureApparent)
      
      ;
      setCity('')

  };

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
            <h1 className="box-content text-3xl font-bold bg-gradient-to-r from-black to-gray-600 text-transparent bg-clip-text mb-4">{country_name}</h1>

            <div className="text-5xl font-bold bg-black text-transparent bg-clip-text drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,0.8)]">
              {temp}℃ 
            </div>
        </div>
        <div className="w-32 aspect-square border-4 border-zinc-600 rounded-full flex justify-center items-center">
        <img
          src={image}
          className="w-24 aspect-square "
          alt="sun"
        />
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
          <div className="text-3xl font-extrabold " >{humidity} %</div>
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
            <span className="text-3xl font-extrabold ">{wind}</span > <span className="font-bold text-xl">Km/h</span>
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

          <span className="text-3xl font-extrabold ">{temperatureApparent}</span><span className="text-3xl font-bold">℃</span>
          </div>
        </div>
      </div>


      
    </div>
  );
}

export default Weathers;
