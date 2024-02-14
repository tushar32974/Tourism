import React from "react";
import "../App_copy.css";
import avtar from "../images/avatar-2.png"
const Testimonial = () => {
  return (
    <div className="owl-item cta_item text-center">
      <div className="cta_title">Highly Recommended</div>
      <div className="testi-profile">
        <img src={avtar} alt="client" />
      </div>
      <p className="cta_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu
        convallis tortor. Suspendisse potenti. In faucibus massa arcu, vitae
        cursus mi hendrerit nec. Proin bibendum, augue faucibus tincidunt
        ultrices, tortor augue gravida lectus, et efficitur enim justo vel
        ligula.
      </p>
      <div className="text-name">
        <h4>
          <strong>Suresh</strong>
        </h4>
      </div>
    </div>
  );
};

export default Testimonial;
