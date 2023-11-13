import { type RouterOutputs, api } from "~/utils/api";
import PropertiesList from "~/components/PropertiesList/PropertiesList";
import AddProperty from "~/components/AddProperty/AddProperty";
import SearchBar from "~/components/SearchBar/SearchBar";
import styles from "../../styles/Properties.module.scss";
import { useState } from "react";

function Properties() {
  const [show, setShow] = useState(false);
  
  return (
    <section className={styles.properties}>
      <div className={styles.filter}>
        <SearchBar />
      </div>
      <div>
        <button onClick={() => setShow(!show)}>Add property</button>
      </div>
      {!!show && (
        <div className={styles.addPropertyContainer}>
          <AddProperty />
        </div>
      )}
      <div className={styles.propertyWrapper}>
        <PropertiesList />
      </div>
    </section>
  );
}
export default Properties;
