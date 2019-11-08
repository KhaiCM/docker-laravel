<template>
  <div>
    Trang chủ
  </div>
</template>
<script>
export default {
  data () {
    return {
      categories: []
    }
  },

  mounted () {
    axios.get('api/categories').then((response) => {
        this.categories = response.data;
    })
  }
}
</script>
