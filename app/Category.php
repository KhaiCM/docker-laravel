<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Models\Topic;
use App\Models\Post;

class Category extends Model
{
	protected $visible = ['id', 'name', 'description', 'numberOfTopics'];
    protected $appends = ['numberOfTopics'];

    public function topics()
    {
        return $this->hasMany(Topic::class);
    }

    public function getNumberOfTopicsAttribute()
    {
        return $this->topics->count();
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
