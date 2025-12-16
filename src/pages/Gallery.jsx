import React from "react";
import "../pages/Gallery.css";

const Gallary = () => {
  return (
    <div className="gallery mt-28 ">
      <div className="banner">
        <div className="slider" style={{ "--quantity": 10 }}>
          {/* Image Items */}
          {Array.from({ length: 10 }, (_, i) => (
            <div className="item" style={{ "--position": i + 1 }} key={i}>
              <img src={`/images/dragon_${i + 1}.jpeg`} alt={`Dragon ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="content">
          <h1>Mehndi Designs</h1>
        </div>
      </div>
    </div>
  );
};

export default Gallary;