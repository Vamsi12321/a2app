import React, { useState, useEffect, useRef } from 'react';

function IframeParent() {
  const iFrameRef = useRef(null);
  const [recievedMessage, setRecievedMessage] = useState("");
  const domain = window.location.hostname
  const iframeSrc = `/iframe-child?host=${domain}`

  const sendMessage = () => {
    if (!iFrameRef.current) return;
    iFrameRef.current.contentWindow.postMessage("hello son", "http://localhost:3000");
    console.log(iFrameRef.current.contentWindow);
  };

  useEffect(() => { 
    const handleMessage = (e) => {
      // Ignore messages from react-devtools
      if (e.origin !== "http://localhost:3000" || e.data.source === 'react-devtools-content-script') return;
      setRecievedMessage("Got this message from child: " + e.data);
      console.log("Received message from child:", e.data);
    };

    window.addEventListener("message", handleMessage);

    // Cleanup event listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>      
      <h1>IframeParent</h1>
      <button onClick={sendMessage}>Send message to child</button>
      <iframe title='iframe' ref={iFrameRef} src={iframeSrc} width="600" height="300"></iframe>
      <p>{recievedMessage}</p>
      <br />
      <br />
    </div>
  );
}

export default IframeParent;
    