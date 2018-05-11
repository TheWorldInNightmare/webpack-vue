<template>
  <div>
      <h1>hello {{name}}</h1>
  </div>
</template>

<script>
export default {
  name:'App',
  data:function(){
      return {
          name : 'wangjichao'
      }
  }
}
</script>

<style>
h1{
    color: blueviolet
}
</style>
