import { NextPage } from "next";
import styles from "../../styles/Properties.module.scss";
import Image from "next/image";
import Link from "next/link";
import AddProperty from "~/components/AddProperty/AddProperty";
import { StandardDropzone } from "~/components/Dropzone/StandardDropzone";
import PropertiesList from "~/components/PropertiesList/PropertiesList";
import { RouterOutputs, api } from "~/utils/api";

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
      <div className="flex justify-center">
        <AddProperty />
      </div>
      <PropertiesList />
      <div className="flex justify-center gap-32">
        <StandardDropzone />
      </div>
      {!isLoading && data && <UploadedImages images={data} />}
    </section>
  );
}
export default Properties;
