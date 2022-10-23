import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Frontend from '@/Layouts/FrontendLayout';
import TextInput from '@/Components/TextInput';

export default function RestaurantDetails(props) {
    const searchChange = () => {

    }
    console.log('====================================');
    console.log(props);
    console.log('====================================');
    return (
        <Frontend>
            <div className="inner-body-content">
                <div className="ellips-left"></div>
                {/* Search section start */}
                <section className="restaurant-hold-wrap padd-top-80 padd-bottom-80 overflow-hidden">
                    <div className="container">
                        <form action="{{ request()->fullUrl }}">
                            <div className="r-flex-top-sectopn">

                                <div className="home-search-box restaurant-search">
                                    <TextInput
                                        type="text"
                                        name="search"
                                        // value="{{ request()->search }}"
                                        // className="mt-1 block w-full"
                                        placeholder="Restaurant Name, cuisine or a dish..."
                                        autoComplete="username"
                                        isFocused={false}
                                        handleChange={searchChange}
                                    />
                                    <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                </div>
                                <ul className="restaurant-option-list">
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle"
                                            // href="javascript:void(0);"
                                            role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Dish
                                        </Link>
                                        <ul className="dropdown-menu">
                                        {props.foods.total>0 &&
                                        props.foods.data.map((food, key) => (
                                            // href="{{ request()->fullUrlWithQuery(['dish' => $food->name]) }}"
                                            <li key={key}><Link className="dropdown-item"
                                                    >{food.name}</Link>
                                            </li>

                                        ))}
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle"
                                            href
                                            onClick={(e) => e.preventDefault()}
                                            role="button"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Rating
                                        </Link>
                                        <ul className="dropdown-menu">
                                        {/* {{ request()->fullUrlWithQuery(['rating' => 3]) }} */}
                                            <li>
                                                <Link className="dropdown-item"
                                                    href="#">3.0+</Link>
                                            </li>
                                            <li>
                                                <Link className="dropdown-item"
                                                    href="#">2.0+</Link>
                                            </li>
                                            {/* {{ request()->fullUrlWithQuery(['rating' => 2]) }} */}
                                            <li>
                                                <Link className="dropdown-item"
                                                    href="#">1.0+</Link>
                                            </li>
                                            {/* {{ request()->fullUrlWithQuery(['rating' => 1]) }} */}
                                        </ul>
                                    </li>
                                </ul>
                                {/* <button className="btn r-sort-btn"><i className="bi bi-filter"></i></button> */}
                                <div className="restaurant-search-location">
                                    <select className="form-select restaurant-miles-select" name="distance">
                                        <option value="">Distance</option>
                                        {/* {{ request()->distance == 10? "selected":"" }} */}
                                        <option value="10">10 mile</option>
                                        <option value="20">20 mile</option>
                                        <option value="25">25 mile</option>
                                    </select>
                                    <div className="home-search-box restaurant-location">
                                        {/* <input type="hidden" name="lat" id="lat" value="{{ request()->lat }}">
                                        <input type="hidden" name="long" id="long" value="{{ request()->long }}">*/}
                                        <TextInput
                                            type="text"
                                            name="location"
                                            // value="{{ request()->location }}"
                                            // className="mt-1 block w-full"
                                            placeholder="Location search..."
                                            autoComplete="location"
                                            isFocused={false}
                                            handleChange={searchChange}
                                            id="address"
                                        />
                                        <button className="btn" type="submit"><i className="bi bi-search"></i></button>
                                    </div>
                                    <button className="btn r-sort-btn" type="button"
                                        // onClick={getLocation()}
                                    ><i
                                            className="bi bi-geo-alt"></i></button>
                                </div>
                            </div>
                        </form>

                        <div className="restaurant-cate-list">
                            {/* @foreach ($resturent_details as $resturent_detail)
                                @if (request()->rating)
                                    @if ($resturent_detail->rating > request()->rating)
                                        <div className="restaurant-cate-item">
                                            <div className="rpc-item-box">
                                                <div className="rpc-item-img" style="background-image:url('{{ asset('public/uploads/users/'.$resturent_detail->profile->profile_photo) }}')"></div>
                                                @if (url('public/common_img/defoult_profile_image.png') == $resturent_detail->profile->profile_photo)
                                                    <div className="rpc-item-img" style="background-image:url('')"></div>
                                                @else
                                                    <div className="rpc-item-img"
                                                        style="background-image:url('{{ $resturent_detail->profile->profile_photo }}')">
                                                    </div>
                                                @endif
                                                <div className="rpc-item-info">
                                                    <div className="rpc-item-info-header">
                                                        <h3><a
                                                                href="{{ route('resturent_details', $resturent_detail->id) }}">{{ $resturent_detail->business_name }}</a>
                                                        </h3>
                                                        <div className="favourite-rating">
                                                            <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent_detail->id) }}."
                                                                title="Share by Email">
                                                                <i className="bi bi-share-fill rpc-favourite"></i>
                                                            </a>
                                                            @auth
                                                                <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                    className="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                                        className="bi bi-heart-fill"></i></a>

                                                                <span className="rpc-item-rating"
                                                                    onClick="pubRating('{{ $resturent_detail->id }}')"><i
                                                                        className="bi bi-star-fill"></i>{{ $resturent_detail->rating }}</span>

                                                            @endauth
                                                            @guest
                                                                <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                    className="rpc-favourite non-active"><i className="bi bi-heart"></i></a>
                                                                <a href="{{ route('login') }}"><span className="rpc-item-rating"><i
                                                                            className="bi bi-star-fill"></i>{{ $resturent_detail->rating }}</span></a>
                                                            @endguest
                                                        </div>
                                                    </div>
                                                    <p className="rpc-adress"><i className="bi bi-geo-alt"></i>
                                                        {{ $resturent_detail->profile->address }}</p>
                                                    <p>{{ substr($resturent_detail->profile->about, 0, 200) }}</p>

                                                </div>
                                            </div>
                                        </div>
                                    @else
                                    @endif
                                @else
                                    <div className="restaurant-cate-item">
                                        <div className="rpc-item-box">
                                            @if (url('public/common_img/defoult_profile_image.png') == $resturent_detail->profile->profile_photo)
                                                <div className="rpc-item-img" style="background-image:url('')"></div>
                                            @else
                                                <div className="rpc-item-img"
                                                    style="background-image:url('{{ $resturent_detail->profile->profile_photo }}')">
                                                </div>
                                            @endif
                                            <div className="rpc-item-info">
                                                <div className="rpc-item-info-header">
                                                    <h3><a
                                                            href="{{ route('resturent_details', $resturent_detail->id) }}">{{ $resturent_detail->business_name }}</a>
                                                    </h3>
                                                    <div className="favourite-rating">
                                                        <a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent_detail->id) }}."
                                                            title="Share by Email">
                                                            <i className="bi bi-share-fill rpc-favourite"></i>
                                                        </a>
                                                        @auth
                                                            <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                                className="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                                    className="bi bi-heart-fill"></i></a>
                                                            <span className="rpc-item-rating"
                                                                onClick="pubRating('{{ $resturent_detail->id }}')"><i
                                                                    className="bi bi-star-fill"></i>
                                                                {{ (int) $resturent_detail->rating }}</span>

                                                        @endauth
                                                        @guest
                                                            <a href="{{ route('user.add-favourite', $resturent_detail->id) }}" className="rpc-favourite non-active">
                                                                <i className="bi bi-heart"></i>
                                                            </a>
                                                            <a href="{{ route('login') }}">
                                                                <span className="rpc-item-rating">
                                                                    <i className="bi bi-star-fill"></i>
                                                                    {{ (int) $resturent_detail->rating }}
                                                                </span>
                                                            </a>
                                                        @endguest
                                                    </div>
                                                </div>
                                                @auth
                                                    <a className="rpc-adress" href="{{ route('mapdirection', ['address' => $resturent_detail->profile->address]) }}">
                                                        <i className="bi bi-geo-alt"></i> {{ $resturent_detail->profile->address }}
                                                    </a>
                                                @endauth
                                                @guest
                                                    <a className="rpc-adress" href="{{ route('login') }}">
                                                        <i className="bi bi-geo-alt"></i> {{ $resturent_detail->profile->address }}
                                                    </a>
                                                @endguest
                                                    <p>{{ substr($resturent_detail->profile->about, 0, 200) }}</p>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            @endforeach */}
                            {/* {products.total > 0 &&
                    products.data.map((row, key) => (
                      <CTableRow key={key}>
                        <CTableHeaderCell scope="row">{row.title}</CTableHeaderCell>
                        <CTableDataCell>{row.category?.title}</CTableDataCell>
                        <CTableDataCell>{row.description}</CTableDataCell>
                        <CTableDataCell>
                          <img
                            width="50px"
                            src={`http://localhost:8000/storage/product/image/${row.image}`}
                          />
                        </CTableDataCell>
                        <CTableDataCell>
                          <CButton
                            href={`/product/edit/${row.id}`}
                            color="success"
                            classNameName="me-2"
                          >
                            Edit
                          </CButton>
                          <CButton color="danger" onClick={() => handleDelete(row.id)}>
                            Delete
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ))} */}
                            <div className="restaurant-cate-item">
                                {props.resturent_details.total>0 &&
                                    props.resturent_details.data.map((row, key) => (
                                    <div className="rpc-item-box" key={key}>
                                        {/* @if (url('public/common_img/defoult_profile_image.png') == $resturent_detail->profile->profile_photo)
                                            <div className="rpc-item-img" style="background-image:url('')"></div>
                                        @else */}
                                            <div className="rpc-item-img"
                                                style={{ backgroundImage:`url('{{ row.profile.profile_photo }}')` }}>
                                            </div>
                                        {/* @endif */}
                                        <div className="rpc-item-info">
                                            <div className="rpc-item-info-header">
                                                <h3>
                                                    <Link
                                                    href={ route('resturent_details', row.profile.id) }
                                                    >{ row.profile.business_name }</Link>
                                                </h3>
                                                <div className="favourite-rating">
                                                    <Link href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site {{ route('resturent_details', $resturent_detail->id) }}."
                                                        title="Share by Email">
                                                        <i className="bi bi-share-fill rpc-favourite"></i>
                                                    </Link>
                                                    {/* @auth
                                                        <a href="{{ route('user.add-favourite', $resturent_detail->id) }}"
                                                            className="rpc-favourite {{ getFavDoc($resturent_detail->id) ? 'active' : 'non-active' }}"><i
                                                                className="bi bi-heart-fill"></i></a>
                                                        <span className="rpc-item-rating"
                                                            onClick="pubRating('{{ $resturent_detail->id }}')"><i
                                                                className="bi bi-star-fill"></i>
                                                            {{ (int) $resturent_detail->rating }}</span>

                                                    @endauth
                                                    @guest */}
                                                        <Link href="{{ route('user.add-favourite', $resturent_detail->id) }}" className="rpc-favourite non-active">
                                                            <i className="bi bi-heart"></i>
                                                        </Link>
                                                        <Link href="{{ route('login') }}">
                                                            <span className="rpc-item-rating">
                                                                <i className="bi bi-star-fill"></i>
                                                                {row.rating}
                                                            </span>
                                                        </Link>
                                                    {/* @endguest */}
                                                </div>
                                            </div>
                                            {/* @auth
                                                <a className="rpc-adress" href="{{ route('mapdirection', ['address' => $resturent_detail->profile->address]) }}">
                                                    <i className="bi bi-geo-alt"></i> {{ $resturent_detail->profile->address }}
                                                </a>
                                            @endauth
                                            @guest */}
                                                <Link className="rpc-adress" href="{{ route('login') }}">
                                                    <i className="bi bi-geo-alt"></i> {row.profile.address}
                                                </Link>
                                            {/* @endguest */}
                                                <p>{row.profile.about}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <nav className="pagination-nav">
                            <ul className="pagination">
                                <li className="page-item disabled">
                                    <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">1</a></li>
                                <li className="page-item active" aria-current="page">
                                    <a className="page-link" href="#">2</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#">Next</a>
                                </li>
                            </ul>
                            {/* {{ $resturent_details->links() }} */}
                        </nav>
                    </div>
                </section>
                {/* Search section end */}
                <div className="ellips-right"></div>
            </div>
        </Frontend>
    );
}
