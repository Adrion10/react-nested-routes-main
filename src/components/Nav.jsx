import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link to='/'>
        <h2>Lace</h2>
      </Link>

      <nav>
        <ul>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>Home</li>
          </NavLink>

          <NavLink
            to='about'
            className={({ isActive }) => (isActive ? 'active' : null)}>
            <li>About</li>
          </NavLink>

          <NavLink
            to='photos'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>Photos</li>
          </NavLink>

          <NavLink
            to='selections'
            style={({ isActive }) => {
              return { color: isActive && 'green' };
            }}>
            <li>Selections</li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
