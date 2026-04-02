"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./ExteriorSlider.module.css";


/*this is the component for the second slider(row 2) on exterior section*/

export default function ExteriorSlider() {

    return(
        <section className={Styles.container}>
            <h1>Exterior</h1>
            <Swiper
            modules={[Pagination]}
            autoHeight={true}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
                }, }}>

                <SwiperSlide>
                    <div className={Styles.slide}>
                        <div className={Styles.text}>
                            <h3>London Eye Headlights</h3>
                            <p>The London Eye Headlamp reflected 
                                in the Thames River, interplay with 
                                the radiant grille, shimmering and 
                                extraordinary. Classic British design 
                                elements create the understated, dynamic
                                 and highly recognizable ZS.</p>
                        </div>
                        <img src="/images/slide1.png" alt="Exterior 1" />
                    </div>
                    </SwiperSlide> 
                
                <SwiperSlide>
                    <div className={Styles.slide}>
                        <div className={Styles.text}>
                            <h3>Design</h3>
                            <p>Inspired by British design, classic and timeless, the 
                                cabin offers a comfortable and practical experience
                                 that feels more like home.</p>
                        </div>
                        <img src="/images/secondSlide1.png" alt="Exterior 1" />
                    </div>
                    </SwiperSlide> 
            </Swiper>
        </section>
    )

};