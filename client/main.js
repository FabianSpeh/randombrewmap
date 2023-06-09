import { Template } from 'meteor/templating';

import './main.html';
var randomUrl = "https://www.random.org/integers/?num=1&min=1&max=8033&col=1&base=10&format=plain&rnd=new";
var breweryUrl ="https://api.openbrewerydb.org/breweries/"
var mapUrl ="https://api.mapbox.com/geocoding/v5/mapbox.places/"
const mapBoxApiKey = "access_token=pk.eyJ1Ijoic2hhZGl1eDI3IiwiYSI6ImNrZWVvYjV3bjBpcWsyd250dHpweXMwMXMifQ.s6JgdRCtR44ksGe3b4gVeQ";
var streetViewUrl = "https://maps.googleapis.com/maps/api/streetview?location="
var streetViewApiKey = "&key=AIzaSyCluzv5P8PZKny4nJGpPt_i0G20xY5Zre8";
var streetViewOpt = "&size=400x400";


const getRandomNumber = async () => {

    const response = await fetch(randomUrl);
   const randomNumber = await response.text();

     await getBrewery(randomNumber);






}

const getBrewery = async (randomNum) =>  {

const combinedUrl =  breweryUrl + randomNum;
const response = await fetch(combinedUrl);
const data = await response.json();

const location = data.street + " " + data.city +".json?";
const name = data.name;

await getCoordinates(location,name);





}

const getCoordinates = async (location,name) => {

    const combinedUrl = mapUrl + location + mapBoxApiKey;
    const response = await fetch(combinedUrl);
    const data = await response.json();


    const longitude = data.features[0].center[0];
    const latitude = data.features[0].center[1];


const cordArray = [latitude, longitude];
mymap.flyTo(cordArray)


    ;
  const marker=   L.marker(cordArray,{icon:redIcon}).addTo(mymap);
    var pointOffset = L.point(2.5, -42);
    var pointOffset2 = L.point(0,250);

    marker.bindTooltip(name,{direction:"top", offset:pointOffset, permanent:true}).openTooltip();

    const latLong = latitude +"," + longitude;
    const combinedUrlg = streetViewUrl + latLong + streetViewOpt + streetViewApiKey;

    var popupImg = document.getElementById("streetView");
    popupImg.src=combinedUrlg;



    marker.bindPopup("<img src=" + "'" +combinedUrlg +"'" +"alt='Google Streetview Image'" +"/>", {maxHeight: 500, maxWidth: 500, offset:pointOffset2});




}
const getStreetViewImage = async (latitude, longitude) => {



   const response = await fetch(combinedUrl);




}



Template.map.onCreated(function mapOnCreated() {

var html = document.getElementsByTagName("html")[0];
var att = document.createAttribute("lang");
att.value="en";
html.setAttributeNode(att);

});

Template.button.events({
    'click button'(event,instance){
        getRandomNumber();
        document.getElementsByClassName('pulse')[0].style.overflow ="hidden";



    }


})
