import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Frontend from '@/Layouts/FrontendLayout';

export default function Welcome(props) {
    return (
        <Frontend>
            {/* <section className="tci-hold-wrap padd-top-60 overflow-hidden">
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
                    </div>
                </div>
                <div className="ellips-right"></div>
            </section> */}
            <div className="ellips-left"></div>
            {/* Top category item start */}
            <section className="tci-hold-wrap padd-top-60 overflow-hidden">
                <div className="container">
                    <div className="owl-carousel owl-theme custom-owl-theme" id="tci-item-slider" data-aos="fade-down"
                        data-aos-easing="linear" data-aos-duration="1500">
                        {/* @foreach ($categories as $category)
                            <div className="item">
                                <div className="tci-item-box">
                                    <div className="tci-item-img"
                                        style="background-image:url('{{ asset('public/uploads/category/' . $category->image) }}')">
                                    </div>
                                    <div className="tci-item-info">
                                        <h4>{{ $category->name }}</h4>
                                    </div>
                                </div>
                            </div>
                        @endforeach */}
                        <div className="item">
                            <div className="tci-item-box">
                                <div className="tci-item-img" style={{ backgroundImage:`url(asset('public/frontend/images/top-category-img-2.png'))` }}></div>
                                <div className="tci-item-info">
                                    <h4>Continental Food</h4>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="tci-item-box">
                                <div className="tci-item-img" style={{ backgroundImage:`url(asset('public/frontend/images/top-category-img-3.png'))` }}></div>
                                <div className="tci-item-info">
                                    <h4>Thai Dishes</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ellips-right"></div>
            </section>
            {/* Top category item end */}

            {/* About us start */}
            <section className="hmas-hold-wrap padd-top-80 overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="hmas-left-info col-lg-6" data-aos="fade-right" data-aos-offset="300" data-aos-duration="2000">
                            <h5>et_about_us-title </h5>
                            get_about_us-content
                            <a href="{{ route('aboutUs') }}" className="read-more-btn">Read more</a>
                        </div>
                        <div className="hmas-right-img padding-left-38 col-lg-6" data-aos="fade-left" data-aos-offset="300"
                            data-aos-duration="2000">
                            <div className="hmas-right-img-box margin-left-38">
                                <div className="about-img"
                                    // style="background-image:url('{{ asset('public/uploads/cms/' . $get_about_us->featured_image) }}')">
                                    style={{ backgroundImage:`url(asset('public/frontend/images/top-category-img-3.png'))` }}>
                                </div>
                                <div className="hmas-line-wrap" data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">
                                    <span className="hmas-verticle hmas-color-green"></span>
                                    <span className="hmas-verticle"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* About us end */}

            {/* Restaurants Pubs Clubs start */}
            <section className="rpc-hold-wrap padd-top-80 overflow-hidden">
                <div className="container">
                    <div className="head-title-box max-w-680" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
                        <h2 className="notranslate">Restaurants Pubs Clubs</h2>
                    </div>
                    <div className="owl-carousel owl-theme custom-owl-theme" id="rpc-item-slider" data-aos="fade-up"
                        data-aos-easing="linear" data-aos-duration="1500">
                        {/* @foreach ($resturent_details as $resturent)
                            <div className="item">
                                <div className="rpc-item-box">
                                    @if(url('public/common_img/defoult_profile_image.png') == $resturent->profile->profile_photo)
                                    <div className="rpc-item-img"
                                        style="background-image:url('')">
                                    @else
                                    <div className="rpc-item-img"
                                        style="background-image:url('{{ $resturent->profile->profile_photo }}')">
                                    @endif
                                    </div>
                                    <div className="rpc-item-info">
                                        <div className="rpc-item-info-header">
                                            <h3><a
                                                    href="{{ route('resturent_details', $resturent->id) }}">{{ $resturent->business_name }}</a>
                                            </h3>
                                            <div className="favourite-rating">
                                                <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent->id) }}."
                                                    title="Share by Email">

                                                    <i className="bi bi-share-fill rpc-favourite"></i>
                                                </a>
                                                {{-- <a href="#" className="rpc-favourite"><i className="bi bi-heart-fill"></i></a>
                                            <span className="rpc-item-rating"><i className="bi bi-star-fill"></i> 5</span> --}}
                                                @auth
                                                    <a href="{{ route('user.add-favourite', $resturent->id) }}"
                                                        className="rpc-favourite {{ getFavDoc($resturent->id) ? 'active' : 'non-active' }}"><i
                                                            className="bi bi-heart-fill"></i></a>

                                                    <span className="rpc-item-rating" onclick="pubRating('{{ $resturent->id }}')"><i
                                                            className="bi bi-star-fill"></i> {{ (int)$resturent->rating }}</span>

                                                @endauth
                                                @guest
                                                    <a href="{{ route('user.add-favourite', $resturent->id) }}"
                                                        className="rpc-favourite non-active"><i className="bi bi-heart"></i></a>
                                                    <a href="{{ route('login') }}"><span className="rpc-item-rating"><i
                                                                className="bi bi-star-fill"></i> {{ (int)$resturent->rating }}</span></a>
                                                @endguest

                                            </div>

                                        </div>
                                        @auth
                                            <a className="rpc-adress" href="{{ route('mapdirection',['address' => $resturent->profile->address]) }}"><i className="bi bi-geo-alt"></i> {{ $resturent->profile->address }}</a>
                                        @endauth
                                        @guest
                                            <a className="rpc-adress" href="{{ route('login') }}"><i className="bi bi-geo-alt"></i> {{ $resturent->profile->address }}</a>
                                        @endguest
                                        {{-- <p className="rpc-adress"><i className="bi bi-geo-alt"></i> {{ $resturent->profile->address }}</p> --}}
                                        <p>{{ substr($resturent->profile->about, 0, 200) }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach */}

                        <div className="item">
                            <div className="rpc-item-box">
                                <div className="rpc-item-img"
                                    style={{ backgroundImage:`url('{{ asset('public/frontend/images/rpc-img-2.png')` }}></div>
                                <div className="rpc-item-info">
                                    <div className="rpc-item-info-header">
                                        <h3>The Crown</h3>
                                        <span className="rpc-item-rating"><i className="bi bi-star-fill"></i> 5</span>
                                    </div>
                                    <p className="rpc-adress"><i className="bi bi-geo-alt"></i> Kolkata, West Bengal 700012</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable...</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="rpc-item-box">
                                <div className="rpc-item-img" style={{ backgroundImage:`url('{{ asset('public/frontend/images/rpc-img-3.png')` }}></div>
                                <div className="rpc-item-info">
                                    <div className="rpc-item-info-header">
                                        <h3>White Hart</h3>
                                        <span className="rpc-item-rating"><i className="bi bi-star-fill"></i> 5</span>
                                    </div>
                                    <p className="rpc-adress"><i className="bi bi-geo-alt"></i> Kolkata, West Bengal 700012</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable...</p>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="rpc-item-box">
                                <div className="rpc-item-img" style={{ backgroundImage:`url('{{ asset('public/frontend/images/rpc-img-2.png')` }}></div>
                                <div className="rpc-item-info">
                                    <div className="rpc-item-info-header">
                                        <h3>The Crown</h3>
                                        <span className="rpc-item-rating"><i className="bi bi-star-fill"></i> 5</span>
                                    </div>
                                    <p className="rpc-adress"><i className="bi bi-geo-alt"></i> Kolkata, West Bengal 700012</p>
                                    <p>It is a long established fact that a reader will be distracted by the readable...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Restaurants Pubs Clubs end  */}

            {/* Simple Pricing start  */}
            <section className="sp-hold-wrap padd-bottom-80 overflow-hidden">
                <div className="container">
                    <div className="sp-line-wrap" data-aos="fade-down" data-aos-offset="300" data-aos-duration="2000">
                        <span className="line-verticle"></span>
                        <span className="line-verticle line-color-green"></span>
                    </div>
                    <div className="sp-hold-flexbox row">
                        <div className="sp-left-info col-md-8" data-aos="fade-right" data-aos-offset="300" data-aos-duration="2000">
                            <h2>Simple Pricing</h2>
                            <p>Start with <span>30 days free trial.</span> Upgrade anytime.</p>
                        </div>
                        <div className="sp-right-info col-md-4" data-aos="fade-left" data-aos-offset="300" data-aos-duration="2000">
                            <a href="#" className="know-more-btn">Know more</a>
                        </div>
                    </div>
                </div>
            </section>
        </Frontend>
    );
}
