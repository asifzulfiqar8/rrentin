"use client";
import { useState } from "react";
import MyPropertiesHeader from "./MyPropertiesHeader";
import PropertyCard from "./PropertyCard";
import dynamic from "next/dynamic";
import { myPropertiesData } from "@/data/data";
const ShowMap = dynamic(() => import("@/components/shared/ShowMap"), {
  ssr: false,
});

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
            {myPropertiesData.map((card, i) => (
              <PropertyCard data={card} key={i} />
            ))}
          </div>
        ) : (
          <ShowMap />
        )}
      </div>
    </section>
  );
};

export default MyProperties;
