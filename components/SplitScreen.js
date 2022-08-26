import React, { useState } from "react";
import styles from "@styles/SplitScreen.module.css";
import LeftIcon from "@public/icons/leftArrow.svg";
import RightIcon from "@public/icons/rightArrow.svg";
import Image from "next/image";

const SplitScreen = () => {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);
  const [showDiv, setShowDiv] = useState(false);

  const firstCardOpen = () => {
    setFirstCard(true);
    setSecondCard(false);
  };
  const secondCardOpen = () => {
    setSecondCard(true);
    setFirstCard(false);
  };
  return (
    <>
      <section
        className={styles.split}
        style={{ height: showDiv ? "0" : "100vh" }}
      >
        <div
          className={styles.screen}
          style={{
            flexGrow: firstCard && 22,
            minWidth: !secondCard && !firstCard && "350px",
          }}
        >
          {!secondCard && (
            <>
              <div
                className={styles.card}
                style={{
                  position: !firstCard && "absolute",
                  flexGrow: firstCard && 1,
                }}
              >
                <p style={{ fontStyle: "italic" }}>Why Learn At TSC</p>
                <h1>COURSES WE TEACH</h1>
                {firstCard ? (
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem excepturi ducimus magni? Magni perspiciatis ad quaerat
                    porro dicta, incidunt aperiam amet laboriosam sunt quam
                    tenetur ratione deserunt officia odio qui!
                  </p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, qui!
                  </p>
                )}
                <a
                  className={styles.btn}
                  href="#"
                  onClick={() =>
                    firstCard ? setShowDiv(true) : setFirstCard(true)
                  }
                >
                  {firstCard ? "Add to bag" : "Discover more"}
                </a>
              </div>
              <div className={styles.img}>
                <Image
                  layout="fill"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e810beff7a8011b340_image-1-perks-education-x-template.svg"
                  alt="training"
                />
              </div>
            </>
          )}
          <div
            className={styles.firstDiv}
            onClick={firstCardOpen}
            style={{
              display: secondCard ? "flex" : "none",
            }}
          >
            <LeftIcon height={22} width={22} fill="#fff" />
          </div>
        </div>
        <div
          className={styles.screen}
          style={{
            flexGrow: secondCard && 22,
            minWidth: !secondCard && !firstCard && "350px",
          }}
        >
          {!firstCard && (
            <>
              <div
                className={styles.card}
                style={{
                  position: !secondCard && "absolute",
                  flexGrow: secondCard && 1,
                }}
              >
                <p style={{ fontStyle: "italic" }}>Web/App Development</p>
                <h1>Services We Offer</h1>
                {secondCard ? (
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Autem excepturi ducimus magni? Magni perspiciatis ad quaerat
                    porro dicta, incidunt aperiam amet laboriosam sunt quam
                    tenetur ratione deserunt officia odio qui!
                  </p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi, qui!
                  </p>
                )}
                <a
                  className={styles.btn}
                  href="#"
                  onClick={() =>
                    secondCard ? setShowDiv(true) : setSecondCard(true)
                  }
                >
                  {secondCard ? "Add to bag" : "Discover more"}
                </a>
              </div>
              <div className={styles.img}>
                <Image
                  layout="fill"
                  src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e8c0c9f4644adea00a_image-3-perks-education-x-template.svg"
                  alt="development"
                />
              </div>
            </>
          )}
          <div
            className={styles.secondDiv}
            onClick={secondCardOpen}
            style={{ display: firstCard ? "flex" : "none" }}
          >
            <RightIcon height={22} width={22} fill="#fff" />
          </div>
        </div>
        <div className={styles.logo}>
          <Image src="/LOGO_PNG.png" layout="fill" />
        </div>
      </section>
      <div
        className={styles.hideDiv}
        style={{
          height: showDiv ? "100vh" : "-200vh",
          zIndex: showDiv ? 3 : -1,
        }}
      >
        <a
          className={styles.showbtn}
          href="#"
          onClick={() => {
            setShowDiv(false), setFirstCard(false), setSecondCard(false);
          }}
        >
          Back to top
        </a>
      </div>
    </>
  );
};

export default SplitScreen;
