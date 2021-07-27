import React from "react";
import icon from './../../assets/images/spinner.svg';

const CircularProgress = ({className}) =>
    <div className={`loader ${className}`} style={{
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <img src={icon} style={{height: 100, width: 100}} alt="loader"/>
    </div>
;
export default CircularProgress;
