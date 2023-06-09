import React from 'react'

const Avatar = ({ children, py, px, backgroundColor, color, borderRadius, fontSize, cursor}) => {

    const style = {
        backgroundColor,
        padding : `${py} ${px}`,
        color: color || 'black',
        borderRadius,
        fontSize,
        textAlign:"center",
        cursor : cursor || "pointer",
        textDecoration : "none"
    }

  return (
    <div style={style}>
      { children }
    </div>
  )
}

export default Avatar
