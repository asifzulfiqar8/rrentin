"use client";
import { useState } from "react";
import MyPropertiesHeader from "./MyPropertiesHeader";
import PropertyCard from "./PropertyCard";

const MyProperties = () => {
  const [tabView, setTabView] = useState("Grid View");
  return (
    <section
      className="bg-white rounded-lg p-4 mt-4"
      style={{ boxShadow: "0px 2px 12px 0px #3582E71A" }}
    >
      <MyPropertiesHeader tabView={tabView} setTabView={setTabView} />
      <div className="mt-5">
        {tabView === "Grid View" ? <PropertyCard /> : <div>Map</div>}
      </div>
    </section>
  );
};

export default MyProperties;
