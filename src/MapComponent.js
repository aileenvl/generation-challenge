import React, { Component } from 'react';
import storesData from '../store_directory.json';


export default class MapComponent extends Component{

//manipulation of dom once it's rendered
 componentDidMount(){
    var geocoder = new google.maps.Geocoder();
    var storesDB = [];
    var marker;
    var map = new google.maps.Map(this.refs.map, {
    center: mexico_city,
    zoom: 13
  });

/*
**** Work around OVER_QUERY_LIMIT
***Function to map over each address and add marker.***

If status ok set marker on specified address to map and add title.

If status is OVER_QUERY_LIMIT setTimeout to wait 500 milliseconds and call function again with same mark. 

****Optional work around is to save all those request lat and long in db and request those and no request to api****
*/

 storesData.map(function (mark){
    findStore(mark);
    function findStore (mark){
        geocoder.geocode({'address': mark.Address}, function(results, status) {
        if(status === google.maps.GeocoderStatus.OK){
        marker = new google.maps.Marker({
                    position: results[0].geometry.location,
                    title: mark.Name,
                    map: map
                    })
                } else if (status === google.maps.GeocoderStatus.OVER_QUERY_LIMIT){
                    setTimeout(function(){findStore(mark)},80);
                } else{
                console.log('Unsuccessful Geocode:' +  status);
                }
            })
        }
    });    
 }

  //Render div with map
    render(){
        return (
            <div ref="map" style={mapStyle}></div>
        )
    }
}

//Styles for map 
var mapStyle = {
  height: '400px',
  width: '100%'
};

// mexico city lattitude and longitude
var mexico_city = {
  lat: 19.432608,
  lng: -99.133209
};