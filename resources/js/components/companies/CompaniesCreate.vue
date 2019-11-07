<template>
    <div>
        <div class="form-group">
            <router-link to="/" class="btn btn-default">Back</router-link>
        </div>

        <div class="card card-default">
            <div class="card-header">Create new company</div>
            <div class="card-body">
                <form v-on:submit="saveForm()">
                    <div class="row">
                        <div class="col-12 col-lg-6 offset-lg-3">
                            <div class="row">
                                <label class="col-4 text-right">Company name</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="company.name" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Company address</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="company.address" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Company website</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="company.website" class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-4 text-right">Company email</label>
                                <div class="col-8 form-group">
                                    <input type="text" v-model="company.email" class="form-control">
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
                company: {
                    name: '',
                    address: '',
                    website: '',
                    email: '',
                }
            }
        },
        methods: {
            saveForm() {
                event.preventDefault();
                var app = this;
                var newCompany = app.company;
                axios.post('/api/v1/companies', newCompany)
                    .then(function (resp) {
                        app.$router.push({path: '/'});
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
