import Link from "next/link";
import PropertiesList from "~/components/PropertiesList/PropertiesList";
import SearchBar from "~/components/SearchBar/SearchBar";
import styles from "../../styles/Properties.module.scss";

function AdminPage() {
  return (
    <section className={styles.properties}>
      <div className={styles.filter}>
        <SearchBar />
      </div>
      <div className={styles.buttonsContainer}>
        <Link href="admin/add">
          <button className={styles.addButton}>Add property</button>
        </Link>
      </div>
      <div className={styles.propertyWrapper}>
        <PropertiesList />
      </div>
    </section>
  );
}
export default AdminPage;
