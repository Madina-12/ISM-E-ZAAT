// import styles from "./ISM_E_ZAAT_MUBARAK.module.css";
import styles from "../styles/Home.module.css";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";
import Image from "next/image";
import Head from "next/head";

const ISM_E_ZAAT_MUBARAK = () => {
  const [state, setState] = useState(true);
  const [fast, setFast] = useState(2400);
  const [isConstant, setIsConstant] = useState(false);
  const [isDisplay, setIsDisplay] = useState("block")
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: fast },
    loop: true,
    immediate: isConstant === "false" ? true : false,
  });

  return (
    <>
      <Head>
        <title>
          ISM E ALLAH ISM E MUHAMMAD صلى الله عليه وآله وسلم جل جلالہ{" "}
        </title>
        <meta name="ISM E ALLAH ZAAT" content="ISM E ALLAH ZAAT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container_gradient}></div>
        <div className={styles.border}>
          <div className={styles.inner_border}>
            <div className={styles.inner_border_gradient_box} style={{}}></div>
            <Image
              src="/ISM_E_ZAAT.png"
              fill
              style={{ objectFit: "contain" }}
              alt=""
              priority
              
            />
            <div className={styles.SUNEHRI_JALIAN_MUBARAK}>
              <Image
                src="/SUNEHRI_JALIAN_MUBARAK.jpg"
                fill
                alt=""
                sizes="(max-width: 768px) 50vw,
              (max-width: 1200px) 33vw,
              20vw"
              />
            </div>
            <div className={styles.moving11} />
            <div className={styles.moving12} />
            <div className={styles.moving13} />
            <div className={styles.moving14} />
            <animated.div
              style={{
                height: x.to({
                  range: [0, 0.11, 0.3, 1],
                  output: ["0%", "0%", "24%", "24%"],
                }),
              }}
              className={styles.moving2}
            />
            <animated.div
              style={{
                height: x.to({
                  range: [0, 0.3, 0.43, 1],
                  output: ["0%", "0%", "23%", "23%"],
                }),
                width: x.to({
                  range: [0, 0.43, 0.5, 1],
                  output: ["5%", "5%", "13%", "13%"],
                }),
              }}
              className={styles.moving3}
            />
            <animated.div
              style={{
                height: x.to({
                  range: [0, 0.5, 0.63, 1],
                  output: ["0%", "0%", "21%", "21%"],
                }),
                width: x.to({
                  range: [0, 0.63, 0.7, 1],
                  output: ["5%", "5%", "13%", "13%"],
                }),
              }}
              className={styles.moving4}
            />
            <animated.div
              style={{
                height: x.to({
                  range: [0, 0.7, 0.8, 1],
                  output: ["0%", "0%", "19%", "19%"],
                }),
              }}
              className={styles.moving5}
            />
            <animated.div
              style={{
                width: x.to({
                  range: [0, 0.8, 0.9, 1],
                  output: ["0%", "0%", "11%", "11%"],
                }),
              }}
              className={styles.moving6}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons_container} >
        <p onClick={()=>setIsDisplay(isDisplay==="block"? "none" : "block")}>{isDisplay === "block" ? "Close Options" : "Open Options"}</p>
        <button className={styles.button} style={{display:isDisplay}} onClick={() => setFast(fast - 400)}>faster</button>
        <button className={styles.button} style={{display:isDisplay}} onClick={() => setFast(fast + 400)}>slower</button>
        <button className={styles.button} style={{display:isDisplay}}
          onClick={() =>
            setIsConstant(isConstant === "false" ? "true" : "false")
          }
        >
          {isConstant === "false" ? "continue" : "constant"}
        </button>
      </div>
    </>
  );
};

export default ISM_E_ZAAT_MUBARAK;
