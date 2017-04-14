<?php
namespace App\Http\Controllers;
use Illuminate\Http\Response;
use Illuminate\Routing\Controller as BaseController;

class HomeController extends BaseController {

	public function index() {
		return view('index');
	}
	public function sidebar() {
		return response()->json(
			[[
				'id' => 1,
				'parent_id' => 0,
				'system_name' => 'admin',
				'title' => 'dashboard.sidebar.dashboard', // trans
				'url' => "/dashboard",
				'target' => '_self',
				'icon_class' => 'fa fa-dashboard',
				'order' => 1,
			],
				[
					'id' => 2,
					'parent_id' => 0,
					'system_name' => '',
					'title' => 'dashboard.sidebar.posts', // trans
					'url' => '/posts',
					'target' => '_self',
					'icon_class' => 'fa fa-laptop',
					'order' => 2,
				],
				[
					'id' => 3,
					'parent_id' => 2,
					'system_name' => 'adminPostCategories',
					'title' => 'dashboard.sidebar.categories', // trans
					'url' => "/posts/category",
					'target' => '_self',
					'icon_class' => 'fa fa fa-th-large',
					'order' => 1,
				],
				[
					'id' => 4,
					'menu_id' => 2,
					'parent_id' => 2,
					'system_name' => 'adminPostTags',
					'title' => 'dashboard.sidebar.tags', // trans
					'url' => "/posts/tag",
					'target' => '_self',
					'icon_class' => 'fa fa fa-tags',
					'order' => 2,
				],
				[
					'id' => 5,
					'menu_id' => 2,
					'parent_id' => 2,
					'system_name' => 'adminPosts',
					'title' => 'dashboard.sidebar.posts_manage', // trans
					'url' => "/posts/post",
					'target' => '_self',
					'icon_class' => 'fa fa-laptop',
					'order' => 3,
				],
				[
					'id' => 6,
					'menu_id' => 2,
					'parent_id' => 2,
					'system_name' => 'adminPostComments',
					'title' => 'dashboard.sidebar.comments', // trans
					'url' => "/posts/comment",
					'target' => '_self',
					'icon_class' => 'fa fa-comments',
					'order' => 4,
				],
			]
		);
	}
}
