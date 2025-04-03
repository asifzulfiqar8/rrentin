import MyProperties from "@/components/owner/properties/MyProperties";
import PropertyHeader from "@/components/owner/properties/PropertyHeader";
import TopCards from "@/components/owner/properties/TopCards";

const Properties = () => {
  return (
    <div>
      <PropertyHeader />
      <TopCards />
      <MyProperties />
    </div>
  );
};

export default Properties;
