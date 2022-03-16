import {useState} from 'react';
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import MapStyles from './MapStyles'

function Map() {
  const [selectedResto, setSelectedResto] = useState(null);
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 48.140660, lng: 11.563030 }}
    defaultOptions={{ styles: MapStyles }}>
      <Marker position={{ lat: 48.140660, lng: 11.563030 }}
        onClick={() => {
          setSelectedResto("Pizzeria Grande")
        }}
        icon={{
          url:'https://cdn-icons-png.flaticon.com/512/3132/3132693.png',
          scaledSize: new window.google.maps.Size(30, 30)
        }}
       />

     {selectedResto &&(
        <InfoWindow position={{ lat: 48.140660, lng: 11.563030 }}
        onCloseClick={() =>{setSelectedResto(null)}}>
         <div>
            <TitleMaps>Pizzeria Grande</TitleMaps>
            <InfoMaps>Prielmayerstraße 5, 80335 Munich</InfoMaps>
            <InfoMaps>+49 895 529 5867</InfoMaps>
         </div>
       </InfoWindow>
     )}
   </GoogleMap>
  )
}
const MapWrapped = withScriptjs(withGoogleMap(Map))

const FindUs = () => {
  return (
    <MainWrapper>
      <FindUsText>
        <div>
          <h3>Find us</h3>
          <hr />
        </div >
        <h2>opening hours</h2>
        <h5>Monday to Friday: 13pm - 23:30pm</h5>
      </FindUsText>
      <MapContainer>
        <MapWrapped
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBKgFQG3NiEXt_uqjlLvo_LVpCZMXccmQ`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </MapContainer>
    </MainWrapper>
  )
}

const MainWrapper = styled.section`
width: min(100%, 1000px);
margin: 0 auto;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
@media screen and (min-width: 800px){
  flex-direction: row;
  justify-content: space-between;
  width: min(80%,1000px);
  margin: 4rem auto;
  gap:5rem;
}
`
const FindUsText = styled.article`
display: flex;
flex-direction: column;
align-items: center;
h2{
  margin-bottom: 0.5rem;
}
h3 {
  margin-bottom: 0.1rem;
}
hr {
  width: 5rem;
  height: 0.2rem;
  background: #ffc500;
  border-style: none;
  margin-bottom: 1.3rem;
}
h5 {
 margin-bottom: 2rem;
}
@media screen and (min-width: 800px){
  hr {
    width: 7rem;
  }
}
`
const MapContainer = styled.article`
width: 65%;
height: 40vh;
`
const TitleMaps = styled.h4`
margin-bottom: 1rem;
font-size:20px;
`
const InfoMaps = styled.h6`
margin-bottom: 0.5rem;
font-size:15px;
`
export default FindUs

