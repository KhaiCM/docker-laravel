<template>
    <div class="row">
        <div class="col-md-10 offset-1 form-group">
            <router-link to="/vatohome" class="btn btn-default">Back</router-link>
        </div>

        <div class="col-md-10 offset-1 card card-default">
            <div class="card-header">Create new post</div>
            <div class="card-body">
                <form @submit="saveForm()">
                    <div class="row">
                        <div class="col-12 col-lg-6 offset-lg-3">
                            <div class="row">
                                <label class="col-4 text-right">Category name</label>
                                <div class="col-8 form-group">
                                    <select class="form-control" v-model="post.category_id">
                                        <option v-for="(category, key) in categories" :value="category.id" :key="key">
                                            {{ category.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Title</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="post.title" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Description</label>
                                <div class="col-8 form-group">
                                    <textarea style="height: 100px" v-model="post.description" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Content</label>
                                <div class="col-8 form-group">
                                    <textarea style="height: 300px" v-model="post.content" class="form-control"></textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Status</label>
                                <div class="col-8 form-group">
                                    <select class="form-control" v-model="post.status">
                                        <option v-for="(value, key) in status" :value="value" :key="key">
                                            {{ value }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8 offset-4 form-group">
                                    <button class="btn btn-success">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                post: {
                    title: '',
                    description: '',
                    content: '',
                    status: 'pending',
                    category_id: '1',
                },
                status: [
                    'public',
                    'pending',
                ],
                categories: '',
            }
        },
        mounted() {
            axios.get('/api/v1/vato')
            .then((response) => {
                this.categories = response.data
            })
            .catch(function(response) {
                alert('Could not load your category')
            })
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newPost = app.post;
                axios.post('/api/v1/post', newPost)
                    .then(function (resp) {
                        app.$router.push({path: '/vatohome'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
