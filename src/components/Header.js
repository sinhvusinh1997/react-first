import React from "react";

const Header = () => {
  const headerStyle = {
    textAlign: 'center',
    background: '#333',
    color: 'white',
    padding: '10px 0',
    fontSize: '20px',
    marginBottom: '20px'
  }

  
  return (
    <header style={headerStyle}>
      <h1>TO DO LIST</h1>
    </header>
  )
};

export default Header;