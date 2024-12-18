import React from 'react'
import useFetch from './useFetch'

const Palakkad = () => {
    const Details= useFetch("https://api.openweathermap.org/data/2.5/weather?q=PALAKKAD&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric")

  return (
    <div>
        <div className='parent'>
            <h1>Weather App</h1>

        <div className='child'>
{Details && (
        <div className='subChild'>
            <h2>{Details.name}</h2>
            <h6 className='mt-5'><i class="fa-solid fa-temperature-quarter"></i> Temperature :{Details.main.temp} </h6>
            <h6 className='mt-5'><i class="fa-solid fa-cloud"></i> Weather :{Details.weather[0].main} </h6>
            <h6 className='mt-5'><i class="fa-solid fa-droplet"></i> Humidity :{Details.main.humidity} </h6>
            <div className=' d-flex justify-content-center mt-5'>
                <div className='sunRise p-5 bg-dark me-5 rounded' >Sunrise <br />{new Date(Details.sys.sunrise * 1000).toLocaleTimeString()}</div>
                <div className='sunSet p-5 bg-dark rounded'>Sunset <br />{new Date(Details.sys.sunset * 1000).toLocaleTimeString()}</div>
            </div>
        </div>
    )}
      ~
      
    </div>
  </div>
  </div>
  )
}

export default Palakkad