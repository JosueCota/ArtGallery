import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

function App() {
  
  const [listOfCustomers, setListOfCustomers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/customer").then((response) => {
      setListOfCustomers(response.data);
    });
  }, []);
  
  const [listOfArtist, setListOfArtist] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/artist").then((response) => {
      setListOfArtist(response.data);
    });
  }, []);
  
  const [listOfArtshows, setListOfArtshows] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/artshows").then((response) => {
      setListOfArtshows(response.data);
    });
  }, []);
  
  const [listOfArtwork, setListOfArtwork] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/artwork").then((response) => {
      setListOfArtwork(response.data);
    });
  }, []);
  
  
  return( 
        <div className="App"> 
        {
          listOfCustomers.map((value, key) => 
        { 
          return ( 
            <div className='customer' id='columns'> 
              <div className='id'>
                Customer {value.custNum}
              </div>
              
              <div className='pref'>
              Pref: {value.artPref}
              </div>

              <div className='phone'>
               Phone: {value.custPhone}
                </div>
            </div>
          );
        }) 
        }
        {listOfArtist.map((value, key) => {
          return(
            <div className='artist' id='columns' > 
            <div className='name'>
              <div> Artist: </div>
              {value.artist_name}
            </div>
            
            <div className='phone'>
              Phone: {value.phone}
            </div>
            <div className='address'>
              Address: {value.address}
            </div>
            <div className='age'>
              Age: {value.age}
            </div>
            <div className='artStyle'>
              Style: {value.artStyle}
            </div> 
          </div>);
        })
        }
        </div>
      );
  }
export default App;
