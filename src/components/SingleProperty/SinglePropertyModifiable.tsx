import { api } from "~/utils/api";
import { type Property } from "../AddProperty/AddProperty";
import styles from "~/styles/SingleProperty.module.scss";
import { julius } from "~/pages/_app";
import { type SubmitHandler, useForm } from "react-hook-form";

function SinglePropertyModifiable({ id, images, name, description, address }:Property) {
  
  const ctx = api.useContext();

  const imagesArr = images.split(", ") ?? [];
  
  const { data: imagesData } = api.s3.getPropertyImages.useQuery(imagesArr);

  const {mutate} = api.property.modifyProperty.useMutation({    
    onSuccess: () => {
    reset();
    console.log("Property modified");
    void ctx.property.getAll.invalidate();
  },
})

  const { register, handleSubmit, reset } = useForm<Property>();

  const onSubmit: SubmitHandler<Property> = (newProp) => {
    console.log(newProp);
    mutate({
      id,
      name: newProp.name,
      description: newProp.description,
      address: newProp.address,
    })
  };


  return (
    <section className={styles.singleProperty}>
      <div className={styles.bgImage}>
        {!!imagesData && (
            <img src={imagesData[0]} alt="property" width={1600} height={1000} className={styles.image}/>
          )}
        <div className={styles.address}>
          <p className={styles.street}>{name}</p>
          <p className={styles.city}>{address}</p>
        </div>
      </div>
      <form className={styles.wrapper} onSubmit={(event) => void handleSubmit(onSubmit)(event)}>
        <div className={styles.header}>
          <input className={styles.adminInputHeader} {...register("name")} placeholder="Enter Name" defaultValue={name}></input>
          <div className={styles.tags}>
            <div>
              6 <span>BEDS</span>
            </div>
            <div>
              8 <span>BATHS</span>
            </div>
            <div>
              6,451 <span>SQFT</span>
            </div>
            <div>
              0.705 <span>ACRES</span>
            </div>
          </div>
        </div>
        <textarea className={styles.adminTextarea} {...register("description")} placeholder="Enter Description" defaultValue={description} rows={15}></textarea>
        <input className={styles.adminInput} {...register("address")} placeholder="Enter Address" defaultValue={address}></input>
        <button className={styles.submitBtn} type="submit">Submit</button>
        <div className={styles.contacts + " " + julius.className}>
          <img
            src="/pr-image.jpg"
            alt="realtor photo"
            width={200}
            height={200}
            className={styles.contacts__image}
          />
          <div className={styles.contacts__info}>
            <p>Name</p>
            <p>Realtor</p>
            <p>Telephone</p>
            <p>Email</p>
            <p>Other</p>
          </div>
        </div>
        <div>Map api</div>
      </form>
    </section>
  );
}

export default SinglePropertyModifiable;
