import React, { useState, useRef, useEffect } from 'react';
import './ProfilePopover.css';
import { supabase } from '../utils/supabaseClient';
import icon from '../assets/myprofile.svg'

import { useNavigate } from 'react-router-dom';


const ProfilePopover = ({ user, onLogout }) => {

  const navigate = useNavigate()


  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef(null);
  const imageRef = useRef(null);

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  // Sample user data (in a real app, this would come from props)
  const userData = user || {
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Student',
    profileImage: 'https://via.placeholder.com/40'
  };

  // Handle click outside to close popover
  useEffect(() => {

    const savedSession = localStorage.getItem("supabaseSession");

        const session = savedSession ? JSON.parse(savedSession) : null;
        if (session != null) {
          setName(session.user.user_metadata.full_name)
          setEmail(session.user.email)
          setRole(session.user.user_metadata.role)
        }

    const handleClickOutside = (event) => {
      if (
        popoverRef.current && 
        !popoverRef.current.contains(event.target) && 
        !imageRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    
      supabase.auth.signOut();
localStorage.removeItem("supabaseSession");
navigate('/login')    
  };

  return (
    <div className="profile-container">
      <img
        ref={imageRef}
        src={icon}
        alt="Profile"
        className="profile-image"
        onClick={togglePopover}
      />
      
      {isOpen && (
        <div ref={popoverRef} className="profile-popover">
          <div className="popover-header">
            <img 
              src={userData.profileImage || "/placeholder.svg"} 
              alt="Profile" 
              className="popover-image" 
            />
            <h3>{name}</h3>
          </div>
          
          <div className="popover-content">
            <div className="info-item">
              <label>Email:</label>
              <span>{email}</span>
            </div>
            
            <div className="info-item">
              <label>Role:</label>
              <span>{role}</span>
            </div>
          </div>
          
          <div className="popover-footer">
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePopover;