const PropertyDetails = async ({ params }) => {
  const id = await params.id;
  return <div>PropertyDetails: {id}</div>;
};

export default PropertyDetails;
