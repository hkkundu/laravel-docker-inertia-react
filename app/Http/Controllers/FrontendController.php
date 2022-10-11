<?php

namespace App\Http\Controllers;

use App\Models\Cms;
use App\Models\Food;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class FrontendController extends Controller
{
    public function restaurent(Request $request)
    {
        $search = $request->search;
        $dish = $request->dish;
        $rating = $request->rating;
        $distance = $request->distance;
        $latitude = $request->lat;
        $longitude = $request->long;
        $data['cms'] = Cms::where('page_name','Restaurants')->first();
        // dd($search);
        // $resturent_details = DB::table('users')->join('user_profiles','user_profiles.user_id','=','users.id')
        //         ->join('food','food.pub_id','=','users.id')
        //         ->join('categories','categories.id','food.categori_id')
        //         ->select('users.business_name','user_profiles.profile_photo','user_profiles.about','user_profiles.address','users.id')
        //         ->where('users.role',2)
        //         ->when($search, function ($query) use ($search) {
        //             return $query->where('users.business_name', 'LIKE', "%$search%")
        //                         ->orWhere('food.name', 'LIKE', "%$search%")
        //                         ->orWhere('categories.name', 'LIKE', "%$search%");
        //         })
        //         ->distinct()
        //         ->paginate(9);
        // if(!empty($distance) && !empty($latitude) && !empty($longitude)){
        //     $sql_distance = "(
        //         3959 * acos (
        //           cos ( radians(78.3232) )
        //           * cos( radians( lat ) )
        //           * cos( radians( lng ) - radians(65.3234) )
        //           + sin ( radians(78.3232) )
        //           * sin( radians( lat ) )
        //         )
        //       ) AS distance";
        // }
        $resturent_details = User::with('profile')
                            ->withCount(['reviews as rating' => function($query) use ($rating){
                                $query->select(DB::raw('avg(rating) as avg_rating'));
                                    // ->when($rating, function ($query) use ($rating) {
                                    //     $query->having(DB::raw('avg(rating)'), '>', $rating);
                                    // });
                            }])
        // ->leftJoin('pub_reviews', 'pub_reviews.pub_id', '=', 'users.id')
        //         ->select(['users.*',
        //             DB::raw('AVG(pub_reviews.rating) as ratings_average')

        //     ])
                            ->when($search, function ($query) use ($search) {
                                $query->where('users.business_name', 'LIKE', "%$search%")
                                    ->orWhereHas('foods', function($query) use ($search){
                                        $query->where('name', 'LIKE', "%$search%");
                                    })
                                    ->orWhereHas('foods.category', function($query) use ($search){
                                        $query->where('name', 'LIKE', "%$search%");
                                    });
                            })
                            ->when($dish, function ($query) use ($dish) {
                                $query->whereHas('foods', function($query) use ($dish){
                                    $query->where('name', 'LIKE', "%$dish%");
                                });
                            });
                            // ->when($rating, function ($query) use ($rating) {
                            //     // $query->whereHas('foods', function($query) use ($rating){
                            //     //     $query->where('name', '>', "rating");
                            //     // });
                            //     // $query->leftJoin('pub_reviews', 'pub_reviews.pub_id', '=', 'users.id')
                            //     //     ->select(['users.*',
                            //     //         DB::raw('AVG(pub_reviews.rating) as ratings_average')
                            //     // ]);

                            //     $query->where(DB::raw('AVG(pub_reviews.rating) as ratings_average'),'>', $rating);
                            //     // where(DB::raw('AVG(pub_reviews.rating) as ratings_average'),'>', $rating)
                            //         // $query->where(function ($query) {
                            //         //     $query->select(DB::raw('AVG(pub_reviews.rating) as ratings_average'))
                            //         //         ->from('pub_reviews')
                            //         //         ->whereColumn('pub_reviews.pub_id', 'users.id')
                            //         //         ->limit(1);
                            //         //         // ->orderByDesc('membership.start_date')
                            //         // },'>', $rating);
                            // })
            // if ($rating) {
            //     $latestPosts = DB::table('pub_reviews')
            //        ->select('pub_id', DB::raw('AVG(pub_reviews.rating) as ratings_average'))
            //     //    ->where(DB::raw('AVG(pub_reviews.rating) as ratings_average'), '>', $rating)
            //        ->groupBy('pub_id')
            //     //    ->h
            //        ->get()->where('ratings_average','>',$rating);

            //     // $resturent_details = $resturent_details->joinSub($latestPosts, 'latest_posts', function ($join) {
            //     //     $join->on('users.id', '=', 'latest_posts.pub_id');
            //     // });
            //     $resturent_details = $resturent_details->orderBy();
            // }
            $resturent_details = $resturent_details->where('users.role',2)
                    ->where('users.status',1);
                    if(!empty($distance) && !empty($latitude) && !empty($longitude)){
                        $resturent_details = $resturent_details->whereHas('profile', function($query) use ($distance,$latitude,$longitude){
                            $query->select(DB::raw("(3959 * acos (
                                cos ( radians(".$latitude.") )
                                * cos( radians( add_lat ) )
                                * cos( radians( add_lng ) - radians(".$longitude.") )
                                + sin ( radians(".$latitude.") )
                                * sin( radians( add_lat ) )
                              )
                            ) AS distance"))->having('distance','<',$distance);
                        });
                        // $sql_distance = "(
                        //     3959 * acos (
                        //       cos ( radians(78.3232) )
                        //       * cos( radians( lat ) )
                        //       * cos( radians( lng ) - radians(65.3234) )
                        //       + sin ( radians(78.3232) )
                        //       * sin( radians( lat ) )
                        //     )
                        //   ) AS distance";

                    }
                    if ($rating) {
                        $resturent_details = $resturent_details->orderBy('rating','desc');
                    }


                    // ->having('reviews_avg','>',1)
                    $resturent_details = $resturent_details->paginate(12);
                    // if ($rating) {
                    //     $resturent_details = $resturent_details->where('rating','>', $rating);
                    // }
                    // dd($resturent_details);
                    $data['foods'] = Food::select('name')->get();
        if ($search) {
            # code...
            $resturent = $resturent_details->where('business_name', $search)->first();
            if($resturent) {
                return redirect()->route('resturent_details',$resturent->id);
            }
        }
        $data['resturent_details'] = $resturent_details;
        return Inertia::render('Restaurent', $data);
    }
}
