import { useRouter } from "next/router";
import SingleProperty from "~/components/SingleProperty/SingleProperty";
import { julius } from "~/pages/_app";
import styles from "~/styles/SingleProperty.module.scss";
import { api } from "~/utils/api";

function PropertyById() {
  const router = useRouter();
  const propertyId = router.query.id ?? "id";

  const { data } = api.property.getPropertyById.useQuery(propertyId);

  console.log(data);

  // const { id, name, description, address, images, price } = data!;

  

  return (
    !!data && (
      <SingleProperty
        id={data.id}
        images={data.images}
        name={data.name}
        description={data.description}
        address={data.address}
      />
    )
  );
}

export default PropertyById;
