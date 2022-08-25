import React, { useState } from "react";
import styles from "@styles/SplitScreen.module.css";
import LeftIcon from '@public/icons/leftArrow.svg'
import RightIcon from '@public/icons/rightArrow.svg'
import Image from "next/image";

const SplitScreen = () => {
  const [firstCard, setFirstCard] = useState(false);
  const [secondCard, setSecondCard] = useState(false);

  const firstCardOpen = () => {
    setFirstCard(true);
    setSecondCard(false);
  };
  const secondCardOpen = () => {
    setSecondCard(true);
    setFirstCard(false);
  };
  return (
    <section className={styles.split}>
      <div className={styles.screen} style={{ flexGrow: firstCard && 22,  minWidth: !secondCard && !firstCard && '350px'}}>
        {!secondCard && (
          <>
            <div
              className={styles.card}
              style={{ position: !firstCard && "absolute" }}
            >
              <p style={{fontStyle: 'italic'}}>Autem excepturi</p>
              <h1>MMM AHHH ..PUSH IT!</h1>
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
                onClick={() => setFirstCard(!firstCard)}
              >
                {firstCard ? "Add to bag" : "Discover more"}
              </a>
            </div>
            <div className={styles.img}>
              <Image layout="fill" src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e8c0c9f4644adea00a_image-3-perks-education-x-template.svg" alt="Skateboard" />
            </div>
          </>
        )}
        <div
          className={styles.firstDiv}
          onClick={firstCardOpen}
          style={{ display: secondCard ? "flex" : "none" }}
        >
          <LeftIcon height={22} width={22} fill='#fff' />
        </div>
      </div>
      <div className={styles.screen} style={{ flexGrow: secondCard && 22, minWidth: !secondCard && !firstCard && '350px'}}>
        {!firstCard && (
          <>
            <div
              className={styles.card}
              style={{ position: !secondCard && "absolute" }}
            >
              <p style={{fontStyle: 'italic'}}>Magni perspiciatis ad quaerat</p>
              <h1>
                BECAUSE <br /> I'M HAPPY AGAIN.
              </h1>
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
                onClick={() => setSecondCard(!secondCard)}
              >
                {secondCard ? "Add to bag" : "Discover more"}
              </a>
            </div>
            <div className={styles.img}>
              <Image layout="fill" src="https://assets.website-files.com/607de2d8e8911e32707a3efe/607e21e810beff7a8011b340_image-1-perks-education-x-template.svg" alt="Shoes" />
            </div>
          </>
        )}
        <div
          className={styles.secondDiv}
          onClick={secondCardOpen}
          style={{ display: firstCard ? "flex" : "none" }}
        >
          <RightIcon height={22} width={22} fill='#fff' />
        </div>
      </div>
    </section>
  );
};

export default SplitScreen;
