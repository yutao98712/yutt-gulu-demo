import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGropup from './button-group.vue'

Vue.component('g-button', Button)
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGropup)
new Vue({
  el: '#app',
  data() {
    return { 
      loading: false
    }
  }
})

/**
 * BDD是TDD的一种衍生，通过特定的BDD框架，
 * 用自然语言或类自然语言，
 * 按照编写用户故事或者用户用例的方式，
 * 以功能使用者的视角，
 * 描述并编写测试用例。
 */

import chai from 'chai';
import spies from 'chai-spies'

const expect = chai.expect;
chai.use(spies)
const VM = Vue.extend(Button)


try {
  {
    const button = new VM({
      propsData: {
        icon: 'setting'
      }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-setting')
    button.$el.remove()
    button.$destroy()
  }
  
  {
    const button = new VM({
      propsData: {
        icon: 'setting',
        loading: true
      }
    })
    button.$mount()
    let useElement = button.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
  }
  
  {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const button = new VM({
      propsData: {
        icon: 'setting',
        iconPosition: 'left'
      }
    })
    button.$mount(div);
    let svg = button.$el.querySelector('svg')
    let { order } = window.getComputedStyle(svg)
    expect(order).to.eq('1')
    button.$el.remove()
    button.$destroy() 
  }
  
  {
    const vm = new VM({
      propsData: {
        icon: 'settings'
      }
    })
    vm.$mount()
    let spy = chai.spy(function() {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
  }
} catch (error) {
  window.errors = [error]
} finally {
  window.errors.forEach(error => {
    console.error(error.message)
  })
}
