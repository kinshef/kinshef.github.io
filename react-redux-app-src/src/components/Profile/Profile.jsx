import React, {useState, useEffect} from 'react';
import style from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../common/Preloader";
import fotoUser from "../../assets/img/20190911155229-1638.jpg";
import ProfileData from "./ProfileComponent/ProfileData";
import ProfileForm from "./ProfileComponent/ProfileForm";
import ProfileStatusHuck from "./ProfileComponent/ProfileStatusHuck";
import { startAsyncValidation } from 'redux-form';
// import ProfileStatus from "./ProfileComponent/ProfileStatus";



let Profile = ({isOwner, status, savePhoto, updateUsersStatus, setProfileUpdateStatus, profile, profileUpdateStatus, saveProfile}) => {
    const [editMode, setEditMode] = useState(false);
    useEffect( () => {
        setEditMode(false)
    }, [profileUpdateStatus]);

    const onSubmit = (formData) => {
        saveProfile(formData);
        // .then(() => {setEditMode(false)})
        if (profileUpdateStatus) {
            setEditMode(false)
        }
    }

    if(!profile){
        return <Preloader />
    }

    const mainPhotoSelected = (even) => {
        if (even.target.files.length) {
            savePhoto(even.target.files[0])
        }
    };

    const updateStatus = () => {
        setEditMode(true);
        setProfileUpdateStatus(false)
    };

    return (
        <div className={style.profile}>
            <h2>Profile</h2>
            <div className={style.profile_wrap}>
                <div className={style.profile_img}>
                    <img alt='' src={profile.photos.large !== null ? profile.photos.large : fotoUser}/>
                    {/* {isOwner && <input type="file" onChange={mainPhotoSelected}/>} */}
                    {isOwner && <div className={style.input__wrapper}>
                        <input name="file" type="file" name="file" id='input__file' className={style.input__file} multiple />
                        <label for="input__file" className={style.input__file_button}>
                            <span className={style.input__file_icon_wrapper}>
                                {/* <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-export" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="svg-inline--fa fa-file-export fa-w-18 fa-3x">
                                    <path fill="currentColor" d="M384 121.9c0-6.3-2.5-12.4-7-16.9L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128zM571 308l-95.7-96.4c-10.1-10.1-27.4-3-27.4 11.3V288h-64v64h64v65.2c0 14.3 17.3 21.4 27.4 11.3L571 332c6.6-6.6 6.6-17.4 0-24zm-379 28v-32c0-8.8 7.2-16 16-16h176V160H248c-13.2 0-24-10.8-24-24V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V352H208c-8.8 0-16-7.2-16-16z" class=""></path>
                                </svg> */}
                                {/* <img className={style.input__file_icon} src="./img/add.svg" alt="Выбрать файл" width="25"/> */}
                            </span>
                            <span className={style.input__file_button_text}>Выберите файл</span>
                        </label>
                    </div>}
                    <ProfileStatusHuck isOwner={isOwner} updateUsersStatus={updateUsersStatus} status={status} />
                </div>
                {editMode
                    ? <ProfileForm  initialValues={profile}
                                    profileUpdateStatus={profileUpdateStatus}
                                    onSubmit={onSubmit} profile={profile}/>
                    : <ProfileData  isOwner={isOwner} goToEditMode={updateStatus}
                                    profile={profile}/>}
            </div>
            
            {/* <MyPostsContainer /> */}
        </div>
    );
};

export default Profile;