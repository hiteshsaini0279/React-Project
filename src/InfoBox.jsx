import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';


export default function InfoBox({info}) {
    const INIT_IMG_URL="https://images.unsplash.com/photo-1652683376293-0e5144ab1b03?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGRpcnR5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return (
        <div className="infobox"> 
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={INIT_IMG_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
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