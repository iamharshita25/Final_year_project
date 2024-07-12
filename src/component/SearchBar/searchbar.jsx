import { useState } from 'react'
import './searchbar.scss'

const types=["buy","rent","sell"]
function searchbar  () {
  const [query,setQuery]=useState({
    type:"buy",
    location:"",
    minprice:0,
    maxprice:0,
  })

  const switchtype=(val)=>{
    // if(query.type==="buy"){
    //   setQuery({...query,type:"rent" })
    //   }else{
    //     setQuery({...query,type:"buy" })
    //     }
    setQuery((prev)=>({...prev,type: val}))
  }
  return (
    <div className='searchbar'>
      <div className="prakkar">

        {types.map((type)=>(
          <button key={type} onClick={()=>switchtype(type)} className={query.type === type ?  "active" : ""}>{type}</button>

          
        ))}
        
      </div>
      <form action="">
          <input type="text" name='Location' placeholder="City Location"/>
          <input type="number" name='kam-kimat' min={0} max={10000000000} placeholder="Minimum Price"/>
          <input type="number" name='adhiktam-kimat' min={0} max={10000000000} placeholder="Maximium Price"/>
          <button>
            <img src="src/component/SearchBar/tabler--location-search.png" alt="" />
          </button>
        </form>
    </div>
  )
}

export default searchbar
