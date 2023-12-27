import React from "react";

const MySpecialisations = () => {
  const specializations = [
    { name: "Body Building", imageUrl: 'url("src/assets/yoga_1.jpg")', id: "BodyBuilding" },
    { name: "Power Lifting", imageUrl: 'url("src/assets/nutrition_1.jpg")', id: "PowerLifting" },
    { name: "Prehab & Rehab", imageUrl: 'url("src/assets/sup.jpg")', id: "PrehabRehab" },
    { name: "Nutritional Coaching", imageUrl: 'url("src/assets/stretching_1.jpg")', id: "NutritionalCoaching" },
  ];

  return (
    <div className="profile-aboutme-main">
      <div className="profile-aboutme-left-box" style={{ background: "#3b3b3b" }}>
        <h2
          style={{
            fontSize: "34px",
            marginBottom: "10px",
            color: "white",
            marginLeft: "80px",
            fontWeight: "500",
            marginTop: "40px",
          }}
        >
          My Specializations
        </h2>
        <div className="under-line" style={{ backgroundColor: "white" }}></div>
        <div className="contact-icons" style={{ color: "white" }}>
          {specializations.map((spec, index) => (
            <a key={index} href={``} className="specialization-link" style={{ color: "white", textDecoration: "none" }}>
              {spec.name}
            </a>
          ))}
        </div>
      </div>
      <div
        className="profile-aboutme-right-box"
        style={{ background: "#ffffff", display: "flex", flexDirection: "row", alignItems: "normal" }}
      >
        {specializations.map((spec, index) => (
          <a key={index}  className="profile-cards" style={{ backgroundImage: spec.imageUrl, backgroundSize: "cover" }}>
            <h2>{spec.name}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

export default MySpecialisations;
