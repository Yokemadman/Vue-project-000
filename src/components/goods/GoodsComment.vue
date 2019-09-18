<template>
  <div>
    <comment :id="this.id"></comment>
  </div>
</template>

<script>
  import comment from '../../components/subcomponents/comment.vue'
  export default {
    data(){
      return{
        id:this.$route.params.id
      }
    },
    components:{
      comment
    }
  }
</script>

<style lang="scss" scoped>

</style>