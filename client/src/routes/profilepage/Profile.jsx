import './Profile.scss'
import {userdata} from '../../library/homedata'
import List from '../../component/list/List'
import Chat from '../../component/chat/Chat'


function Profile(){
    return(
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span>Profile-img: <img src={userdata.image} alt="" /></span>
                        <span>Username: {userdata.name}</span>
                        <span>E-mail: {userdata.e_mail}</span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Add new House</button>
                    </div>
                    <List/>
                    <div className="title">
                        <h1>Saved List</h1>
                        
                    </div>
                    <List/>
                </div>
            </div>
            <div className="chatcontainer">
                <div className="wrapper">
                    <Chat/>
                </div>
            </div>
        </div>
    )
}


export default Profile