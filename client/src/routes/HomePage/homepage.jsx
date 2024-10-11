
import './homepage.scss';
import SearchBar from "../../component/SearchBar/searchbar"


function homepage() {
    return (
        
        <div className='homepage'>
            
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className='title'>Get Your Dream House </h1>
                    <p>Welcome to our real estate platform where you can find your perfect home. Explore a wide range of properties and find the one that suits you best. Whether you're looking for a cozy apartment or a spacious house, we have something for everyone.</p>
                    <SearchBar/>
                    <div className="Bada-Dabba">
                        <div className="chotta-dabba">
                            <h1>25+</h1>
                            <h2>Years Of Experience</h2>
                        </div>
                        <div className="chotta-dabba">
                            <h1>500+</h1>
                            <h2>Users</h2>
                        </div>
                        <div className="chotta-dabba">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgContainer">
                <img src="src/routes/HomePage/B-removebg-preview.png" alt="" />
            </div>
        </div>
    )
}

export default homepage
