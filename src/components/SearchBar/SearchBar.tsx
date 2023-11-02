import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/SearchBar.module.scss";
import { useForm, SubmitHandler, set } from "react-hook-form";
import { PropertiesContext } from "~/context/PropertiesContext";

export type Input = {
  text: string;
};

function SearchBar() {  
    const {  setSeacrhInput } = useContext(PropertiesContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>();

    const onSubmit: SubmitHandler<Input> = (newProp) => {
      console.log(newProp);
      setSeacrhInput(newProp.text);
    };

  return (
    <form
      className={styles.container}
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <input
        type="text"
        className={styles.input}
        placeholder="Type search data"
        {...register("text")}
      />
      <button type="submit">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </form>
  );
}

export default SearchBar;
