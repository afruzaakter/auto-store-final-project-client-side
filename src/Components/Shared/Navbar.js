import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from './Loading';
import logo from '../../assets/images/logo.png'
import useParts from '../../hooks/useParts';

const Navbar = () => {
    const [user, loading] = useAuthState(auth);
 
    const {id} = useParams();
    
    if(loading){
        return <Loading></Loading>
    }
    const handleSignOut = () =>{
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    const menuItem = <>
        <li className='mr-2 font-bold text-secondary'><NavLink to="/">HOME</NavLink></li>
       
        {
            user && <>
            <li className='mr-2 font-bold text-secondary'><NavLink to='/dashboard'>DASHBOARD</NavLink></li>
            </>
        }
        <li className='mr-2 font-bold text-secondary'><NavLink to="blogs">BLOGS</NavLink></li>
        <li className='mr-2 font-bold text-secondary'><NavLink to="myportfolio">MY PORTFOLIO</NavLink></li>
        

        {
            user? <button className='btn btn-white ' onClick={handleSignOut}>Sign Out</button>:
            <li className='mr-2 text-secondary font-bold'><NavLink to="login">LOGIN</NavLink></li>
        }
      

    </>
    return (
        <div className="navbar p-5 pl-28 fixed top-0 z-40 bg-info">
            <div className="navbar-start">
                <div className="dropdown w-full flex justify-between  ">
                    {/* <div> <a className="btn btn-ghost normal-case text-xl">daisyUI</a> </div> */}
                    <div> <img src={logo} alt="logo" /> </div>
                    <div>
                        <label tabIndex="0" className="btn text-white font-bold btn-ghost lg:hidden ">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box ">

                            {menuItem}

                        </ul>
                    </div>
                </div>

            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuItem}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;