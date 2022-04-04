import { Component } from 'react'
import axios from "axios";
class Weather extends Component{
    constructor(){
        super();
        this.state ={lat: null,lon: null,errMessage: ""};
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude,lon:position.coords.longitude}),
            err=>this.setState({errMessage: err.message})
        );
        this.state = {
            name: null,
            country: null,
            icon: null,
            temp: null,
            description: null,
        }
    }

    render(){
        if(this.state.errMessage && !this.state.lat && !this.state.lon){
            return <div>Error: {this.state.errMessage}</div>
        }
        if(!this.state.errMessage && this.state.lat && this.state.lon){
            // let apikey='80e6b58bceb13338394f87315778aff1' //mail datuqps
            // let apikey = '1f98507fc39b95c9a1923197698de6b2'  // mail datung2k
            let apikey = '6be64554eb49637be2a0a35ebc923cd0'
            let url = `http://api.openweathermap.org/data/2.5/weather?lang=vi&lat=${this.state.lat}&lon=${this.state.lon}&units=metric&appid=${apikey}`
            axios.get(url).then((e)=>{
                this.setState({name:e.data.name,country:e.data.sys.country,icon:e.data.weather[0].icon,temp:e.data.main.temp,description:e.data.weather[0].description})
            })
            return <div className='city'>
                <h4 className='city-name'>
                    <span>{this.state.name}</span>
                    <sup>{this.state.country}</sup>
                </h4>
                <div className='city-temp'>
                    {Math.round(this.state.temp)}
                    <sup>&deg;C</sup>
                </div>
                <div className='info'>
                    <img className='city-icon' src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} alt={this.state.description}></img>
                    <p>{this.state.description} <br /></p>
                </div>
            </div>
        }
        return <div>Loading!</div>
    }
}
export default Weather