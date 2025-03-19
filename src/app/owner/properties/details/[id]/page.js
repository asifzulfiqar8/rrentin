import PropertiesImageSlider from "@/components/owner/properties/PropertiesImageSlider";

const PropertyDetails = ({ params }) => {
  const id = params.id;
  return (
    <div>
      <h6 className="text-lg md:text-[22px] font-semibold text-textColor mb-[18px]">
        Property Details
      </h6>
      <PropertiesImageSlider />
    </div>
  );
};

export default PropertyDetails;
