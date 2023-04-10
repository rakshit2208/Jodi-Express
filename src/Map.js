import React from "react";
import "./Map.css";

function Map() {
  return (
    <div>
      <div className="responsive-map" style={{marginTop:"20px"}}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889"
          width={600}
          height={200}
          frameBorder={0}
          style={{ border: 0 }}
        //   allowFullScreen
        /> */}
        <iframe className="iframe1"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119037.49550084474!2d81.338075!3d21.19526785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cccec49ed45%3A0x2b3ff3bd73c91877!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1681116662894!5m2!1sen!2sin"
          width="400"
          height="300"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
