"use client";
import Styles from "./Hero.module.css";

export default function Hero() {
    return(
        <section className={Styles.hero} >
            <div className={Styles.grid}>
                
                {/* LEFT SIDE */}
                <div className={Styles.side}>
                <div className={Styles.lefttext}>
                    <h4>Exceptional Safety</h4>
                    <h3>Ultra-strength Chassis</h3>
                </div>
                 <div  className={Styles.lefttext}>
                    <h4>Cutting-Edge</h4>
                    <h3>8-inch Touch Screen</h3>
                     <span> CarPlay & Android Auto</span>
                </div>
                </div>

                {/* CENTER */}
            <div className={Styles.center}>
                    <h4> Introducing the</h4>
                    <h1> MG ZS</h1>
                    <img src="/images/hero.png" alt="MG ZS" className={Styles.car} />

                    <div className={Styles.buttons}>
                        <button 
                        className={Styles.primary}
                        onClick={() => alert("Thank you! AdMakers International") }
                        >Book a Test Drive</button>
                        <a href="/downloadTest.pdf" download className={Styles.secondary}>Download the brochure</a>
                    </div>
                    <div className={Styles.heroParagraph}>
                    <h4>With class-leading six airbags as standard, a British-tuned
                        chassis that expertly handles multiple road conditions.
                        Additionally, it comes with a 7-year 200,000km warranty
                        to give you the peace of mind you deserve.</h4>
                        </div>
            </div>

             {/* RIGHT SIDE */}
                <div className={Styles.rightSide}>
                <div className={Styles.rightText} >
                    <span>Reliable Performance</span>
                    <h2>NSE Major 1.5L</h2>
                </div>

                <div className={Styles.right}>
                     <img src="/images/right.png" alt="Right"  />
                     <div className={Styles.rightText2}>
                        <h4>maximum power</h4>
                        <h3>84 KW</h3>
                        <h4>peak torque</h4>
                        <h3>150 Nm</h3>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}