import Image from "next/image";
import styles from "../../styles/Featured.module.scss";
import Link from "next/link";

function Properties() {
  function submitFrom(e: SubmitEvent) {
    e.preventDefault();
    console.log("submitted");
    console.log(e);
    return;
  }
  return (
    <section className={styles.properties}>
      <h1>Add propety</h1>
      <form
        onSubmit={(e) => {
          submitFrom(e);
        }}
      >
        <input type="text" placeholder="Property Name" />
        <input type="text" placeholder="Property Address" />
        <input type="text" placeholder="Property Price" />
        <input type="text" placeholder="Property Description" />
        <button type="submit">Add Property</button>
        <Link href="/">Cancel</Link>
      </form>
    </section>
  );
}
export default Properties;
