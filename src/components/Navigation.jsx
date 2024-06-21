import React from 'react';
import './Navigation.css';

function Nav({ status, setStatus }) {
  return (
    <div className="nav">
      <p onClick={() => setStatus('all')} className={`nav-item ${status === 'all' ? 'active' : ''}`}>All</p>
      <p onClick={() => setStatus('active')} className={`nav-item ${status === 'active' ? 'active' : ''}`}>Active</p>
      <p onClick={() => setStatus('done')} className={`nav-item ${status === 'done' ? 'active' : ''}`}>Completed</p>
    </div>
  );
}

export default Nav;
