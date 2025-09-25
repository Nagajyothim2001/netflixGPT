import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
  const navigate = useNavigate()
  const user =useSelector(store =>store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    navigate("/")
}).catch((error) => {
   navigate("/error")
});

  }
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black z-10">

      <img
        className="w-24 sm:w-32 md:w-40 lg:w-48"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />


      {
        user && <div className="flex items-center gap-3">
        <img
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-md object-cover"
          src={user?.photoURL || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk3NmmlpJ3rKlh5NPGAd00zocHhdamnxDepg&s"}
          
          alt="User Icon"
        />
        <button 
        onClick={handleSignOut}
        className="text-white text-sm sm:text-base px-2 sm:px-3 py-1 border border-white rounded hover:bg-white hover:text-black transition">
          Sign Out
        </button>
      </div>
      }
    </header>
  );
};

export default Header;
