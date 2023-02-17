import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function All() {
  
let[gamesList,setGamesList] = useState([]);
let[allList,setAllList] = useState([]);
let[platformsList,setPlatformsList] = useState([]);
let[sortbyList,setSortbyList] = useState([]);
let[categoriesList,setCategoriesList] = useState([]);

useEffect(()=> {
    getData('games',setGamesList)
    getData('all',setAllList)
    getData('platform',setPlatformsList)
    getData('sortby',setSortbyList)
    getData('categories',setCategoriesList)


},[])

async function getData(callback) {
    let { data } = await axios.get(`https://www.freetogame.com/api/games?all`)
   console.log(data)
    callback(data)
}       
  return (
    
<>
<section className="games-header text-center">
    <div  className=" mb-2">
      <h1  className="heading">
        <p >Find &amp; track the best 
        <span  className='ps-2 play'>free-to-play</span> games!</p> 
        </h1>
        <p  className="lead text-muted">Track what you've played and search for what to play next! Plus get free premium loot! </p>
        <p>
          <Link  className="btn btn-outline-secondary btn-md ml-0" to="/all">Browse Games</Link>
          
          </p>
          
        </div>
       
        </section>
        </> 
   
        
    
  )

}


    

