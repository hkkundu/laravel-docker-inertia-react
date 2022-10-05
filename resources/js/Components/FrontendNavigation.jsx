import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';

export default function FrontendNavigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark custom-nav" aria-label="navbar">
                <div className="container">
                    <Link className="logo" href={ route('home') }>
                        <img src="http://localhost:5000/images/logo/logo.png" alt="Logo" title="Logo" className="img-responsive" />
                    </Link>
                    <div className="navbar-right-box">
                        <div className="navbar-collapse collapse" id="navbarsHeader">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item active">
                                    <Link className="nav-link notranslate" href={ route('home') }>home</Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link notranslate">about</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link notranslate">restaurent</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link notranslate">subscription</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link notranslate">contact_us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="navbar-right-links-box">
                            <div className="login-links">
                                {/* @guest
                                <a href="{{ route('login') }}" data-bs-toggle="tooltip" title="Login') }}">
                                    <!-- <span>Login</span> --><i className="bi bi-box-arrow-in-left"></i></a>
                                <span className="divided-line">|</span>
                                <a href="{{ route('registration') }}" data-bs-toggle="tooltip" title="Registration') }}">
                                    <!-- <span>Register</span>  -->
                                    <i className="bi bi-person"></i></a>
                                @endguest */}
                                {/* @auth
                                {{-- @dump(auth()->user()->role) --}}
                                @if (auth()->user()->role == 2)

                                <a href="{{ route('pub.dashboard') }}"><span className="notranslate username">{{ substr(auth()->user()->name,0,2) }}</span>
                                <!-- <i className="bi bi-person"></i> -->
                            </a>
                                @elseif (auth()->user()->role == 1)

                                <a href="{{ route('user.dashboard') }}"><span className="notranslate">{{ substr(auth()->user()->name,0,2) }}</span>
                                <!-- <i className="bi bi-person"></i> -->
                            </a>
                                @else

                                <a href="{{ route('admin.dashboard') }}"><span>{{ substr(auth()->user()->name,0,2) }}</span>
                                <!-- <i className="bi bi-person"></i> -->
                            </a>
                                @endif
                                <span className="divided-line">|</span>
                                <a href="{{ route('logout') }}" data-bs-toggle="tooltip" title="Logout') }}">
                                    <!-- <span>Logout</span> -->
                                    <i className="bi bi-box-arrow-right"></i></a>

                                @endauth */}

                            </div>
                            {/* @php
                                $lang = Session::get('locale');
                            @endphp */}
                            <div id="myLang"></div>
                            {/* <select className="form-select navbar-select-lang" id="myLang" onchange="changeLanguage()">
                                <option value="EN" >English') }}</option>
                                <option value="IT" >Italian') }}</option>
                                <option value="de" >German') }}</option>
                                <option value="FR" >French') }}</option>
                                <option value="ES" >Spanish') }}</option>
                            </select> */}
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarsHeader" aria-controls="navbarsHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
