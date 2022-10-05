import React, { useState } from 'react';
import FrontendNavigation from '@/Components/FrontendNavigation';
import FrontendBanner from '@/Components/FrontendBanner';
import FrontendFooter from '@/Components/FrontendFooter';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Frontend({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <>
        {/* <div className="loading">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
        </div> */}


        {/* Header Start */}
        <header className="header-wrapper">
            <div className="container">
                <FrontendNavigation></FrontendNavigation>
            </div>

            {/* Banner Start */}
            <FrontendBanner></FrontendBanner>
            {/* Banner End */}
        </header>
        {/* // Header end */}
        {/* // Content start */}

        {children}
        {/* @yield('content') */}
        {/* Content end */}

        {/* Footer start */}
        <FrontendFooter></FrontendFooter>
         {/* Footer end */}
        {/* <a href="javascript:void(0);" id="back-to-top" title="Back to top"><i className="bi bi-chevron-up"></i></a> */}
    </>
    );
}
