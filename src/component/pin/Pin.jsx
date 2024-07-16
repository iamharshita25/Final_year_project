import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}) {
    return (
        <Marker position={[item.latitude , item.longitude]}>
            <Popup>
                <div className="popupcountainer">
                    <img src={item.image} alt="" />
                    <div className="textContainer">
                        <Link to={`/${item.id}`}>{item.title}</Link>
                        <span className="bed">{item.bedroom}Bedroom</span>
                        <b>{item.price}</b>
                    </div>
                </div>
            </Popup>
        </Marker>

    )
}

export default Pin