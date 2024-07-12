import Card from '../../component/card/Card';
import Filter from '../../component/filter/Filter';
import Map from '../../component/map/Map';
import { data } from '../../library/homedata';
import './listpage.scss';





function listpage() {


    const datta = data;
    return(
        <div className="listpage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {datta.map(item=>(
                        <Card key={item.id} item={item}/>
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <Map items={data}/>
            </div>
        </div>
    )
}

export default listpage