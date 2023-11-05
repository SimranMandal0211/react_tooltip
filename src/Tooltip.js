import React from 'react';
import './App.css';

function Tooltip(props) {
    const sendPos = () => {
        return `${props.position}`;
    }

    const getTrianglePosition = () => {
        let triangleStyle = {};
    
        switch (props.position) {
          case 'top':
            triangleStyle.top = '100%';
            triangleStyle.left = 'calc(50% - 10px)';
            triangleStyle.transform = 'rotate(0deg)';
            break;
          case 'right':
            triangleStyle.top = 'calc(50% - 6px)';
            triangleStyle.left = '-15px';
            triangleStyle.transform = 'rotate(90deg)';
            break;
          case 'down':
            triangleStyle.top = '-10px';
            triangleStyle.left = 'calc(50% - 10px)';
            triangleStyle.transform = 'rotate(180deg)';
            break;
          case 'left':
            triangleStyle.top = 'calc(50% - 6px)';
            triangleStyle.left = '99%';
            triangleStyle.transform = 'rotate(270deg)';
            break;
          default:
            break;
        }
    
        return triangleStyle;
    }

    return (
        <>
            <div className={`tooltip ${sendPos()} bounce`}>
                <span className="triangle" 
                style={getTrianglePosition()}></span>
                Thanks for hovering "{props.position}" position!
            </div>
        </>
    );
}

export default Tooltip;
