import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../redux/reducerUser';
import { useDropzone } from 'react-dropzone';
import "../../styles/ProfilePageS.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.users.currentUser); 

  const [profileState, setProfileState] = useState(authUser || {});

  const [file, setFile] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

 
  useEffect(() => {
    setProfileState(authUser || {});
  }, [authUser]);

  const handleChange = (e) => {
    setProfileState({
      ...profileState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfile = {
      ...profileState,
      profilePicture: file ? URL.createObjectURL(file) : profileState.profilePicture,
    };

    if (authUser?.id) {
      dispatch(setProfile({ id: authUser.id, ...updatedProfile }));
      setProfileState(updatedProfile);
    } else {
      console.error('User ID is undefined');
    }
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="profile-container" data-aos="fade-up">
     
      <div className="profile-content">
        <div className="profile-info">
          <h2>Profile Information</h2>
          <img
            src={file ? URL.createObjectURL(file) : profileState.profilePicture || 'default-image-url'}
            alt={`${profileState.username || 'User'}'s profile`}
            className="profile-image"
          />
          <p className="profile-text">Username: {profileState.username || 'N/A'}</p>
          <p className="profile-text">Email: {profileState.email || 'N/A'}</p>
          <p className="profile-text">Bio: {profileState.bio || 'N/A'}</p>
        </div>
        <form className="profile-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profileState.username || ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileState.email || ''}
              onChange={handleChange}
            />
          </div>
          <div data-aos="fade-in">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} name="profilePicture" />
              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>Drag 'n' drop a file here, or click to select one</p>
              )}
            </div>
          </div>
          <div data-aos="fade-in">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={profileState.bio || ''}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;