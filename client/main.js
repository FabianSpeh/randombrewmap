import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
var randomUrl = "https://www.random.org/integers/?num=1&min=1&max=8033&col=1&base=10&format=plain&rnd=new";
var breweryUrl ="https://api.openbrewerydb.org/breweries/"
var mapUrl ="https://api.mapbox.com/geocoding/v5/mapbox.places/"
const mapBoxApiKey = "access_token=pk.eyJ1Ijoic2hhZGl1eDI3IiwiYSI6ImNrZWVvYjV3bjBpcWsyd250dHpweXMwMXMifQ.s6JgdRCtR44ksGe3b4gVeQ";
var streetViewUrl = "https://maps.googleapis.com/maps/api/streetview?location="
var streetViewApiKey = "&key=AIzaSyCluzv5P8PZKny4nJGpPt_i0G20xY5Zre8";
var streetViewOpt = "&size=456x456";

const getRandomNumber = async () => {

    const response = await fetch(randomUrl);
   const randomNumber = await response.text();
console.log(randomNumber);
     await getBrewery(randomNumber);





}

const getBrewery = async (randomNum) =>  {

const combinedUrl =  breweryUrl + randomNum;
const response = await fetch(combinedUrl);
const data = await response.json();

const location = data.street + " " + data.city +".json?";
const name = data.name;
console.log(location);
console.log(name);

await getCoordinates(location,name);





}

const getCoordinates = async (location,name) => {

    const combinedUrl = mapUrl + location + mapBoxApiKey;
    const response = await fetch(combinedUrl)
    const data = await response.json();
    console.log(data);

    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];
    console.log(latitude);
    console.log(longitude);


const cordArray = [latitude, longitude];
mymap.panTo(cordArray)

    ;
  const marker=   L.marker(cordArray,{icon:redIcon}).addTo(mymap);
    var pointOffset = L.point(2.5, -42);


    marker.bindTooltip(name,{direction:"top", offset:pointOffset, permanent:true}).openTooltip();

    marker.bindPopup("dude")
    getStreetViewImage(latitude,longitude);

}
const getStreetViewImage = async (latitude, longitude) => {

    const latLong = latitude +"," + longitude;
   const combinedUrl = streetViewUrl + latLong + streetViewOpt + streetViewApiKey;
   console.log(combinedUrl);


}



Template.map.onCreated(function mapOnCreated() {

    getRandomNumber();

});
