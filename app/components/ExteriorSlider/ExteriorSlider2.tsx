"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Styles from "./ExteriorSlider.module.css";

/*this is the component for the second slider(row 2) on exterior section*/


export default function ExteriorSlider() {

    return(
        <section className={Styles.container2}>
          
            <Swiper
            modules={[Pagination]}
            pagination={{
                clickable: true,
                renderBullet: (index, className) => {
                return `<span class="${className} custom-bullet"></span>`;
                }, }}>
                    
                <SwiperSlide>
                    <div className={Styles.slide}>
                         <img src="/images/slide2.png" alt="Exterior 1" />

                        <div className={Styles.text}>
                            <h3>Rugged rear design</h3>
                            <p>The rear stance is solid and stable, with 
                                the taillights and tailgate switch design
                                 reflecting personality.</p>
                        </div>
                       
                    </div>
                    </SwiperSlide> 
                
                <SwiperSlide>
                    <div className={Styles.slide}>
                         <img src="/images/secondSlide2.png" alt="Exterior 1" />
                        <div className={Styles.text}>
                            <h3>Striking Alloy Wheel Design</h3>
                            <p>The MG ZS features bold 17-inch dual-tone 
                                alloy wheels with a sleek multi-spoke pattern,
                                 combining aerodynamic efficiency with lasting durability for a
                                  confident, stylish drive.</p>
                        </div>         
                    </div>
                    </SwiperSlide> 
            </Swiper>
        </section>
    )

};