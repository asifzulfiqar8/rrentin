"use client";
import { useState } from "react";
import MyPropertiesHeader from "./MyPropertiesHeader";
import PropertyCard from "./PropertyCard";
import ShowMap from "@/components/shared/ShowMap";

const MyProperties = () => {
  const [tabView, setTabView] = useState("Grid View");
  return (
    <section
      className="bg-white rounded-lg p-4 mt-4"
      style={{ boxShadow: "0px 2px 12px 0px #3582E71A" }}
    >
      <MyPropertiesHeader tabView={tabView} setTabView={setTabView} />
      <div className="mt-5">
        {tabView === "Grid View" ? (
          <div className="grid grid-cols-1 mg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-h-[800px] overflow-y-scroll scroll-0">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 8, 9, 78, 7, 6, 6, 6].map(
              (card, i) => (
                <PropertyCard key={i} />
              )
            )}
          </div>
        ) : (
          <ShowMap />
        )}
      </div>
    </section>
  );
};

export default MyProperties;
