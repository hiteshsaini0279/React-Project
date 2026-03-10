import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';


export default function InfoBox( ) {
    const INIT_IMG_URL="https://images.unsplash.com/photo-1652683376293-0e5144ab1b03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpcnR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let weatherInfo ={
        city: "Delhi",
        feelsLike:32.25,
humidity: 11,
pressure:1013,
temMin: 34.88,
temp: 34.88,
tempMax: 34.88,
weather: "broken clouds"
    }
    return (
        <div className="infobox"><h1> weather info- {weatherInfo.weather}</h1>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}  component={"span"}>
         <p>Temperature: {weatherInfo.temp}°C</p>
           <p>Humidity: {weatherInfo.humidity}</p>
             <p>Minimum temperature: {weatherInfo.temMin}°C</p>
             <p>Maximum temperature: {weatherInfo.tempMax}°C</p>
               <p>The weathercan be described as <b>{weatherInfo.weather}</b>  and  feels Like: {weatherInfo.feelsLike}°C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
    );
}