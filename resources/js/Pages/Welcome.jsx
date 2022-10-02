import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function Welcome(props) {
    return (
        <>
            <section className="tci-hold-wrap padd-top-60 overflow-hidden">
                <div className="container">
                    <div className="owl-carousel owl-theme custom-owl-theme" id="tci-item-slider" data-aos="fade-down"
                        data-aos-easing="linear" data-aos-duration="1500">

                        <div className="item">
                            <div className="tci-item-box">
                                <div className="tci-item-img" style={{ backgroundImage:`url(asset('public/frontend/images/top-category-img-2.png'))` }}></div>
                                <div className="tci-item-info">
                                    <h4>Continental Food</h4>
                                </div>
                            </div>
                        </div>
                        {/* <div className="item">
                            <div className="tci-item-box">
                                <div className="tci-item-img" style="background-image:url('{{ asset('public/frontend/images/top-category-img-3.png') }}')"></div>
                                <div className="tci-item-info">
                                    <h4>Thai Dishes</h4>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className="ellips-right"></div>
            </section>
        </>
    );
}
