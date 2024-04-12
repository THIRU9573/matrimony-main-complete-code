import React from 'react'
import  { useState } from 'react';
import axios from 'axios';
import './Form.css';


function Form() {

    const [formData, setFormData] = useState({
    profileFor: "",
    name: "",
    bodyType: "",
    age: "",
    physicalStatus: "",
    height: "",
    weight: "",
    motherTongue: "",
    maritalStatus: "",
    eatingHabits: "",
    drinkingHabits: "",
    smokingHabits: "",
    religion: "",
    casteSubCaste: "",
    gothram: "",
    starRaasi: "",
    dosham: "",
    timeOfBirth: "",
    placeOfBirth: "",
    country: "",
    state: "",
    city: "",
    citizenship: "",
    ancestralOrigin: "",
    education: "",
    educationInDetail: "",
    collegeInstitution: "",
    additionalDegree: "",
    employedIn: "",
    occupation: "",
    familyValues: "",
    familyType: "",
    familyStatus: "",
    numberOfSisters: "",
    fatherOccupation: "",
    motherOccupation: "",
    numberOfBrothers: "",
    familyLocation: "",
    aboutMyFamily: "",
    hobbiesAndInterests: ""
    });
  
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value || '' });
    };
  

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post ('http://localhost:5000/userdatas', formData);
        console.log(response.data)
        alert('Form submitted successfully!');
      } catch (error) {
        console.log('Error submitting form:', error);
      }
  };
  
    return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2 className='userform-heading'>Basic Details</h2>
        <div className="basic-details">
            <input type="text" name="profileFor" value={formData.profileFor} onChange={handleChange} placeholder="Profile created for" />
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="bodyType" value={formData.bodyType} onChange={handleChange} placeholder="Body Type" />
            <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
            <input type="text" name="physicalStatus" value={formData.physicalStatus} onChange={handleChange} placeholder="Physical Status" />
            <input type="text" name="height" value={formData.height} onChange={handleChange} placeholder="Height" />
            <input type="text" name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" />
            <input type="text" name="motherTongue" value={formData.motherTongue} onChange={handleChange} placeholder="Mother Tongue" />
            <input type="text" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} placeholder="Marital Status" />
            <input type="text" name="eatingHabits" value={formData.eatingHabits} onChange={handleChange} placeholder="Eating Habits" />
            <input type="text" name="drinkingHabits" value={formData.drinkingHabits} onChange={handleChange} placeholder="Drinking Habits" />
            <input type="text" name="smokingHabits" value={formData.smokingHabits} onChange={handleChange} placeholder="Smoking Habits" />
        </div>
        <h2 className='userform-heading'>Religion Information</h2>
        <div className="basic-details">
            <input type="text" name="religion" value={formData.religion} onChange={handleChange} placeholder="religion" />
            <input type="text" name="casteSubCaste" value={formData.casteSubcaste} onChange={handleChange} placeholder="caste/SubCaste" />
            <input type="text" name="gothram" value={formData.gothram} onChange={handleChange} placeholder="Gothram" />
            <input type="text" name="starRaasi" value={formData.starRaasi} onChange={handleChange} placeholder="Star / Raasi" />
            <input type="text" name="dosham" value={formData.dosham} onChange={handleChange} placeholder="Dosham" />
            <input type="text" name="timeOfBirth" value={formData.timeOfBirth} onChange={handleChange} placeholder="Time of Birth" />
            <input type="text" name="PlaceOfBirth" value={formData.PlaceOfBirth} onChange={handleChange} placeholder="Place Of Birth" />
        </div>
        <h2 className='userform-heading'>Bride's Location</h2>
        <div className="basic-details">
            <input type="text" name="country" value={formData.country} onChange={handleChange} placeholder=" Country " />
            <input type="text" name="state" value={formData.state} onChange={handleChange} placeholder="State" />
            <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" />
            <input type="text" name="citizenship" value={formData.citizenship} onChange={handleChange} placeholder="Citizenship" />
            <input type="text" name="ancestralOrigin" value={formData.ancestralOrigin} onChange={handleChange} placeholder="Ancestral Origin" />
        </div>
        <h2 className='userform-heading'>Professional Information</h2>
        <div className="basic-details">
            <input type="text" name="education" value={formData.education} onChange={handleChange} placeholder="Education" />
            <input type="text" name="educationInDetail" value={formData.educationInDetail} onChange={handleChange} placeholder="Education in Details" />
            <input type="text" name="collegeInstitution" value={formData.collegeInstitution} onChange={handleChange} placeholder="college Institution" />
            <input type="text" name="additionalDegree" value={formData.additionalDegree} onChange={handleChange} placeholder="additionalDegree" />
            <input type="text" name="employedIn" value={formData.employedIn} onChange={handleChange} placeholder="Employed In" />
            <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} placeholder="Occupation" />
        </div>
        <h2 className='userform-heading'>Family Details</h2>
        <div className="basic-details">
            <input type="text" name="familyValues" value={formData.familyValues} onChange={handleChange} placeholder="Family Values" />
            <input type="text" name="familyType" value={formData.familyType} onChange={handleChange} placeholder="Family Type" />
            <input type="text" name="familyStatus" value={formData.familyStatus} onChange={handleChange} placeholder="Family Status" />
            <input type="text" name="numberOfSisters" value={formData.numberOfSisters} onChange={handleChange} placeholder="Number of Sister's" />
            <input type="text" name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange} placeholder="Father Occupation" />
            <input type="text" name="motherOccupation" value={formData.motherOccupation} onChange={handleChange} placeholder="Mother's Occupation" />
            <input type="text" name="numberOfBrothers" value={formData.numberOfBrothers} onChange={handleChange} placeholder="Number of Brother's" />
            <input type="text" name="familyLocation" value={formData.familyLocation} onChange={handleChange} placeholder="family Location" />
        </div>

        <div className="family-details"> 
            <h2 className='userform-heading'>About My Family</h2>
            <textarea  name="aboutMyFamily" value={formData.aboutMyFamily} onChange={handleChange} cols="60" rows="4" placeholder="About My Family"></textarea>
        </div>
        <div className="family-details"> 
            <h2 className='userform-heading'>Hobbies and InterestsAdd</h2>
            <textarea className='text-area' name="hobbiesAndInterests" value={formData.hobbiesAndInterests} onChange={handleChange} cols="60" rows="4" placeholder="Hobbies and interest"></textarea>
        </div>
        <button className='submit' type="submit">Submit</button>


      </form>
      </div>
    );
  }
  
  export default Form;
  