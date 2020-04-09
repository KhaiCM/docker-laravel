<template>
    <div class="row">
        <div class="col-md-10 offset-1 card card-default">
            <div class="card-header">Create new category blog</div>
            <div class="card-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-12 col-lg-6 offset-lg-3">
                            <div class="row">
                                <label class="col-4 text-right">Categoryname</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="category.name" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Company Description</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="category.description" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-8 offset-4 form-group">
                                    <button class="btn btn-success">Create Category</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div class="col-md-10 offset-1 card card-default">
            <router-link to="/vatohome" class="btn btn-default">Back</router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                category: {
                    name: '',
                    description: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCategory = app.category;
                console.log(newCategory)
                axios.post('/api/v1/vato', newCategory)
                    .then(function (resp) {
                        app.$router.push({path: '/vatohome'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your post");
                    });
            }
        }
    }
</script>
