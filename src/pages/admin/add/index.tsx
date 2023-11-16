import AddProperty from "~/components/AddProperty/AddProperty";
import styles from "~/styles/Properties.module.scss";

function AddPropertyPage() {
  return (
    <section className={styles.properties}>
      <div className={styles.addPropertyContainer}>
        <AddProperty />
      </div>
    </section>
  );
}
export default AddPropertyPage;
