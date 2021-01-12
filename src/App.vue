<template>
  <div id="app">
    <yd-navbar fixed title="猫眼电影" bgcolor='' height='50px' fontsize='20px' color='#fff'>
      <router-link to="#" slot="right">
              <yd-icon name="type" size="25px" color="#fff"></yd-icon>
      </router-link>
    </yd-navbar>


    <div class="nav">
        <a href="#">晋中</a>
        <a href="#">经典老片</a>
        <a href="#">青春</a>
        <a href="#">文艺</a>
        <a href="#">悬疑</a>
        <a href="#">动作</a>
        <a href="#">爱情</a>
        <a href="#">科幻</a>
        <a href="#">直播</a>
        <a href="#">小视频</a>
        <a href="#">问答</a>
        <a href="#">体育</a>
        <a href="#">科技</a>
      </div>
    <!-- 滚动导航 -->
    <div>
      <me :title="title" @childFn="parentFn"></me>
      <h2>{{message}}</h2>
      <yd-list theme="4">
        <yd-list-item v-for="item, key in img_list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <span slot="yingwen">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="demo-list-price">动作</span>
            </div>
            <div>
                <h1>nihao</h1>
            </div>
            <div>评分：9.1分</div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </div>

<!--    me组件-->

    <yd-tabbar fixed fontsize="15px">
      <yd-tabbar-item title="首页" link="#">
        <yd-icon name="home" slot="icon" ></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#" active>
        <yd-icon name="shopcart" slot="icon" size="1rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#">
        <yd-icon name="ucenter-outline" slot="icon" size="1rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </div>
</template>

<script>
  import me from './components/Me'
export default {
  name: 'App',
  data() {
        return {
            list: [
                {label: '晋中'},
                {label: '影院'},
                {label: '待映'},
                {label: '经典电影'},
                {label: '电热推荐'},
                {label: '燃热推荐'},
                {label: '消毒柜推荐'},
                {label: '嵌入式推荐'},
                {label: '商用电器'},
                {label: '活动说明'}
            ],
            img_list: [
              {img: "//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg", title: "标题111标题标题标题标题", price: 156.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg", title: "标题222标题标题标题标题", price: 256.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg", title: "标题333标题标题标题标题", price: 356.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg", title: "标题444标题标题标题标题", price: 456.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg", title: "标题555标题标题标题标题", price: 556.23, w_price: 89.36},
              {img: "//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg", title: "标题666标题标题标题标题", price: 656.23, w_price: 89.36}
            ],
            title : '我是一个好人',
            message : ''
        }
        },
  components : {
      me
  },
  methods : {
    parentFn(payload){
        this.message = payload
    }
  }
}
</script>

<style scoped>
  .yd-navbar{
    color:#fff;
    background-color:#e54848;
  }
  .nav {
    width: 100%;
    height: 40px;
    line-height: 40px;
    white-space: nowrap;
    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
    overflow-x: scroll;
    overflow-y: hidden;
    text-align: justify;
    background: #F4F5F6;
    padding: 0px 0px;
    margin-bottom: 0px;
    margin-top: 50px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  .nav a {
    color: #505050;
    /*取消超链接下划线*/
    text-decoration: none;
    margin: auto 10px;
    font-size: 16px;
  }

  .nav::-webkit-scrollbar {
    /*隐藏滚动条*/
    display: none;
  }

  .yd-tabbar{
    height: 55px;
  }
  .yd-tabbar .yd-tabbar-fixed{

  }
</style>
