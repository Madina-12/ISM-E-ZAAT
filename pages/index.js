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
  const [isDisplay, setIsDisplay] = useState("block");
  const [gradient, setGradient] = useState(0)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: fast },
    loop: true,
    immediate: isConstant === "false" ? true : false,
  });

  const gradientHandler = (number) => {
    if (gradient > -55 && gradient < 75) {
      return setGradient(gradient => gradient + number)
    }
    else if (gradient < -55 && gradient < 75) {
      return setGradient(-54)
    } 
    else if (gradient > -55 && gradient > 75){
      return setGradient(74)
    }
  }

  const showPageContent = () =>{
    document.getElementById("rest-of-page").style.display = "block"
  }

  return (
    <>
      <Head>
        <title>
          ISM E ALLAH ISM E MUHAMMAD صلى الله عليه وآله وسلم جل جلالہ{" "}
        </title>
        <meta name="ISM E ALLAH ZAAT" content="ISM E ALLAH ZAAT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sultan-bahoo-darbar.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.container_gradient} style={{backgroundImage: `linear-gradient(180deg, 	hsl(281, 76%, ${25+gradient}%) 25%, 	hsl(249, 78%, ${25+gradient}%) 63%)`}}></div>
        <div className={styles.border}>
          <div className={styles.inner_border}>
            <Image
              src="/ISM_E_ZAAT.png"
              fill
              style={{ objectFit: "contain" }}
              alt=""
              priority
              onLoad={showPageContent}
            />
            <div className={styles.inner_border_gradient_box} id="rest-of-page" style={{display:"none",backgroundImage: `linear-gradient(0deg, hsl(230, 60%, ${55+gradient}%) 0%, hsl(304, 52%, ${55+gradient}%) 46%, 	hsl(39, 100%, ${55+gradient}%) 100%)`}}></div>
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
        <button  className={styles.button} style={{display:isDisplay}} onClick={() => gradientHandler(+10)}>
          bright
        </button>
        <button  className={styles.button} style={{display:isDisplay}} onClick={() => gradientHandler(-10)}>
          dark
        </button>
      </div>
    </>
  );
};

export default ISM_E_ZAAT_MUBARAK;
