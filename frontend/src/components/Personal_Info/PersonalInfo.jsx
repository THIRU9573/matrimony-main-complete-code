import React, { useState, useEffect } from 'react';
import './PersonalInfo.css';
import { MdOutlineModeEdit } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";
import axios from 'axios';


function PersonalInfo() {
  const [userdatas, setUserdata] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/userdatas');
        setUserdata(response.data[0]); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Add useEffect to fetch data again after form submission
  useEffect(() => {
    if (userdatas) {
        const fetchDataAgain = async () => {
            try {
                const response = await axios.get('http://localhost:5000/userdatas');
                setUserdata(response.data[0]); 
            } catch (error) {
                console.error('Error fetching data again:', error);
            }
        };

        fetchDataAgain();
    }
}, [userdatas]);

 
 
  return (
    <div className='PersonalInfo-container'>
      <h2>Personal information</h2>

      {/* Render basic details */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Basic Details</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='about-bottom'>
            <p>Get better responses by verifying your name and age</p>
            <button id='badge-btn'>Get Identity Badge<FaChevronRight/></button>
            <hr/>
          </div>
          <div className='info-container'>
            <div>
              <p>Profile created for : {userdatas.profileFor}</p>
              <p>Body Type : {userdatas.bodyType}</p>
              <p>Physical : Status{userdatas.physicalStatus}</p>
              <p>Weight : {userdatas.weight}</p>
              <p>Marital Status : {userdatas.maritalStatus}</p>
              <p>Drinking Habits : {userdatas.drinkingHabits}</p>
            </div>
            <div>
              <p>Name : {userdatas.name}</p>
              <p>Age : {userdatas.age} Years - Verify</p>
              <p>Height : {userdatas.height}</p>
              <p>Mother Tongue : {userdatas.motherTongue}</p>
              <p>Eating Habits : {userdatas.eatingHabits}</p>
              <p>Smoking Habits : {userdatas.smokingHabits}</p>
            </div>
          </div>
        </div>
      )}

      {/* Render religion information */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Religion Information</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='info-container'>
            <div>
              <p>Religion : {userdatas.religion}</p>
              <p>Caste / Sub Caste : {userdatas.casteSubCaste}</p>
              <p>Gothram : {userdatas.gothram}</p>
              <p>Star / Raasi : {userdatas.starRaasi}</p>
              <p>Dosham : {userdatas.dosham}</p>
            </div>
            <div>
              <p>Time of Birth : {userdatas.timeOfBirth}</p>
              <p>Place of Birth : {userdatas.placeOfBirth}</p>
            </div>
          </div>
        </div>
      )}

      {/* Render bride's location */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Bride's Location</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='info-container'>
            <div>
              <p>Country : {userdatas.country}</p>
              <p>State : {userdatas.state}</p>
              <p>Ancestral Origin : {userdatas.ancestralOrigin}</p>
            </div>
            <div>
              <p>City : {userdatas.city}</p>
              <p>Citizenship : {userdatas.citizenship}</p>
            </div>
          </div>
        </div>
      )}

      {/* Render professional information */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Professional Information</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='info-container'>
            <div>
              <p>Education : {userdatas.education}</p>
              <p>Education in Detail : {userdatas.educationInDetail}</p>
              <p>College / Institution : {userdatas.collegeInstitution}</p>
              <p>Employed in : {userdatas.employedIn}</p>
              <p>Occupation : {userdatas.occupation}</p>
              {/* Add more fields as needed */}
            </div>
          </div>
        </div>
      )}

      {/* Render family details */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Family Details</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='info-container'>
            <div>
              <p>Family Values : {userdatas.familyValues}</p>
              <p>Family Type : {userdatas.familyType}</p>
              <p>Family Status : {userdatas.familyStatus}</p>
              <p>No of Sister(s) : {userdatas.numberOfSisters}</p>
            </div>
            <div>
              <p>Father's Occupation : {userdatas.fatherOccupation}</p>
              <p>Mother's Occupation : {userdatas.motherOccupation}</p>
              <p>No of Brother(s) : {userdatas.numberOfBrothers}</p>
              <p>Family Location : {userdatas.familyLocation}</p>
            </div>
          </div>
        </div>
      )}

      {/* Render about my family */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>About My Family</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='about-bottom'>
            <p>{userdatas.aboutMyFamily}</p>
          </div>
        </div>
      )}

      {/* Render hobbies and interests */}
      {userdatas && (
        <div className='personal'>
          <div className='personal-top'>
            <span className='heading'>Hobbies and Interests</span>
            <span><button className='edit-btn'><MdOutlineModeEdit/>Edit</button></span>
          </div>
          <div className='about-bottom'>
            <p>{userdatas.hobbiesAndInterests}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PersonalInfo;
