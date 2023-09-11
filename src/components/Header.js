import React from 'react';

function Header() {
  return (
    <div className="Header" data-testid="Header">
      <img
        src='images/wired-brain-coffee-logo.png'
        style={{width:'300px'}}
        alt="Wired Brain" />
      {/* <h3>This is a test-driven header component</h3> */}
    </div>
  );
}

export default Header;
