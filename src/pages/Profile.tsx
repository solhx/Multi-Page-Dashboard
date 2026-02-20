import React, { useState } from 'react';
import { mockUserProfile } from '../data/mockData';

const Profile: React.FC = () => {
  const [profile, setProfile] = useState(mockUserProfile);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'security' | 'notifications'>('profile');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // In a real app, this would save to a backend
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 lg:gap-4">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">Profile Settings</h1>
          <p className="text-gray-600 mt-1 text-sm lg:text-base">
            Manage your account settings and preferences
          </p>
        </div>
        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 lg:px-6 py-2.5 lg:py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm lg:text-base"
          >
            Edit Profile
          </button>
        ) : (
          <div className="flex space-x-2 lg:space-x-3">
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 lg:px-6 py-2.5 lg:py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors text-sm lg:text-base"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 lg:px-6 py-2.5 lg:py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm lg:text-base"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>

      {/* Tabs - Horizontal scroll on mobile */}
      <div className="border-b border-gray-200 overflow-x-auto">
        <nav className="flex space-x-4 lg:space-x-8 min-w-max">
          {[
            { id: 'profile', label: 'Profile', icon: '👤' },
            { id: 'security', label: 'Security', icon: '🔒' },
            { id: 'notifications', label: 'Notifications', icon: '🔔' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center space-x-2 py-3 lg:py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Profile Picture Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Profile Picture
              </h3>
              <div className="flex flex-col items-center space-y-3 lg:space-y-4">
                <div className="w-24 lg:w-32 h-24 lg:h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-3xl lg:text-4xl font-bold">
                  {profile.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{profile.name}</p>
                  <p className="text-sm text-gray-600">{profile.role}</p>
                </div>
                {isEditing && (
                  <button className="w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
                    Change Picture
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">
                Personal Information
              </h3>
              <div className="space-y-3 lg:space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors text-sm lg:text-base"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors text-sm lg:text-base"
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Role / Title
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={profile.role}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors text-sm lg:text-base"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors text-sm lg:text-base"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={profile.location || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors text-sm lg:text-base"
                  />
                </div>

                {/* Bio */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={profile.bio || ''}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows={3}
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 disabled:bg-gray-50 disabled:text-gray-500 transition-colors resize-none text-sm lg:text-base"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">
            Security Settings
          </h3>
          <div className="space-y-4 lg:space-y-6 max-w-xl">
            {/* Change Password */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3 lg:mb-4">
                Change Password
              </h4>
              <div className="space-y-3 lg:space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Current Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5 lg:mb-2">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-3 lg:px-4 py-2.5 lg:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm lg:text-base"
                  />
                </div>
                <button className="px-4 lg:px-6 py-2.5 lg:py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors text-sm lg:text-base">
                  Update Password
                </button>
              </div>
            </div>

            {/* Two-Factor Authentication */}
            <div className="pt-4 lg:pt-6 border-t border-gray-200">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                Two-Factor Authentication
              </h4>
              <p className="text-sm text-gray-600 mb-3 lg:mb-4">
                Add an extra layer of security to your account
              </p>
              <button className="px-4 lg:px-6 py-2.5 lg:py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors text-sm lg:text-base">
                Enable 2FA
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notifications Tab */}
      {activeTab === 'notifications' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 lg:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 lg:mb-6">
            Notification Preferences
          </h3>
          <div className="space-y-4 lg:space-y-6 max-w-xl">
            {[
              {
                title: 'Email Notifications',
                description: 'Receive email updates about your projects',
              },
              {
                title: 'Project Updates',
                description: 'Get notified when a project status changes',
              },
              {
                title: 'Payment Alerts',
                description: 'Receive notifications for payment activities',
              },
              {
                title: 'Task Reminders',
                description: 'Get reminded about upcoming task deadlines',
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-0.5 lg:mt-1">
                    {item.description}
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
