import './Profile.scss'
// import {userdata} from '../../library/homedata'
import List from '../../component/list/List'
import Chat from '../../component/chat/Chat'
import { useSelector } from 'react-redux'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
import { useRef, useState, useEffect } from 'react'
import { app } from '../../firebase'
function Profile() {
    const fileRef = useRef(null)
    const { currentUser } = useSelector((state) => state.user);
    const [file, setFile] = useState(undefined)
    const [filePerc, setFilePerc] = useState(0)
    const [fileUploadError, setFileUploadError] = useState(false)
    const [formData, setFormData] = useState({})
    console.log(file)
    console.log(formData)
    console.log(fileUploadError)
    console.log(filePerc)
    console.log('Current User:', currentUser);
    
    useEffect(() => {
        if (file) {
            handleFileUpload(file)
            
        }
    }, [file])
    const handleFileUpload = (file) => {
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setFilePerc(Math.round(progress));
            },
            (error) => {
                setFileUploadError(true);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
                    setFormData({ ...formData, avatar: downloadURL })
                );
            }
        );
    };
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
                        <input onChange={(e) => setFile(e.target.files[0])} type='file' hidden accept='image/*' ref={fileRef} />
                        <span><b>Profile-img:</b> <img onClick={() => fileRef.current.click()} src={formData.avatar || currentUser.avatar} alt="" />
                            <p >
                                {fileUploadError ? (
                                    <span >
                                        Error Image upload (image must be less than 2 mb)
                                    </span>
                                ) : filePerc > 0 && filePerc < 100 ? (
                                    <span>{`Uploading ${filePerc}%`}</span>
                                ) : filePerc === 100 ? (
                                    <span >Image successfully uploaded!</span>
                                ) : (
                                    ''
                                )}
                            </p>
                            </span>
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