import { useContext } from "react";
import { api } from "~/utils/api";
import styles from "~/styles/PropertiesList.module.scss";
import PropertyItem from "./PropertyItem";
import { PropertiesContext } from "~/context/PropertiesContext";

function PropertiesList() {
  const { data } = api.property.getAll.useQuery();
  
  const { searchInput } = useContext(PropertiesContext);
  
  const { data: searchData } = api.property.getSearched.useQuery(searchInput);

  const properties = searchData ?? data ?? [];

  return (
    <>
      <div className={styles.propertiesContaier}>
        <div className={styles.propertiesList}>
          {properties?.map(
            ({ id, name, address, price, description, images }) => (
              <PropertyItem
                key={id}
                id={id}
                name={name}
                address={address}
                price={price}
                description={description}
                images={images}
              />
            ),
          )}
        </div>
      </div>
    </>
  );
}
export default PropertiesList;
