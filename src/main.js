import Vue from 'vue'

Vue.config.productionTip = false

/*
Vue.component('my-header', {
  template: '<p>hello Vue {{word}}</p>',
  data: function () {
    return {
      word: '!'
    }
  }
})
*/

var myHeaderChild = {
  template: '<p>i am my header child</p>'
}

var myHeader = {
  template: '<p><my-header-child></my-header-child>hello Vue {{word}}</p>',
  data: function () {
    return {
      word: '!'
    }
  },
  components: {
    'my-header-child': myHeaderChild
  }
}

// 完全禁用ESLint进行检测,给new Vue这行代码上面加这个注释，把这行代码规则的校验跳过
/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<p>hello {{msg}}</p>',
  data: {
    msg: 'Vue'
  },
  components: {
    'my-header': myHeader
  }
})
