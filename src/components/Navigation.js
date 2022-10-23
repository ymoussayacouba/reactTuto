import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to='/' className={(nav)=>(nav.isActive ? 'nav-active' : '' )} end>
                    <li>Acceuil</li>
                    </NavLink>
                <NavLink to='/about' className={(nav)=>(nav.isActive ? 'nav-active' : '' )} end>
                    <li>A propos</li>
                </NavLink>
                <NavLink to='/blog' className={(nav)=>(nav.isActive ? 'nav-active' : '' )} end>
                    <li>Blog</li>
                </NavLink>
                
            </ul>
            
        </div>
    );
};

export default Navigation;