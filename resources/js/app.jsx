import './bootstrap';
// import '../css/app.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../frontend/css/bootstrap.min.css';
import '../frontend/css/global-style.css';
// import '../frontend/css/media-queries.css';
// import '../frontend/css/owl.carousel.min.css';
// import '../frontend/css/aos.css';
// import '../frontend/css/simple-lightbox.min.css';
// import '../plugins/toastr/toastr.min.css';

// import '../frontend/js/jquery-1.11.0.js';
import '../frontend/js/popper.min.js';
import '../frontend/js/bootstrap.min.js';
// import '../frontend/js/owl.carousel.min.js';
// // import '../frontend/js/aos.js';
// import '../frontend/js/simple-lightbox.min.js';
// import '../plugins/toastr/toastr.min.js';
// import '../frontend/js/custom-script.js';
{/* <link href="{{ asset('public/frontend/css/media-queries.css') }}" rel="stylesheet" type="text/css">
<!-- Slider CSS -->
<link href="{{ asset('public/frontend/css/owl.carousel.min.css') }}" rel="stylesheet" type="text/css">
<!-- Animate CSS -->
<link rel="stylesheet" href="{{ asset('public/frontend/css/aos.css') }}" type="text/css">
<link rel="stylesheet" href="{{ asset('public/frontend/css/simple-lightbox.min.css') }}" type="text/css">
<link rel="stylesheet" href="{{ asset('public/plugins/toastr/toastr.min.css')}}"></link> */}

{/* <script src="{{ asset('public/frontend/js/jquery-1.11.0.js') }}"></script>
    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="{{ asset('public/frontend/js/popper.min.js') }}"></script>
    <script src="{{ asset('public/frontend/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('public/frontend/js/owl.carousel.min.js') }}"></script>
    <script src="{{ asset('public/frontend/js/aos.js') }}"></script>
    <!-- Script for custom script-->
    <script src="{{ asset('public/frontend/js/simple-lightbox.min.js') }}"></script>
    <script src="{{ asset('public/plugins/toastr/toastr.min.js') }}"></script>
    <script src="{{ asset('public/frontend/js/custom-script.js') }}"></script> */}

import React from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/inertia-react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
});

InertiaProgress.init({ color: '#4B5563' });
