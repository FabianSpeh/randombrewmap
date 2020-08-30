# RandomBrewMap

## Description of the App

With **RandomBrewApp**, you're able to locate a random brewery in the world in a matter of seconds with the click of one Button!

It utilizes several Api's such as [Random.org](https://www.random.org/), [Open Brewery DB](https://www.openbrewerydb.org/),[Mapbox](https://www.mapbox.com/), and the [Google Api](https://cloud.google.com/maps-platform?hl=de) 
to give you the exact Position of a random Brewery, including a picture of the inside or the surroundings, displaying it on a map, using the [Leaflet library](https://leafletjs.com/),

#### Detailed Description

Firstly, a random Number is fetched from Random.org, which is then fed into the OpenBreweryDB to fetch a random Entry of the Database. 
From that we'll get an address, which can be fed into the MapboxAPI, to geocode it into more accurate Coordinates. 
These Coordinates will be used to center the map on the specific position and place a marker with a tooltip, showing the name of the brewery.
Lastly,the coordinates will also be fed into the [Google Maps Street View Static API](https://developers.google.com/maps/documentation/streetview/overview), which will generate an image (if available) of the inside of the building or the surroundings(depending on whats available). 
The image is inside a popup, which is bound to a marker, which can be accessed by clicking on the marker.

## Installation instructions

#### Getting Started

These instructions will get you a local copy of the project up and running on your local machine for development and testing purposes.

#### Prerequisites

You will need these pieces of software installed on your system


[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)


[Chocolatey (only for Windows)](https://chocolatey.org/install)


[Meteor](https://www.meteor.com/install)

### Installing

#### Git

**Linux:**  type `$ sudo apt install git-all` into the terminal


**macOS:** type `git --version` into the terminal. If you don't have it installed already, it will prompt you to install it.


**Windows** Visit this [link](https://git-scm.com/download/win), which should automatically start your installation of Git for Windows.

#### Chocolatey (only Windows)

1. Make Sure you are using Powershell or any other administrative shell
2. run the following command `Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))`


#### Meteor

**Linux/OSX:** Run the following command in your Terminal to install the lastest official **Meteor** release: `curl https://install.meteor.com/ | sh`


**Windows**: Run the command `choco install meteor` in your Powershell


### Get it up and Running

1. First you have to set up Git globally by running `git config --global user.name "Fabian Speh"` and `git config --global user.email "fabian.speh@mni.thm.de"` in your Terminal/Powershell. exchanging it with your own credentials.
2. Change directories to an empty repository and run the command `git clone https://git.thm.de/fsph90/randombrewmap.git`
3. Change into the directory you just cloned and run `meteor`. If you get an error that a module is missing you might have to run `meteor npm install --save @babel/runtime`
4. If you followed all the steps correctly until now, the app should now be running on [http://localhost:3000/](http://localhost:3000/)!

## How to use

1. Hit the "FIND RANDOM BREWERY!" Button to pan to a randomly selected Brewery.
2. Click the Marker to open a picture, showing the inside or outside of the Brewery (depending on whats available).
3. REPEAT!
4. Zoom out to see, to which spots you've been already.













