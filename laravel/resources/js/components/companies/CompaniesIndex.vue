<template>
    <div>
        <div class="card">
            <div class="card-header">
                <div class="row">
                    <div class="col col-sm-6 col-md-6">
                        <h3>Companies list</h3>
                    </div>
                    <div class="col col-sm-6 col-md-6">
                        <router-link :to="{name: 'createCompany'}" class="btn btn-success rounded-pill float-right">Create new company</router-link>
                    </div>
                </div>
            </div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Website</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(company, index) in companies" :key="index">
                        <td>{{ company.name }}</td>
                        <td>{{ company.address }}</td>
                        <td>{{ company.website }}</td>
                        <td>{{ company.email }}</td>
                        <td>
                            <router-link :to="{name: 'editCompany', params: {id: company.id}}" class="btn btn-warning rounded-pill">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger rounded-pill"
                               v-on:click="deleteEntry(company.id, index)">
                                Delete
                            </a>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                companies: []
            }
        },
        mounted() {
            var app = this
            axios.get('/api/v1/companies')
                .then(function (resp) {
                    app.companies = resp.data;
                })
                .catch(function (resp) {
                    console.log(resp);
                    alert("Could not load companies");
                });
        },
        methods: {
            deleteEntry(id, index) {
                if (confirm("Do you really want to delete it?")) {
                    var app = this;
                    axios.delete('/api/v1/companies/' + id)
                        .then(function (resp) {
                            app.companies.splice(index, 1);
                        })
                        .catch(function (resp) {
                            alert("Could not delete company");
                        });
                }
            }
        }
    }
</script>
