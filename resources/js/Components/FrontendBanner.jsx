import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function FrontendBanner() {
    return (
        <>
            <div className="home-banner-wrapper">
                <div className="owl-carousel owl-theme banner-owl-theme" id="main-banner-slider">
                    {/* @php
                        $i = 1;
                    @endphp
                    @foreach ($banners as $banner)
                        @php
                            $i = $i+$loop->index;
    @endphp*/}
                        <div className="item" style={{ backgroundImage:`url(asset('public/frontend/images/top-category-img-2.png'))` }}>
                            <div className="home-banner-info-wrap">
                                <div className="b-shape-left"></div>
                                <div className="container">

                                    <div className="banner-info-content">
                                        <h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                                            title</h5>
                                        <p>content</p>
                                        <div className="home-search-box" data-aos="fade-up" data-aos-easing="linear"
                                            data-aos-duration="1500" style={{ opacity:0 }}>
                                            <form action="">
                                                {/* <input type="text" className="form-control auto-search" name="search" id="search{{ $i }}"
                                                    placeholder="Restaurant Name, cuisine or a dish..." autocomplete="off"> */}
                                                <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                            </form>
                                        </div>
                                        <div className="mouse-icon" data-aos="fade-down" data-aos-easing="linear"
                                            data-aos-duration="1500">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/*@endforeach
                    @foreach ($f_banners as $item)
                    @php
                        $i = $i+$loop->index;
                    @endphp
                    <div className="item"
                        style="background-image:url('{{ asset('public/uploads/banner/' . $item->image) }}')">
                        <div className="home-banner-info-wrap">
                            <div className="b-shape-left"></div>
                            <div className="container">

                                <div className="banner-info-content">
                                    <h5 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500"> Welcome to the Pubfinder
                                    </h5>
                                <h2 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500" className="aos-init aos-animate">

                                        {{ substr($item->title, 0, 40) }}</h2>
                                        <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className="aos-init aos-animate">{{ substr($item->details, 0, 120) }}</p>
                                    <div className="home-search-box opacity-0" data-aos="fade-up" data-aos-easing="linear"
                                        data-aos-duration="1500">
                                        <form action="{{ route('resturents') }}">
                                            <input type="text" className="form-control auto-search" name="search" id="search{{ $i }}"
                                                placeholder="Restaurant Name, cuisine or a dish..." autocomplete="off">
                                            <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                        </form>
                                    </div>
                                    <div className="mouse-icon" data-aos="fade-down" data-aos-easing="linear"
                                        data-aos-duration="1500">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    @endforeach */}

                </div>

                <div className="home-banner-info-wrap">
                    <div className="container">
                        <div className="banner-info-content md-fix-div">

                            <div className="home-search-box mt-250" data-aos="fade-up" data-aos-easing="linear"
                                data-aos-duration="1500">
                                <form action="">
                                    {/* <input type="text" className="form-control auto-search" name="search" id="search0"
                                        placeholder="Restaurant Name, cuisine or a dish..." autocomplete="asd"> */}
                                    <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div id="carousel-custom-dots" className="custom-dots">
                            <li className="owl-dot"><span></span></li>
                            <li className="owl-dot"><span></span></li>
                        </div>

                    </div>
                    <div className="b-shape-right-top"></div>
                    <div className="b-shape-right"></div>
                </div>
            </div>
        </>
    );
}

