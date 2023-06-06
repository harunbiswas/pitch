import { useEffect, useState } from "react"

export default function Filter({data}){
    const [pitchs, setPitchs] = useState([])
    const [events, setEvents] = useState([])

    const unic = (value, index, array) => array.indexOf(value) === index

    useEffect(()=>{
        setPitchs(data.pitchs.filter(unic))
       
    },[data])
    
    useEffect(()=>{
        setEvents(data.events.filter(unic))
       
    },[data])
    return(
        <div className="filter">
          <h4>Filter:</h4>
          <div className="filter-wrp">
            <div className="filter-item">
                <label htmlFor="pitch-type">Pitch Type</label>
              <select onChange={(e)=>data.setPitch(e.target.value)} name="pitch-type" id="pitch-type">
                
                {
                    pitchs && pitchs.length>0 && pitchs.map((d, i)=>(
                        <option key={i} value={d}>{d}</option>
                    ))
                }
              </select>
            </div>
            <div className="filter-item">
            <label htmlFor="event-type">Event Type</label>
              <select onChange={(e)=>data.setEvent(e.target.value)} name="event-type" id="event-type">
              {
                    events && events.length>0 && events.map((d, i)=>(
                        <option key={i} value={d}>{d}</option>
                    ))
                }
              </select>
            </div>
            
            <div className="filter-item">
                <label htmlFor="plate-speed">Plate Speed</label>
              <select onChange={(e)=>data.setPlateSpeed(e.target.value)} name="plate-speed" id="plate-speed">
                <option value="">Default</option>
                <option value="low">Low to high</option>
                <option value="high">High to low</option>
              </select>
            </div>
          </div>
        </div>
    )
}