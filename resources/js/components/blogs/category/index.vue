<template>
    <div class="row">
        <div class="col-md-10 offset-1 form-group">
            <router-link :to="{name: 'BlogCreateCategory'}" class="btn btn-success">Create new category</router-link>
        </div>

        <div class="col-md-10 offset-1 card">
            <div class="card-header">Category list</div>
            <div class="card-body">
                <table class="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th>Category Name</th>
                        <th>Desc</th>
                        <th width="100">&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="company, index in category">
                        <td>{{ company.name }}</td>
                        <td>{{ company.address }}</td>
                        <td>
                            <router-link :to="{name: 'editCompany', params: {id: company.id}}" class="btn btn-xs btn-default">
                                Edit
                            </router-link>
                            <a href="#"
                               class="btn btn-xs btn-danger"
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
                category: []
            }
        },
        mounted() {
            var app = this;
            axios.get('/api/v1/vato')
                .then(function (resp) {
                    app.category = resp.data;
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
