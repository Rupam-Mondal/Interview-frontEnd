import UserContext from '@/contexts/UserContext';
import React, { useContext } from 'react'
import { Particles } from '../ui/particles';
import { useNavigate } from 'react-router-dom';

const Content = () => {
    const { userId } = useContext(UserContext);
    const navigate = useNavigate();
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full text-center"
    onClick={()=>{
      navigate(`/chat/${Math.floor(Math.random() * 10000)}`);
    }}>
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Dashboard</h1>
      <p className="mt-4 text-lg text-indigo-600 font-semibold">
        User ID: {userId}
      </p>
    </div>
  );
}

export default Content
