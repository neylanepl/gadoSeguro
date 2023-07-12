import React from 'react';
import { useNavigate } from 'react-router-dom';

const BtnGreen = ({title, route}) => {
  const navigate = useNavigate();

  return (
    <button className="btn btn-success" 
      style={{ backgroundColor: "#83A93A", borderColor: "#6D3B00" }} 
      onClick={e => navigate(route)}>
      {title}
    </button>
  );
};

export default BtnGreen;
