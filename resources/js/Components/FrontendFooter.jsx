import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function FrontendFooter() {
    return (
        <>
            <footer className="ft-hold-wrapper">
                <div className="container">
                    <div className="ft-top flex-subscribe">
                        <div className="subscribe-info">
                            <h3 className="notranslate">Subscribe Your Newslatter</h3>
                        </div>
                        <div className="has-float-label subscribe-box">
                            <form action="{{ route('newsLetter') }}" method="post">
                                @csrf
                                {/* <input type="email" name="email" className="form-control" placeholder="name@example.com" id="subscribeEmail" required> */}
                                <label for="subscribeEmail">your email id</label>
                                <button className="btn" type="submit"><i className="bi bi-cursor-fill"></i></button>
                            </form>
                        </div>
                    </div>
                    {/* @php
                        $about_us_footer = getAboutUsdata();
                    @endphp */}
                    <div className="ft-middle">
                        <div className="row">
                            <div className="col-md-12 col-lg-5 ft-logo-info">
                                <h4 className="ft-title notranslate">about</h4>
                                <p>about_us_footer .. <a href="{{ route('aboutUs')}}">Read More</a></p>
                                <a className="ft-logo" href="{{ route('home') }}"><img
                                        src='' alt="Logo" title="Logo"
                                        className="img-responsive" /></a>
                            </div>
                            <div className="col-md-12 col-lg-3 mrt-m-30">
                                <h4 className="ft-title ft-mobile-title-drop">Quick Links <i className="bi bi-chevron-down"></i></h4>
                                <div className="ft-mobile-menu">
                                    <ul className="ft-links">
                                        <li><a href="{{ route('home') }}" className="notranslate">home</a></li>
                                        <li><a href="{{ route('aboutUs') }}" className="notranslate">about</a></li>
                                        <li><a href="{{ route('userFaq') }}" className="notranslate">faq</a></li>
                                        <li><a href="{{ route('privacyPolicy') }}" className="notranslate">privacy_policy</a></li>
                                        <li><a href="{{ route('termsCondition') }}" className="notranslate">Terms_Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                            {/* @php
                                $contact_us = getContactUsdata();
                            @endphp */}
                            <div className="col-md-12 col-lg-4 mrt-m-30">
                                <h4 className="ft-title notranslate">contact_us</h4>
                                <ul className="ft-contact">
                                    <li><span className="notranslate">phone :</span> contact_us-phone </li>
                                    <li><span className="notranslate">email :</span> contact_us-email </li>
                                    <li><span className="notranslate">address :</span> contact_us-address </li>
                                </ul>
                                <div className="ft-social-icons">
                                    <a href="#" className="facebook-icon"></a>
                                    <a href="#" className="pp-icon"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="copyright-txt notranslate">copyright_pre ©2022 copyright_after</p>
                </div>
            </footer>
        </>
    );
}

