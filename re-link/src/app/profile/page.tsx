'use client';
import React, { useState } from 'react';
import './profile.css';
import { 
  Edit,
  Mail,
  Phone,
  MapPin,
  Building2,
  Camera,
  Save,
  X,
  Calendar,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import Image from 'next/image';

interface ProfileData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  currentRole: string;
  company: string;
  location: string;
  locality: string;
  cityState: string;
  country: string;
  postalCode: string;
  batch: string;
  department: string;
  profilePicture?: string;
}

const MyProfilePage = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@kiit.ac.in',
    phone: '+91 9876543210',
    bio: 'Software Engineer with 5+ years of experience in full-stack development',
    currentRole: 'Senior Software Engineer',
    company: 'Google India',
    location: 'Bangalore, India',
    locality: 'Campus 25, KIIT University, Patia',
    cityState: 'Bhubaneswar, Odisha',
    country: 'India',
    postalCode: '751024',
    batch: '2019',
    department: 'Computer Science'
  });

  const [editMode, setEditMode] = useState<string | null>(null);
  const [tempData, setTempData] = useState<Partial<ProfileData>>({});

  const startEdit = (section: string) => {
    setEditMode(section);
    if (section === 'header') {
      setTempData({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        currentRole: profileData.currentRole,
        company: profileData.company
      });
    } else if (section === 'personal') {
      setTempData({
        firstName: profileData.firstName,
        lastName: profileData.lastName,
        email: profileData.email,
        phone: profileData.phone,
        bio: profileData.bio
      });
    } else if (section === 'address') {
      setTempData({
        locality: profileData.locality,
        cityState: profileData.cityState,
        country: profileData.country,
        postalCode: profileData.postalCode
      });
    }
  };

  const saveEdit = () => {
    setProfileData(prev => ({ ...prev, ...tempData }));
    setEditMode(null);
    setTempData({});
  };

  const cancelEdit = () => {
    setEditMode(null);
    setTempData({});
  };

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  const getInitials = () => {
    return `${profileData.firstName.charAt(0)}${profileData.lastName.charAt(0)}`;
  };

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-header-title">
          <h1>MY PROFILE</h1>
        </div>

        {/* Main Profile Section */}
        <div className="profile-main-card">
          <div className="profile-main-content">
            <div className="profile-picture-section">
              <div className="profile-picture">
                {profileData.profilePicture ? (
                  <Image 
                    src={profileData.profilePicture} 
                    alt="Profile" 
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                ) : (
                  <div className="profile-initials">{getInitials()}</div>
                )}
                <button className="change-photo-btn" title="Change Photo">
                  <Camera size={16} />
                </button>
              </div>
            </div>
            
            <div className="profile-main-info">
              {editMode === 'header' ? (
                <div className="edit-form">
                  <div className="form-row">
                    <input
                      type="text"
                      value={tempData.firstName || ''}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      placeholder="First Name"
                      className="edit-input"
                    />
                    <input
                      type="text"
                      value={tempData.lastName || ''}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      placeholder="Last Name"
                      className="edit-input"
                    />
                  </div>
                  <input
                    type="text"
                    value={tempData.currentRole || ''}
                    onChange={(e) => handleInputChange('currentRole', e.target.value)}
                    placeholder="Current Role"
                    className="edit-input"
                  />
                  <input
                    type="text"
                    value={tempData.company || ''}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Company"
                    className="edit-input"
                  />
                  <div className="edit-actions">
                    <button onClick={saveEdit} className="save-btn">
                      <Save size={16} />
                      Save
                    </button>
                    <button onClick={cancelEdit} className="cancel-btn">
                      <X size={16} />
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2>{profileData.firstName} {profileData.lastName}</h2>
                  <p className="role">{profileData.currentRole}</p>
                  <p className="company">
                    <Building2 size={16} />
                    {profileData.company}
                  </p>
                  <p className="education">
                    <GraduationCap size={16} />
                    {profileData.department} - Batch {profileData.batch}
                  </p>
                </>
              )}
            </div>
          </div>
          
          {editMode !== 'header' && (
            <button 
              className="edit-section-btn"
              onClick={() => startEdit('header')}
            >
              <Edit size={16} />
              Edit
            </button>
          )}
        </div>

        {/* Personal Information Section */}
        <div className="profile-section-card">
          <div className="section-header">
            <h3>Personal Information</h3>
            {editMode !== 'personal' && (
              <button 
                className="edit-section-btn"
                onClick={() => startEdit('personal')}
              >
                <Edit size={16} />
                Edit
              </button>
            )}
          </div>

          <div className="section-content">
            {editMode === 'personal' ? (
              <div className="edit-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input
                      type="text"
                      value={tempData.firstName || ''}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      type="text"
                      value={tempData.lastName || ''}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>Email Address</label>
                    <input
                      type="email"
                      value={tempData.email || ''}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      value={tempData.phone || ''}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Bio</label>
                  <textarea
                    value={tempData.bio || ''}
                    onChange={(e) => handleInputChange('bio', e.target.value)}
                    className="edit-textarea"
                    rows={3}
                  />
                </div>
                
                <div className="edit-actions">
                  <button onClick={saveEdit} className="save-btn">
                    <Save size={16} />
                    Save
                  </button>
                  <button onClick={cancelEdit} className="cancel-btn">
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="info-grid">
                <div className="info-item">
                  <label>First Name</label>
                  <p>{profileData.firstName}</p>
                </div>
                <div className="info-item">
                  <label>Last Name</label>
                  <p>{profileData.lastName}</p>
                </div>
                <div className="info-item">
                  <label>Email Address</label>
                  <p className="email">
                    <Mail size={14} />
                    {profileData.email}
                  </p>
                </div>
                <div className="info-item">
                  <label>Phone</label>
                  <p className="phone">
                    <Phone size={14} />
                    {profileData.phone}
                  </p>
                </div>
                <div className="info-item full-width">
                  <label>Bio</label>
                  <p>{profileData.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Address Section */}
        <div className="profile-section-card">
          <div className="section-header">
            <h3>Address</h3>
            {editMode !== 'address' && (
              <button 
                className="edit-section-btn"
                onClick={() => startEdit('address')}
              >
                <Edit size={16} />
                Edit
              </button>
            )}
          </div>

          <div className="section-content">
            {editMode === 'address' ? (
              <div className="edit-form">
                <div className="form-group">
                  <label>Locality</label>
                  <input
                    type="text"
                    value={tempData.locality || ''}
                    onChange={(e) => handleInputChange('locality', e.target.value)}
                    className="edit-input"
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label>City/State</label>
                    <input
                      type="text"
                      value={tempData.cityState || ''}
                      onChange={(e) => handleInputChange('cityState', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Postal Code</label>
                    <input
                      type="text"
                      value={tempData.postalCode || ''}
                      onChange={(e) => handleInputChange('postalCode', e.target.value)}
                      className="edit-input"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label>Country</label>
                  <input
                    type="text"
                    value={tempData.country || ''}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className="edit-input"
                  />
                </div>
                
                <div className="edit-actions">
                  <button onClick={saveEdit} className="save-btn">
                    <Save size={16} />
                    Save
                  </button>
                  <button onClick={cancelEdit} className="cancel-btn">
                    <X size={16} />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="info-grid">
                <div className="info-item">
                  <label>Locality</label>
                  <p className="location">
                    <MapPin size={14} />
                    {profileData.locality}
                  </p>
                </div>
                <div className="info-item">
                  <label>City/State</label>
                  <p>{profileData.cityState}</p>
                </div>
                <div className="info-item">
                  <label>Country</label>
                  <p>{profileData.country}</p>
                </div>
                <div className="info-item">
                  <label>Postal Code</label>
                  <p>{profileData.postalCode}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Academic Information Section */}
        <div className="profile-section-card">
          <div className="section-header">
            <h3>Academic Information</h3>
          </div>

          <div className="section-content">
            <div className="info-grid">
              <div className="info-item">
                <label>Department</label>
                <p className="department">
                  <GraduationCap size={14} />
                  {profileData.department}
                </p>
              </div>
              <div className="info-item">
                <label>Graduation Year</label>
                <p className="batch">
                  <Calendar size={14} />
                  {profileData.batch}
                </p>
              </div>
              <div className="info-item">
                <label>University</label>
                <p>KIIT University</p>
              </div>
              <div className="info-item">
                <label>Campus</label>
                <p>Patia, Bhubaneswar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Information Section */}
        <div className="profile-section-card">
          <div className="section-header">
            <h3>Professional Information</h3>
          </div>

          <div className="section-content">
            <div className="info-grid">
              <div className="info-item">
                <label>Current Role</label>
                <p className="role">
                  <Briefcase size={14} />
                  {profileData.currentRole}
                </p>
              </div>
              <div className="info-item">
                <label>Company</label>
                <p className="company">
                  <Building2 size={14} />
                  {profileData.company}
                </p>
              </div>
              <div className="info-item full-width">
                <label>Professional Bio</label>
                <p>{profileData.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
