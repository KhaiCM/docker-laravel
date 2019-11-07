<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\User;
use App\Category;
use App\Comment;

class Topic extends Model
{
	protected $appends = ['time'];

	protected $visible = ['id', 'title', 'body', 'views', 'time', 'category_id'];

	public function getTimeAttribute()
	{
	    return $this->created_at->timestamp;
	}
	
    public function category()
	{
	    return $this->belongsTo(Category::class);
	}

	public function comments()
	{
	    return $this->hasMany(Comment::class);
	}

	public function user()
	{
	    return $this->belongsTo(User::class);
	}
}
