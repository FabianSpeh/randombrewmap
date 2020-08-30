# RandomBrewMap

## Description of the App

With **RandomBrewApp**, you're able to locate a random Brewery in the World in a matter of seconds with the click of one Button!

It utilizes several Api's such as [Random.org](https://www.random.org/), [Open Brewery DB](https://www.openbrewerydb.org/),[Mapbox](https://www.mapbox.com/), and the [Google Api](https://cloud.google.com/maps-platform?hl=de) 
to give you the exact Position of a random Brewery, including a picture of the inside or the surroundings, displaying it on a Map, using the Leaflet library,

### Detailed Description

Firstly, a random Number is fetched from Random.org, which is then fed into the OpenBreweryDB to fetch a random Entry of the Database. 
From that we'll get an address, which can be fed into the MapboxAPI, to geocode it into more accurate Coordinates. 
These Coordinates will be used to center the map on the specific position and place a marker with a tooltip, showing the name of the brewery.
Lastly,the coordinates will also be fed into the [Google Maps Street View Static API](https://developers.google.com/maps/documentation/streetview/overview), which will generate an image (if available) of the inside of the building or the surroundings(depending on whats available). 
The image is inside a popup, which is bound to a marker, which can be accessed by clicking on the marker.

## Installation instructions

### Getting Started

These instructions will get you a local copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need these pieces of software installed on your system


[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


[Chocolatey](https://chocolatey.org/install)


[Meteor](https://www.meteor.com/install)

### Installing

#### Git

**Linux:**  type `$ sudo apt install git-all` into the terminal


**macOS:** type `git --version` into the terminal. If you don't have it installed already, it will prompt you to install it.


**Windows** Visit this [link](https://git-scm.com/download/win), which should automatically start your installation of Git for Windows.





