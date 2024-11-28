import React from 'react';
import AuthForm from '../components/AuthForm';
import { UserFormData } from '../definitions';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const UserProfile = () => {
  const { userInfo } = useSelector((state: RootState) => state.auth);

  const handleSaveProfile = async (userData: UserFormData) => {
    console.log('Saving user data:', userData);
    // Implement the logic to update user profile
  };

  if (!userInfo) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <AuthForm
        name="Profile"
        type="edit"
        initialValues={userInfo}
        submitFunction={handleSaveProfile}
        error=""
      />
    </div>
  );
};
