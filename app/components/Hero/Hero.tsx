import Styles from "./Hero.module.css";

export default function Hero() {
    return(
        <section className={Styles.hero} >
            <h4> Introducing the</h4>
            <h1> MG ZS</h1>
            <img src="/images/hero.png" alt="MG ZS" className={Styles.car} />

            <div className={Styles.buttons}>
                <button className={Styles.primary}>Book a Test Drive</button>
                <button className={Styles.secondary}>Download the brochure</button>
            </div>
            
        </section>
    )
}