import axios from 'axios';
import React,{useState} from 'react';
import ReactDOM from 'react-dom';

const Register = () => {
  const [user, setuser] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handelUser=(e)=>{
    setuser(e.target.value);
  }
  const handelemail=(e)=>{
    setEmail(e.target.value);
  }
  const handelpassword=(e)=>{
    setPassword(e.target.value);
  }

  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post('http://localhost:3000/user/register',{
        username:user,
        email:email,
        password:password,
      })
      console.log("")
      console.log({user,email,password});
      setEmail('')
      setPassword('')
      setuser('')

    }
    catch(error){
      setError(error.response?.data?.message);
      console.log(error.response?.data?.message);
      
    }
    
  }
   
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user}
            onChange={(e)=>setuser(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handelemail}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handelpassword}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Register
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>

    </div>
  );
};

export default Register;