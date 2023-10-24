import Image from "next/image";
import Link from "next/link";
import { api } from "~/utils/api";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "~/styles/AddProperty.module.scss";

export type Property = {
  id: string;
  name: string;
  address: string;
  price: string;
  description: string;
  telephone: string;
};

function AddProperty() {
  
  const ctx = api.useContext();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Property>();

  const { mutate } = api.property.postProperty.useMutation({
    onSuccess: () => {
      reset();
      console.log("Property added");
      void ctx.property.getAll.invalidate();
    },
  });

  const onSubmit: SubmitHandler<Property> = (newProp) => {
    console.log(newProp);
    mutate(newProp);
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => void handleSubmit(onSubmit)(event)}
    >
      <h1 className={styles.title}>Add propety</h1>
      <input type="text" placeholder="Property Name" {...register("name")} />
      <input
        type="text"
        placeholder="Property Address"
        {...register("address")}
      />
      <input type="text" placeholder="Property Price" {...register("price")} />
      <input
        type="text"
        placeholder="Property Description"
        {...register("description")}
      />
      <input type="text" placeholder="Telephone" {...register("telephone")} />
      <input type="submit" className={styles.submit} />
      <Link href="/">Back</Link>
    </form>
  );
}
export default AddProperty;
