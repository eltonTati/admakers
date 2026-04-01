import {Swiper, SwiperSlide} from "swiper/react";


export default function ExteriorSlider() {

    return(
        <section>
            <h1>Exterior</h1>
            <Swiper spaceBetween={50} slidesPerView={1}>
                <SwiperSlide>
                    <div>
                        <div>
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
                    <div>
                        <div>
                            <h3>Design</h3>
                            <p>Inspired by British design, classic and timeless, the 
                                cabin offers a comfortable and practical experience
                                 that feels more like home.</p>
                        </div>
                        <img src="/images/slide1.png" alt="Exterior 1" />
                    </div>
                    </SwiperSlide> 
                
            </Swiper>
        </section>
    )

}