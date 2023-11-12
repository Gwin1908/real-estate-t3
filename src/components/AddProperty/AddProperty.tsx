import { api } from "~/utils/api";
import { useForm, type SubmitHandler } from "react-hook-form";
import styles from "~/styles/AddProperty.module.scss";
import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
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

  const { register, handleSubmit, reset } = useForm<Property>();

  const { mutate } = api.property.postProperty.useMutation({
    onSuccess: () => {
      reset();
      console.log("Property added");
      void ctx.property.getAll.invalidate();
    },
  });

  const onSubmit: SubmitHandler<Property> = (newProp) => {
    console.log(presignedUrls);
    console.log(uuidsArr);
    images.map(async (item, index) => {
      await axios
        .put(presignedUrls[index]!, images[index]!.slice(), {
          headers: { "Content-Type": images[index]!.type },
        })
        .then((response) => {
          console.log(response);
          console.log("Successfully uploaded ", uuidsArr[index]);
        })
        .catch((err) => console.error(err));
      await ctx.s3.getPresignedImages.invalidate();
    });

    console.log(newProp);
    mutate(newProp);
  };

  const [presignedUrls, setPresignedUrls] = useState<string[]>([]);
  const [uuidsArr, setUuidsArr] = useState<string[]>([]);
  const [images, setImages] = useState<File[]>([]);

  const { mutateAsync: fetchPresignedUrls } =
    api.s3.getStandardUploadPresignedUrl.useMutation();

  const handleUpload = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    const imagesArr = Object.values(target.files!);

    const urls: string[] = [];
    const uuids: string[] = [];

    setImages(imagesArr);

    imagesArr.forEach(() => {
      const fileName: string = uuidv4();
      uuids.push(fileName);
      fetchPresignedUrls({
        key: fileName,
      })
        .then((url) => {
          urls.push(url);
        })
        .catch((err) => console.error(err));
    });

    setPresignedUrls(urls);
    setUuidsArr(uuids);
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
        onChange={(e) => {
          handleUpload(e);
        }}
      />
      <div className={styles.submitWrapper}>
        <input type="submit" className={styles.submit} />
      </div>
    </form>
  );
}
export default AddProperty;
