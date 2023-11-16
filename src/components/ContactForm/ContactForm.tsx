import styles from "../../styles/ContactForm.module.scss";

function ContactForm() {
  
  return (
    <div className={styles.formWrapper}>
      <form className={styles.contactForm}>
        <div className={styles.formGroup}>
          <input
            className={styles.inpuntHalf}
            type="text"
            placeholder="First Name"
          />
          <input
            className={styles.inpuntHalf}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inpuntFull}
            type="text"
            placeholder="Company"
          />
        </div>
        <div className={styles.formGroup}>
          <input
            className={styles.inpuntHalf}
            type="text"
            placeholder="Email address"
          />
          <input
            className={styles.inpuntHalf}
            type="text"
            placeholder="Phone number"
          />
        </div>
        <div className={styles.formGroup}>
          <textarea
            rows={5}
            cols={50}
            className={styles.inpuntFull + " " + styles.textArea}
            placeholder="Enter your message here..."
          />
        </div>
        <div className={styles.formGroup}>
          <button className={styles.submitBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
