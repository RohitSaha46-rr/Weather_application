import React, { useState } from 'react';
import './content.css';
import './media.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSmog, faSnowman, faSun, faTemperatureLow } from '@fortawesome/free-solid-svg-icons';
import cloud from './images/cloud.jpg';
import sunny from './images/sunny.jpg';
import mist from './images/mist1.jpg';
import snow from './images/snow1.jpg';
import smoke from './images/mist.jpg';
import rain from './images/rain.jpg';
export default function Content() {
    
    const[city,updated]=useState("");
    const[city_name,updated_city_name]=useState("");
    const[date,updated_date]=useState("");
    const[month,updated_month]=useState("");
    const[year,updated_year]=useState("");
    const[day,updated_day]=useState("");
    const[country,updated_country]=useState("");
    const[temp,updated_temp]=useState("");
    const[icons,updated_icons]=useState("");
    const[C,updated_c]=useState("");
    const[feels_like,update_feels_like]=useState("");
    const[desc,updated_desc]=useState("");
    const[icons_desc,updated_icons_desc]=useState("");
    const[hum,updated_hum]=useState("");
    const[wind,updated_wind]=useState("");
    const[ctime,updated_time]=useState("");
    const change_input=(e)=>{
        updated(e.target.value);
    }
    const cssstyle={};
    const cssstyle1={};
    
    const temperature=async()=>{
        
        alert("Note-It only fetches date and time of current location");
        let d=new Date();
        let months=[
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Oct",
            "Nov",
            "Dec",
        ]
        let days=[
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat",
            "Sun",
        ]
        
   
             let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eab8741cffef065d35493b03f5772fd6&lang=en`;
             
             const jsondata=await fetch(url);
             if (jsondata.status >= 200 &&jsondata.status <= 299)
             {
             const jsdata=await jsondata.json();
             const arrdata=[jsdata];
             const data_name=arrdata[0].name;
             let country_name=arrdata[0].sys.country;
             let temp_name=arrdata[0].main.temp;
             let feels_like_name=arrdata[0].main.feels_like;
             console.log(jsdata.name);
             updated_date(d.getDate()+" "+"|");
             updated_month(months[d.getMonth()]+" "+"|");
             updated_year(d.getFullYear());
             updated_day(days[d.getDay()]);
             updated_city_name(data_name+",");
             updated_country(country_name);
             updated_temp(temp_name+" ");
             updated_icons(faTemperatureLow);
             updated_c("C");
             update_feels_like("Feels like "+feels_like_name+" ");
             updated_desc(arrdata[0].weather[0].main);
             updated_hum("Humidity "+arrdata[0].main.humidity+" "+"||"+" ");
             updated_wind("Wind Speed "+arrdata[0].wind.speed);
             const updateTime=()=>{
                let time=new Date().toLocaleTimeString();
                updated_time(time);
                
             }
             setInterval(updateTime,1000);
             
             if(arrdata[0].weather[0].main=="Clear" || arrdata[0].weather[0].main=="Sunny"){
             updated_icons_desc(faSun);
             
             }
             else if(arrdata[0].weather[0].main=="Snow"){
                 updated_icons_desc(faSnowman);
             }
             else if(arrdata[0].weather[0].main=="Smoke"){
                updated_icons_desc(faSmog);
            }
             else{
                 updated_icons_desc(faCloud);
             }
             
            
        }
        else{
            alert("Opps!That's a wrong city");
        }
             
             
        
    }
    
            if(desc=="Clouds"){
              cssstyle.backgroundImage=`url(${cloud})`;
              cssstyle.backgroundSize="100% 100%";
              cssstyle.color='black';
              cssstyle1.color="#cbb8b8";
            }
            else if(desc=="Clear" || desc=="Sunny"){
                cssstyle.backgroundImage=`url(${sunny})`;
                cssstyle.backgroundSize="100% 100%";
                cssstyle.color='rgb(41 38 38)';
                cssstyle1.color='yellow';
            }
            else if(desc=="Mist" || desc=="Fog" || desc=="Haze"){
                cssstyle.backgroundImage=`url(${mist})`;
                cssstyle.backgroundSize="100% 100%";
              cssstyle.color="#25efdc";
              cssstyle1.color="#cbb8b8";
              
            }
            else if(desc=="Smoke"){
                cssstyle.backgroundImage=`url(${smoke})`;
                cssstyle.backgroundSize="100% 100%";
                cssstyle.color="#4f3a3a";
            }
            else if(desc=="Rain"){
                cssstyle.backgroundImage=`url(${rain})`;
                cssstyle.backgroundSize="100% 100%";
                cssstyle.color="violet";
            }
            else if(desc=="Snow"){
                cssstyle.backgroundImage=`url(${snow})`;
                cssstyle.backgroundSize="100% 100%";
              cssstyle1.color="#200463";
             
            }
        

  return <div className='content' style={cssstyle}>
  
  <div className='container'  >
      <div className='top'>
      <i class="fa-solid fa-magnifying-glass"></i>
          <input type="search" placeholder='Search' value={city} onChange={change_input}></input>
          <button onClick={temperature}>CLICK</button>
      </div>
      
         <div className='inside'>
      <div className='middle'>
      
          <h1 className='day'>{city_name}<span >{country}</span></h1>
          <h2 style={{paddingTop:"10px",fontFamily:"'Cabin', sans-serif"}}>{date}  {month} {year}</h2>
          <h1 className='day2' style={{paddingTop:"10px",fontFamily:"'Luxurious Roman', cursive"}}>{temp}<span><FontAwesomeIcon icon={icons}></FontAwesomeIcon></span>{C}</h1>
          <h4 style={{fontSize:"1.1rem",paddingTop:"2px"}} >{feels_like}<span><FontAwesomeIcon icon={icons}></FontAwesomeIcon></span>{C}</h4>
          <h1 className='day1' >{day} <span style={{paddingLeft:"10px"}}>{desc}</span> <span><FontAwesomeIcon icon={icons_desc} style={{paddingLeft:"10px",cssstyle}} ></FontAwesomeIcon></span></h1>
          <h2 className='day3' style={{paddingTop:"10px",fontFamily:"'Luxurious Roman', cursive"}} >{hum}<span>{wind}</span></h2>
          <h1 style={{paddingTop:"15px",color:"red",fontFamily:"'Orbitron', sans-serif"}}>{ctime}</h1>
      </div>
      </div>

      
      
  </div>

  </div>;
}
