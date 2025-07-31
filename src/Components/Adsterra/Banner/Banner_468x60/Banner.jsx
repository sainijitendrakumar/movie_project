import React from "react";
import { useEffect, useRef } from "react";

function Banner() {
  const adRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "www.highperformanceformat.com/6e8e81bc18ac4e0aa2ba72bc7a84addf/invoke.js"; // Replace with your Adsterra URL
    script.async = true;

    if (adRef.current) {
      adRef.current.innerHTML = "";
      adRef.current.appendChild(script);
    }
  }, []);
  return <div ref={adRef} style={{ width: "468px", height: "60px" }}></div>;
}

export default Banner;
