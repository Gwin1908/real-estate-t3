import { useRouter } from "next/router";
import SinglePropertyModifiable from "~/components/SingleProperty/SinglePropertyModifiable";
import { api } from "~/utils/api";

function PropertyById() {
  const router = useRouter();

  const propertyId = router.query.id?.toString() ?? ""

  const { data } = api.property.getPropertyById.useQuery(propertyId);

  return (
    !!data && (
      <SinglePropertyModifiable
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