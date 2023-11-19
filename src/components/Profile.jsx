import React from 'react';
import { MdStars } from "react-icons/md";
import { BiSolidHeartCircle } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { DiKrakenjsBadge } from "react-icons/di";
import { FcApproval } from "react-icons/fc";
import backProfile from '../data/cloud.jpg';
import profilePic from '../data/abc.jpg';
import './Profile.css';
function Profile() {
  return (
    <div className="profile">
      <div className="profile-header">
        <img
          className="profile-cover"
          src={backProfile} 
          alt="cover"
        />
        <div className='Profile-section'>
          <img
            className="profile-avatar"
            src={profilePic}
            alt="avatar"
          />
          <div>
            <div className='name-head-icon'>
              <h2>Aditya Verma</h2>
              <DiKrakenjsBadge size={30} className='badge-icon'/>
              <FcApproval size={24}/>
            </div>
            <div className="profile-buttons">
              <div className='Followers-button'>
                <button className="follow-button"><b>6098</b></button>
                <label>Followers</label>
              </div>
              <div className='Followers-button'>
                <button className="follow-button"><b>1036</b></button>
                <label>Following</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-body">
        <header>Co-founder & CEO at Terribly Tiny Tales</header>
        <a href='https://www.linkedin.com/in/aditya-verma-swe/' target='_newTab'>https://www.linkedin.com/in/aditya-verma-swe/</a>
        <section className='icons'>
          <div className='star-icon'>
            <MdStars size={30}/>
            <h5>125</h5>
          </div>
          <div className='thumb-icon'>
            <FaThumbsUp size={25} />
            <h5>12</h5>
          </div>
          <div className='eye-icon'>
            <FaEye size={30}/>
            <h5>57.8K</h5>
          </div>
          <div className='heart-icon'>
            <BiSolidHeartCircle size={30} />
            <h5>26.0K</h5>
          </div>
        </section>
      </div>
    </div>
  );
}
export default Profile;
