<template>
  <div>
    <category v-for="(category, index) in categories" :category="category" :index="index" :key="category.id"></category>
  </div>
</template>
<script>
  import Category from '../Category.vue';
  export default {

    components: { Category },

    data () {
      return {
        categories: []
      }
    },
    mounted () {
      axios.get('http://127.0.0.1:8001/api/categories/').then((response) => {
            this.categories = response.data
        })
    }
  }
</script>
