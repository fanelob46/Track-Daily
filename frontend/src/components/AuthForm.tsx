import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToggleSwitch } from 'flowbite-react';
import { UserFormData } from '../definitions';

type AuthFormProps = {
  name: string;
  type: 'signup' | 'login' | 'edit';
  submitFunction: (userData: UserFormData) => Promise<void>;
  error: string;
  initialValues?: UserFormData; // Add this prop
};

const AuthForm = ({ name, type, submitFunction, error, initialValues }: AuthFormProps) => {
  const [formData, setFormData] = useState<UserFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isAdmin: false,
    secretKey: '',
  });

  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    if (initialValues) {
      setFormData(initialValues);
    }
  }, [initialValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await submitFunction(formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col py-4 px-10 w-full max-w-[550px] mx-auto"
    >
      <h1 className="text-5xl my-8 text-center">{name}</h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          placeholder="First Name"
          className="inputStyles lg:w-[48%]"
          disabled={type === 'edit' && !isEditable}
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          placeholder="Last Name"
          className="inputStyles lg:w-[48%]"
          disabled={type === 'edit' && !isEditable}
        />
      </div>

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Email Address"
        className="inputStyles"
        disabled={type === 'edit' && !isEditable}
      />

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleInputChange}
        placeholder="Enter your password"
        className="inputStyles"
        disabled={type === 'edit' && !isEditable}
      />

      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        placeholder="Confirm your password"
        className="inputStyles"
        disabled={type === 'edit' && !isEditable}
      />

      <p className="text-red-400">{error}</p>

      <button
        type="submit"
        className="buttonStyle my-5"
        onClick={type === 'edit' ? () => setIsEditable(!isEditable) : undefined}
      >
        {type === 'signup'
          ? 'Sign Up'
          : type === 'login'
          ? 'Login'
          : isEditable
          ? 'Save'
          : 'Edit'}
      </button>
    </form>
  );
};

export default AuthForm;
