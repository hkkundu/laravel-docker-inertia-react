import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Frontend from '@/Layouts/FrontendLayout';
import TextInput from '@/Components/TextInput';

export default function RestaurentDetails(props) {

    return (

        <Frontend>


        {/*<link rel="stylesheet" href="{{ asset('public/plugins/toastr/toastr.min.css') }}"> */}
        <div className="inner-body-content">
            <div className="ellips-left"></div>
            {/* Restaurant Details start */}
            <section className="details-hold-wrap padd-top-80 padd-bottom-80 overflow-hidden">
                <div className="container">
                    <div className="details-top-flex">
                        <div className="details-top-bx">
                            <div className="details-top-photo">
                                <img src={ props.resturent_detail.profile_photo } />
                                <div className="favourite-rating-details">
                                    {/* @auth

                                        <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                            className="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                className="bi bi-heart-fill"></i></a>
                                    @endauth
                                    @guest */}
                                        <a href="{{ route('login') }}" className="rpc-favourite non-active"><i
                                                className="bi bi-heart-fill"></i></a>

                                    {/* @endguest */}
                                </div>
                            </div>
                            <div className="details-top-info">
                                <h2>{ props.resturent_detail.business_name }</h2>
                                <div className="ratings">
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                    <i className="bi bi-star-fill"></i>
                                </div>
                            </div>
                        </div>
                        <div className="restaurent-menu-download nav" id="nav-tab" role="tablist">
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-pdf" role="tab"
                                aria-controls="nav-pdf" aria-selected="false">

                                <i className="bi bi-file-earmark-pdf"></i>
                                <span>Menu</span>
                            </a>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-doc" role="tab"
                                aria-controls="nav-doc" aria-selected="false">

                                <i className="bi bi-file-earmark-word"></i>
                                <span>Menu</span>
                            </a>
                            <a className="nav-link" data-bs-toggle="tab" data-bs-target="#nav-image" role="tab"
                                aria-controls="nav-image" aria-selected="false">
                                <i className="bi bi-file-earmark-image"></i>
                                <span>Menu</span>
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade" id="nav-pdf" role="tabpanel" aria-labelledby="nav-image-tab">
                                    <div className="list-of-pdf-doc">
                                        {/* @php
                                            $count_m_pdf = 0;
                                        @endphp

                                        @forelse ($food_docs as $food_image)
                                            @if (explode('/', $food_image->media_type)[1] == 'pdf')
                                                @php
                                                    $count_m_pdf++;
                                                @endphp
                                                <a href="{{ asset('public/uploads/food-media/' . $food_image->image) }}"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-file-earmark-pdf"></i>
                                                    <span>namepdf.pdf</span>
                                                </a>
                                            @endif
                                        @empty
                                            @php
                                                $count_m_pdf++;
                                            @endphp
                                            No menu found.
                                        @endforelse
                                        @if ($count_m_pdf == 0)
                                            No menu found.
                                        @endif */}

                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-doc" role="tabpanel" aria-labelledby="nav-pdf-tab">
                                    <div className="list-of-pdf-doc">
                                        {/* @php
                                            $count_m_doc = 0;
                                        @endphp

                                        @forelse ($food_docs as $food_image)
                                            @if (explode('/', $food_image->media_type)[1] == 'vnd.open')
                                                @php
                                                    $count_m_doc++;
                                                @endphp
                                                <a href="{{ asset('public/uploads/food-media/' . $food_image->image) }}"
                                                    target="_blank" rel="noopener noreferrer">
                                                    <i className="bi bi-file-earmark-word"></i>
                                                    <span>worddoc.doc</span>
                                                </a>
                                            @endif
                                        @empty
                                            @php
                                                $count_m_doc++;
                                            @endphp
                                            No menu found.
                                        @endforelse
                                        @if ($count_m_doc == 0)
                                            No menu found.
                                        @endif */}
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="nav-image" role="tabpanel" aria-labelledby="nav-doc-tab">
                                    <div className="details-gallery">
                                        {/* @php
                                            $count_image = 0;
                                        @endphp

                                        @forelse ($food_docs as $food_image)
                                            @if (explode('/', $food_image->media_type)[0] == 'image')
                                                @php
                                                    $count_image++;
                                                @endphp */}

                                                <li>
                                                    <a href="{{ asset('public/uploads/food-media/' . $food_image->image) }}"><img
                                                            src="{{ asset('public/uploads/food-media/' . $food_image->image) }}"
                                                            alt="" title="" />
                                                        {/* @if ($count_image == 8)
                                                            <div className="view-more-g">
                                                                View Menu
                                                            </div>
                                                        @endif */}
                                                    </a>
                                                </li>
                                            {/* @endif

                                        @empty
                                            @php
                                                $count_image++;
                                            @endphp
                                            No menu found.
                                        @endforelse
                                        @if ($count_image == 0)
                                            No menu found.
                                        @endif */}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-7">
                            <div className="details-item-block">
                                <h4>About</h4>
                                <div className="details-about">
                                    <p className="more">
                                        { props.resturent_detail.about }
                                    </p>

                                </div>
                            </div>
                            <div className="details-item-block">
                                <h4>Gallery</h4>
                                <div className="details-gallery">
                                    {/* @forelse ($galleries as $gallery)
                                        <li>
                                            <a href="{{ asset('public/uploads/gallery/' . $gallery->image) }}"><img
                                                    src="{{ asset('public/uploads/gallery/' . $gallery->image) }}" alt=""
                                                    title="" />
                                                @if ($loop->iteration == 8)
                                                    <div className="view-more-g">
                                                        View Gallery
                                                    </div>
                                                @endif
                                            </a>
                                        </li>
                                    @empty
                                        No Image found.
                                    @endforelse */}
                                </div>
                            </div>

                            <div className="details-item-block">
                                <h4>Video Gallery</h4>
                                <div className="details-gallery">

                                    {/* @if (empty($gallery_video))
                                        No video found.

                                    @else
                                        <li>
                                            <video width="320" height="240" controls>
                                                <source
                                                    src="{{ asset('public/uploads/gallery/video/' . $gallery_video->image) }}"
                                                    type="{{ $gallery_video->media_type }}">
                                                Your browser does not support the video tag.
                                            </video>
                                        </li>
                                    @endif */}
                                </div>
                            </div>
                            <div className="details-item-block">
                                <p><i className="bi bi-person-fill"></i> {props.resturent_detail.contact }</p>
                            </div>
                            <div className="details-item-block">
                                <p><i className="bi bi-telephone-fill"></i> {props.resturent_detail.mobile }</p>
                            </div>
                            <div className="details-item-block">
                                <p><i className="bi bi-envelope-open-fill"></i> {props.resturent_detail.email }</p>
                            </div>
                            <div className="details-item-block">
                                <p><i className="bi bi-pin-map-fill"></i> <a href="https://www.google.com/maps/place/${props.resturent_detail.address}"
                                    target="_blank">{ props.resturent_detail.address }</a></p>
                            </div>
                            <div className="details-item-block details-map-block">
                                <div id="map"></div>
                            </div>
                            <div className="details-item-block">
                                <h4>Reviews</h4>

                                <div className="details-reviews">
                                    {/* @foreach ($reviews as $review)
                                        <div className="user-reviews-results">
                                            <div className="user-reviews-photo">
                                                <img src="{{ $review->user->profile->profile_photo }}" />
                                            </div>
                                            <div className="user-reviews-info">
                                                <a className="result-title" href="#">{{ $review->user->name }}</a>
                                                <div className="ratings">
                                                    @for ($i = 0; $i < 5; $i++)
                                                        @if ($i <= $review->rating)
                                                            <i className="bi bi-star-fill"></i>
                                                        @else
                                                            <i className="bi bi-star"></i>
                                                        @endif
                                                    @endfor

                                                    <span className="ratings-date">
                                                        //Oct 8, 2021
                                                        {{ date_format(date_create($review->created_at), 'M j, Y') }}
                                                    </span>
                                                </div>
                                                <p>{{ $review->review }}</p>
                                            </div>
                                        </div>
                                    @endforeach */}
                                    <div id="more_reviews">

                                    </div>

                                    <div className="user-reviews-all-links">
                                        {/* @if (is_null($reviews->nextPageUrl()))
                                        @else
                                            <button className="btn btn-info btn-sm" id="more_reviews_btn"
                                                data-url="{{ route('review', [$resturent_detail->id, 'page' => $reviews->currentPage() + 1]) }}">More
                                                Reviews</button>
                                        @endif
                                        @guest
                                            <a className="btn btn-success btn-sm" href="{{ route('login') }}" style="color: white">Add Reviews</a>
                                        @endguest
                                        @auth

                                            <button className="btn btn-success btn-sm"
                                                onclick="pubRating('{{ $resturent_detail->id }}')">Add Reviews</button>
                                        @endauth */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">

                            <div className="restaurent-menu-content">
                                {/* @foreach ($foods as $food)
                                    <div className="restaurent-menu-list">
                                        <h3>{{ $food->name }}</h3>
                                        @foreach ($food->foods as $item)
                                            <div className="restaurent-menu-item">
                                                <p>{{ $item->name }}</p>
                                                <em>${{ $item->price }}</em>
                                            </div>
                                        @endforeach
                                    </div>
                                @endforeach */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*Restaurant Details end */}
            <div className="ellips-right"></div>
        </div>

            {/*@push('scripts')

                {{-- <script src="js/simple-lightbox.min.js"></script> --}}
            {{-- AIzaSyDeHLUf6UsWolTfiPucUEgcwCOB0wf5aZQ --}}
                <script
                    src="https://maps.googleapis.com/maps/api/js?key={{ config('map.map_api_key') }}&libraries=places,geometry&callback=initialize"
                    async defer></script>
                <script>
                    $(document).ready(function() {
                        var showChar = 400; // How many characters are shown by default
                        var ellipsestext = "...";
                        var moretext = "Read more";
                        var lesstext = "Show less";


                        $('.more').each(function() {
                            var content = $(this).html();
                            if (content.length > showChar) {
                                var c = content.substr(0, showChar);
                                var h = content.substr(showChar, content.length - showChar);
                                var html = c + '<span className="moreellipses">' + ellipsestext +
                                    '&nbsp;</span><span className="morecontent"><span>' + h +
                                    '</span>&nbsp;&nbsp;<a href="" className="morelink">' + moretext + '</a></span>';
                                $(this).html(html);
                            }
                        });

                        $(".morelink").click(function() {
                            if ($(this).hasclassName("less")) {
                                $(this).removeclassName("less");
                                $(this).html(moretext);
                            } else {
                                $(this).addclassName("less");
                                $(this).html(lesstext);
                            }
                            $(this).parent().prev().toggle();
                            $(this).prev().toggle();
                            return false;
                        });

                        $("#more_reviews_btn").click(function() {
                            var url = $('#more_reviews_btn').attr("data-url");
                            // alert(url);
                            $.ajax({
                                url: url,
                                method: "GET",
                                success: function(data) {
                                    if (data.next_page_url) {
                                        $('#more_reviews_btn').attr("data-url", data.next_page_url);
                                    } else {
                                        $('#more_reviews_btn').hide();
                                    }
                                    var str = '';
                                    $.each(data.data, function(index, value) {
                                        console.log(value, value.review);
                                        // Will stop running after "three"
                                        // return (value !== 'three');
                                        str += '<div className="user-reviews-results">';
                                        str += '<div className="user-reviews-photo">';
                                        str += '<img src="' + value.user.profile.profile_photo +
                                            '" /> </div>';
                                        str += '<div className="user-reviews-info">';
                                        str += '<a className="result-title" href="#">' + value.user
                                            .name + '</a>';
                                        str += '<div className="ratings">';
                                        for (let i = 0; i < 5; i++) {
                                            if (i <= value.rating) {
                                                str += '<i className="bi bi-star-fill"></i>';
                                            } else {
                                                str += '<i className="bi bi-star"></i>';
                                            }
                                        }
                                        str += '<span className="ratings-date">';
                                        var mydate = new Date(value.created_at);
                                        var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                                        ][mydate.getMonth()];
                                        var dttime = month + ' ' + mydate.getDate() + ', ' + mydate
                                            .getFullYear();
                                        str += dttime;
                                        str += '</span></div><p>' + value.review + '</p></div>';


                                        str += '</div>';
                                    });
                                    console.log(data);
                                    console.log(data.data);
                                    console.log(data.next_page_url);
                                    $('#more_reviews').append(str);
                                }
                            });
                        });
                    });

                    function fetch_data(page, url) {
                        // var _token = $("input[name=_token]").val();

                    }

                    function initialize() {

                        var myLatLng = new google.maps.LatLng({{ $resturent_detail->add_lat }}, {{ $resturent_detail->add_lng }}),
                            myOptions = {
                                zoom: 7,
                                center: myLatLng,
                                mapTypeId: google.maps.MapTypeId.ROADMAP,
                                zoomControl:true
                            },
                            map = new google.maps.Map(document.getElementById('map'), myOptions),
                            marker = new google.maps.Marker({
                                position: myLatLng,
                                map: map
                            });

                        marker.setMap(map);
                        moveMarker(map, marker);
                    }
                </script>

                <script src="{{ asset('public/plugins/toastr/toastr.min.js') }}"></script>
                @include('common.toastr')
                @include('common.rating_review')


            @endpush */}

        </Frontend>
    );
}
