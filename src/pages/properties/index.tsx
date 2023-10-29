import { StandardDropzone } from "~/components/Dropzone/StandardDropzone";
import { type RouterOutputs, api } from "~/utils/api";
import PropertiesList from "~/components/PropertiesList/PropertiesList";
import AddProperty from "~/components/AddProperty/AddProperty";
import SearchBar from "~/components/SearchBar/SearchBar";
import styles from "../../styles/Properties.module.scss";
import { useState } from "react";

const UploadedImages = ({
  images,
}: {
  images: RouterOutputs["s3"]["getPresignedImages"];
}) => {
  if (!images || images.length === 0) return <div>No images uploaded yet.</div>;

  return (
    <div className="flex flex-row gap-2">
      <h2 className="text-lg font-semibold">Uploaded images</h2>
      {images.map((url: string) => {
        return (
          <div key={url}>
            <a href={url} target="_blank" rel="noreferrer">
              <img className={styles.image} src={url} alt="property photo" />
            </a>
          </div>
        );
      })}
    </div>
  );
};

function Properties() {
  const { data, isLoading } = api.s3.getPresignedImages.useQuery();
  console.log(data);
  
  return (
    <section className={styles.properties}>
      <div className={styles.filter}>
        <SearchBar />
      </div>
      {/* <div className={styles.addPropertyContainer}>
        <AddProperty />
      </div> */}

      <div className={styles.propertyWrapper}>
        <PropertiesList />
      </div>
      <div className="flex justify-center gap-32">
        <StandardDropzone />
      </div>
      <div className="flex justify-center gap-32 pb-5 pt-5">
        {!isLoading && data && <UploadedImages images={data} />}
      </div>
    </section>
  );
}
export default Properties;
