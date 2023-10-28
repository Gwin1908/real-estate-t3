import { api } from "~/utils/api";
import styles from "~/styles/PropertiesList.module.scss";
import PropertyItem from "./PropertyItem";

function PropertiesList() {
  const { data } = api.property.getAll.useQuery();

  console.log(data);

  const ctx = api.useContext();

  return (
    <>
      <div className={styles.propertiesContaier}>
        <div className={styles.propertiesList}>
          {data?.map(({ id, name, address, price, description, telephone }) => (
            <PropertyItem
              key={id}
              id={id}
              name={name}
              address={address}
              price={price}
              description={description}
              telephone={telephone}
            />
          ))}
        </div>
      </div>
    </>
  );
}
export default PropertiesList;
