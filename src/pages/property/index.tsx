import Image from "next/image";
import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
// import { type EmblaOptionsType } from "embla-carousel-react";
// import EmblaCarousel from "~/components/Carousel/EmblaCarousel";
import styles from "~/styles/SingleProperty.module.scss";

function SingleProperty() {
  // const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true };
  // const SLIDE_COUNT = 4;
  // const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <section className={styles.singleProperty}>
        <Header />
        <div className={styles.bgImage}>
          <div className={styles.address}>
            <p className={styles.street}>33602 Pacific Coast Highway</p>
            <p className={styles.city}>Malibu, CA</p>
          </div>
        </div>
        {/* <div className={styles.carouselContainer}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div> */}
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <h1>33602 Pacific Coast Highway, Malibu, CA, 90265</h1>
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
          <div className={styles.description}>
            An architectural masterpiece. One of the most iconic properties on
            the California coast. The Wave House is the design of visionary
            architect Harry Gesner. Offered for sale for the first time in
            nearly 36 years. An avid surfer throughout his life, Gesner famously
            designed the house to emulate cresting waves. The house was
            completed in 1963 and exudes a mid-century modern aesthetic
            throughout emphasizing open space and natural light. Tucked into a
            hidden cove in Western Malibu, the home commands majestic views of
            the ocean waves, distant islands and surrounding landscape. The
            residence has two distinct parts. Three enormous oceanfront vaulted
            public rooms and a stunning beachfront primary suite with hot tub
            and sauna, plus a five-bedroom upper level that stretches the width
            of the property to offer ocean views from nearly every room.
            Architectural elements include enormous beams, wood-plank ceilings
            rest above hardwood floors and walls of glass with ocean beyond.
            Perhaps the most distinctive design theme is a series of overlapping
            circles. Three wraparound decks echo the shape of the incoming surf.
            The sunken conversation pit swirls around its central fireplace.
            Even the shape of the hand-cut copper shingles that cover the roof
            resemble the scales of a fish. A separate garage/guest house
            structure offers additional bedrooms. Providing the very essence of
            coastal living, the home features an expansive, landscaped entry
            patio, plus wide, semicircular decks for dining, entertaining,
            lounging, and sea and stargazing. Square footage calculations only
            reflect main house (not guest house). Shown only to prequalified
            buyers.
          </div>
          <div className={styles.contacts}>
            <Image
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
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SingleProperty;
