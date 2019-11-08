<template>
  <div>
    <h2>Các chủ đề trong danh mục {{ category.name }}</h2>
    <topic v-for="topic in topics" :topic="topic" :key="topic.id"></topic>
  </div>
</template>

<script>
import Topic from '../Topic.vue';

export default {

  components: { Topic },

  data () {
    return {
      topics: [],
      category: [],
    }
  },
  mounted () {
    console.log(this.$route.params.categoryName)
    axios.get('http://127.0.0.1:8000/api/categories/' + this.$route.params.categoryId + '/topics').then((response) => {
      this.topics = response.data.data;
    })
    $.get('http://127.0.0.1:8000/api/categories/' + this.$route.params.categoryId).done((response) => {
      this.category = response;
    })
  }
}
</script>
