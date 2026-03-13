import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({info}) {
    const INIT_IMG_URL="https://images.unsplash.com/photo-1652683376293-0e5144ab1b03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpcnR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL="https://images.unsplash.com/photo-1519937010618-f8c8b7e135b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D";
const HOT_URL="https://images.unsplash.com/photo-1691422066850-de273fe9008d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U1VNTUVSJTIwSE9UfGVufDB8fDB8fHww";
const RAIN_URL="https://images.unsplash.com/photo-1620385019253-b051a26048ce?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    return (
        <div className="infobox"> 
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp<15?COLD_URL:info.temp>30?HOT_URL:INIT_IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<ThunderstormIcon></ThunderstormIcon>:info.temp<15?<AcUnitIcon></AcUnitIcon>:info.temp>30?<SunnyIcon></SunnyIcon>:<SunnyIcon></SunnyIcon>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
         <p>Temperature: {info.temp}°C</p>
           <p>Humidity: {info.humidity}</p>
             <p>Minimum temperature: {info.temMin}°C</p>
             <p>Maximum temperature: {info.tempMax}°C</p>
               <p>The weathercan be described as <b>{info.weather}</b>  and  feels Like: {info.feelsLike}°C</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    );
}