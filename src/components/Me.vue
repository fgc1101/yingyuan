<template>
    <div>
      <h1>重命名文件</h1>
      <h2>{{title}}</h2>
      <button @click="click">发送</button>
    </div>
</template>

<script>
    export default {
        name: "Me",
        data () {
          return {
            msg : '我是子组件中的一个消息'
          }
        },
        props : {
          title : String
        },
      methods :{
          click(){
            this.$emit('childFn',this.msg)
          }
      }
    }
</script>

<style scoped>

</style>
