import './Profile.scss'
// import {userdata} from '../../library/homedata'
import List from '../../component/list/List'
import Chat from '../../component/chat/Chat'
import { useSelector } from 'react-redux'

function Profile() {
    const { currentUser } = useSelector((state) => state.user);

    if (!currentUser) {
        return <div>Loading...</div>; // Or redirect to another page
    }

    return (
        <div className="profilePage">
            <div className="details">
                <div className="wrapper">
                    <div className="title">
                        <h1>User Information</h1>
                        <button>Update Profile</button>
                    </div>
                    <div className="info">
                        <span><b>Profile-img:</b> <img src={currentUser.avatar} alt="" /></span>
                        <span><b>E-mail: </b> {currentUser.email}</span>
                        <span><b>Name: </b> {currentUser.firstName} {currentUser.lastName}</span>
                        <span><b>Mobile number: </b> {currentUser.phoneNumber}</span>
                    </div>
                    <div className="title">
                        <h1>My List</h1>
                        <button>Add new House</button>
                    </div>
                    <List />
                    <div className="title">
                        <h1>Saved List</h1>
                    </div>
                    <List />
                </div>
            </div>
            <div className="chatcontainer">
                <div className="wrapper">
                    <Chat />
                </div>
            </div>
        </div>
    );
}


export default Profile