import React from 'react'

function IframeComponent() {
    const params = new URLSearchParams(window.location.host)
    console.log(params);
  return (
    <div>IframeComponent</div>
  )
}

export default IframeComponent