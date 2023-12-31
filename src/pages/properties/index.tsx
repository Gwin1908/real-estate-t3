import PropertiesList from "~/components/PropertiesList/PropertiesList";
import SearchBar from "~/components/SearchBar/SearchBar";
import styles from "../../styles/Properties.module.scss";

function Properties() {
  
  return (
    <section className={styles.properties}>
      <div className={styles.filter}>
        <SearchBar />
      </div>
      <div className={styles.propertyWrapper}>
        <PropertiesList />
      </div>
    </section>
  );
}
export default Properties;
