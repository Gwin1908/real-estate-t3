import { useRouter } from "next/router";
import SingleProperty from "~/components/SingleProperty/SingleProperty";
import { api } from "~/utils/api";

function PropertyById() {
  const router = useRouter();

  const propertyId = router.query.id?.toString() ?? ""

  console.log(propertyId)

  const { data } = api.property.getPropertyById.useQuery(propertyId);

  return (
    !!data && (
      <SingleProperty
        id={data.id}
        images={data.images}
        name={data.name}
        description={data.description}
        address={data.address}
        price={data.price}
      />
    )
  );
}

export default PropertyById;
