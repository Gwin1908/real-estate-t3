import { api } from "~/utils/api";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "~/styles/AddProperty.module.scss";
import { v4 as uuidv4 } from "uuid";

import { useMemo, useState } from "react";
import axios from "axios";

export type Property = {
  id: string;
  name: string;
  address: string;
  price: string;
  description: string;
  image: string[];
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

  const onSubmit: SubmitHandler<Property> = async(newProp) => {
    const file = images[0];
    console.log(file);

    await axios
      .put(presignedUrl, file.slice(), {
        headers: { "Content-Type": file.type },
      })
      .then((response) => {
        console.log(response);
        console.log("Successfully uploaded ", file.name);
      })
      .catch((err) => console.error(err));
    setSubmitDisabled(true);
    await ctx.s3.getPresignedImages.invalidate();

    console.log(newProp);
    mutate(newProp);
  };

  const [presignedUrl, setPresignedUrl] = useState<string | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [images, setImages] = useState<File[]>([]);

  const { mutateAsync: fetchPresignedUrls } =
    api.s3.getStandardUploadPresignedUrl.useMutation();

  const handleUpload = (e: { target: { files: File } }) => {
    setImages(e.target.files);
    const fileName: string = uuidv4();

    fetchPresignedUrls({
      key: fileName,
    })
      .then((url) => {
        console.log(url);
        setPresignedUrl(url);
        setSubmitDisabled(false);
      })
      .catch((err) => console.error(err));
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
      <textarea
        rows={5}
        cols={50}
        placeholder="Property Description"
        {...register("description")}
      />
      <input
        type="file"
        multiple
        className={styles.uploadImage}
        {...register("image")}
        onChange={handleUpload}
      />
      {/* <button
        onClick={() => void submitFiles}
        disabled={presignedUrl === null || submitDisabled}
      >
        Submit Files
      </button> */}
      <div className={styles.submitWrapper}>
        <input type="submit" className={styles.submit} />
      </div>
    </form>
  );
}
export default AddProperty;
