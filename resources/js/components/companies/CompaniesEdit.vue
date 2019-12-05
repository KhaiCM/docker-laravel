<template>
    <div>
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
                                    <button class="btn btn-success rounded-pill">Create</button>
                                    <router-link to="/companies" class="btn btn-secondary rounded-pill">Back</router-link>
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
        mounted() {
            let app = this;
            let id = app.$route.params.id;
            app.companyId = id;
            axios.get('/api/v1/companies/' + id)
                .then(function (resp) {
                    app.company = resp.data;
                })
                .catch(function () {
                    alert("Could not load your company")
                });
        },
        data: function () {
            return {
                companyId: null,
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
                axios.patch('/api/v1/companies/' + app.companyId, newCompany)
                    .then(function (resp) {
                        app.$router.replace('/companies');
                    })
                    .catch(function (resp) {
                        console.log(resp);
                        alert("Could not create your company");
                    });
            }
        }
    }
</script>
