import styles from "~/styles/PropertyItem.module.scss";
import { api } from "~/utils/api";
import type { Property } from "../AddProperty/AddProperty";

function PropertyItem({
  id,
  name,
  address,
  price,
  description,
  telephone,
}: Property) {
  const ctx = api.useContext();

  const { mutate: deleteProp } = api.property.deleteProperty.useMutation({
    onSuccess: () => {
      console.log("Property added");
      void ctx.property.getAll.invalidate();
    },
  });

  const handleDelete = (id: string) => {
    deleteProp({ id });
  };

  return (
    <div className={styles.property}>
      <button
        onClick={() => {
          handleDelete(id);
        }}
        className={styles.delete}
      >
        Delete item
      </button>
      {/* <Image src={image} alt="property" width={300} height={200} /> */}
      <h2>{name}</h2>
      <p>{address}</p>
      <p>{price}</p>
      <p>{description}</p>
      <p>{telephone}</p>
    </div>
  );
}
export default PropertyItem;
