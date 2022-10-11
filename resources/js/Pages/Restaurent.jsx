import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Frontend from '@/Layouts/FrontendLayout';

export default function Restaurent(props) {
    return (
        <Frontend>
            <div class="inner-body-content">
                <div class="ellips-left"></div>
                {/* Search section start */}
                <section class="restaurant-hold-wrap padd-top-80 padd-bottom-80 overflow-hidden">
                    <div class="container">
                        <form action="{{ request()->fullUrl }}">
                            <div class="r-flex-top-sectopn">

                                <div class="home-search-box restaurant-search">
                                    {/* <input type="text" class="form-control" placeholder="Restaurant Name, cuisine or a dish..."
                                        name="search" value="{{ request()->search }}" /> */}
                                    <button class="btn" type="submit"><i class="bi bi-search"></i></button>
                                </div>
                                <ul class="restaurant-option-list">
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dish
                                        </a>
                                        <ul class="dropdown-menu">
                                            {/* @foreach ($foods as $food)
                                                <li><a class="dropdown-item"
                                                        href="{{ request()->fullUrlWithQuery(['dish' => $food->name]) }}">{{ $food->name }}</a>
                                                </li>
                                            @endforeach */}

                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link dropdown-toggle" href="javascript:void(0);" role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Rating
                                        </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item"
                                                    href="{{ request()->fullUrlWithQuery(['rating' => 3]) }}">3.0+</a></li>
                                            <li><a class="dropdown-item"
                                                    href="{{ request()->fullUrlWithQuery(['rating' => 2]) }}">2.0+</a></li>
                                            <li><a class="dropdown-item"
                                                    href="{{ request()->fullUrlWithQuery(['rating' => 1]) }}">1.0+</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                {/* <button class="btn r-sort-btn"><i class="bi bi-filter"></i></button> */}
                                <div class="restaurant-search-location">
                                    {/* <select class="form-select restaurant-miles-select" name="distance">
                                        <option value="">Distance</option>
                                        <option value="10" {{ request()->distance == 10? "selected":"" }}>10 mile</option>
                                        <option value="20" {{ request()->distance == 20? "selected":"" }}>20 mile</option>
                                        <option value="25" {{ request()->distance == 25? "selected":"" }}>25 mile</option>
                                    </select> */}
                                    <div class="home-search-box restaurant-location">
                                        {/* <input type="hidden" name="lat" id="lat" value="{{ request()->lat }}">
                                        <input type="hidden" name="long" id="long" value="{{ request()->long }}">
                                        <input type="text" class="form-control" placeholder="Location search..." name="location"
                                            id="address" value="{{ request()->location }}"> */}
                                        <button class="btn" type="submit"><i class="bi bi-search"></i></button>
                                    </div>
                                    <button class="btn r-sort-btn" type="button" onclick="getLocation()"><i
                                            class="bi bi-geo-alt"></i></button>
                                </div>
                            </div>
                        </form>

                        <div class="restaurant-cate-list">
                            {/* @foreach ($resturent_details as $resturent_detail)
                                @if (request()->rating)
                                    @if ($resturent_detail->rating > request()->rating)
                                        <div class="restaurant-cate-item">
                                            <div class="rpc-item-box">
                                                <div class="rpc-item-img" style="background-image:url('{{ asset('public/uploads/users/'.$resturent_detail->profile->profile_photo) }}')"></div>
                                                @if (url('public/common_img/defoult_profile_image.png') == $resturent_detail->profile->profile_photo)
                                                    <div class="rpc-item-img" style="background-image:url('')"></div>
                                                @else
                                                    <div class="rpc-item-img"
                                                        style="background-image:url('{{ $resturent_detail->profile->profile_photo }}')">
                                                    </div>
                                                @endif
                                                <div class="rpc-item-info">
                                                    <div class="rpc-item-info-header">
                                                        <h3><a
                                                                href="{{ route('resturent_details', $resturent_detail->id) }}">{{ $resturent_detail->business_name }}</a>
                                                        </h3>
                                                        <div class="favourite-rating">
                                                            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent_detail->id) }}."
                                                                title="Share by Email">
                                                                <i class="bi bi-share-fill rpc-favourite"></i>
                                                            </a>
                                                            @auth
                                                                <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                    class="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                                        class="bi bi-heart-fill"></i></a>

                                                                <span class="rpc-item-rating"
                                                                    onclick="pubRating('{{ $resturent_detail->id }}')"><i
                                                                        class="bi bi-star-fill"></i>{{ $resturent_detail->rating }}</span>

                                                            @endauth
                                                            @guest
                                                                <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                    class="rpc-favourite non-active"><i class="bi bi-heart"></i></a>
                                                                <a href="{{ route('login') }}"><span class="rpc-item-rating"><i
                                                                            class="bi bi-star-fill"></i>{{ $resturent_detail->rating }}</span></a>
                                                            @endguest
                                                        </div>
                                                    </div>
                                                    <p class="rpc-adress"><i class="bi bi-geo-alt"></i>
                                                        {{ $resturent_detail->profile->address }}</p>
                                                    <p>{{ substr($resturent_detail->profile->about, 0, 200) }}</p>

                                                </div>
                                            </div>
                                        </div>
                                    @else
                                    @endif
                                @else
                                    <div class="restaurant-cate-item">
                                        <div class="rpc-item-box">
                                            @if (url('public/common_img/defoult_profile_image.png') == $resturent_detail->profile->profile_photo)
                                                <div class="rpc-item-img" style="background-image:url('')"></div>
                                            @else
                                                <div class="rpc-item-img"
                                                    style="background-image:url('{{ $resturent_detail->profile->profile_photo }}')">
                                                </div>
                                            @endif
                                            <div class="rpc-item-info">
                                                <div class="rpc-item-info-header">
                                                    <h3><a
                                                            href="{{ route('resturent_details', $resturent_detail->id) }}">{{ $resturent_detail->business_name }}</a>
                                                    </h3>
                                                    <div class="favourite-rating">
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent_detail->id) }}."
                                                            title="Share by Email">
                                                            <i class="bi bi-share-fill rpc-favourite"></i>
                                                        </a>
                                                        @auth
                                                            <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                class="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                                    class="bi bi-heart-fill"></i></a>
                                                            <span class="rpc-item-rating"
                                                                onclick="pubRating('{{ $resturent_detail->id }}')"><i
                                                                    class="bi bi-star-fill"></i>
                                                                {{ (int) $resturent_detail->rating }}</span>

                                                        @endauth
                                                        @guest
                                                            <a href="{{ route('user.add-favourite', $resturent_detail->id) }}" class="rpc-favourite non-active">
                                                                <i class="bi bi-heart"></i>
                                                            </a>
                                                            <a href="{{ route('login') }}">
                                                                <span class="rpc-item-rating">
                                                                    <i class="bi bi-star-fill"></i>
                                                                    {{ (int) $resturent_detail->rating }}
                                                                </span>
                                                            </a>
                                                        @endguest
                                                    </div>
                                                </div>
                                                @auth
                                                    <a class="rpc-adress" href="{{ route('mapdirection', ['address' => $resturent_detail->profile->address]) }}">
                                                        <i class="bi bi-geo-alt"></i> {{ $resturent_detail->profile->address }}
                                                    </a>
                                                @endauth
                                                @guest
                                                    <a class="rpc-adress" href="{{ route('login') }}">
                                                        <i class="bi bi-geo-alt"></i> {{ $resturent_detail->profile->address }}
                                                    </a>
                                                @endguest
                                                    <p>{{ substr($resturent_detail->profile->about, 0, 200) }}</p>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            @endforeach */}

                        </div>
                        <nav class="pagination-nav">
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item active" aria-current="page">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item">
                                    <a class="page-link" href="#">Next</a>
                                </li>
                            </ul>
                            {/* {{ $resturent_details->links() }} */}
                        </nav>
                    </div>
                </section>
                {/* Search section end */}
                <div class="ellips-right"></div>
            </div>
        </Frontend>
    );
}
