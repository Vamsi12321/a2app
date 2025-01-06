import React, { useEffect, useState } from 'react';
function IframeChild() {
  const [recievedMessage, setRecievedMessage] = useState("");

  const sendMessage = () => {
    window.parent.postMessage("hlo dad", "http://localhost:3000");
  };
  // const params = new URLSearchParams(window.location.search)
  //  const host =  params.get("host")
   console.log(window.location.href);
   console.log(window.parent.location.href);
  //  console.log(host);


  useEffect(() => {
    const handleMessage = (e) => {
      // Ignore messages from react-devtools
      if (e.origin !== "http://localhost:3000" || e.data.source === 'react-devtools-content-script') return;
      setRecievedMessage("Got this message from parent: " + e.data);
      console.log("Received message from parent:", e.data);
    };

    window.addEventListener("message", handleMessage);

    // Cleanup event listener
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div>

      <h2>IframeChild</h2>
      <button onClick={sendMessage}>Send data to parent</button>
      <p>{recievedMessage}</p>
   
    </div>
  );
}

export default IframeChild;
