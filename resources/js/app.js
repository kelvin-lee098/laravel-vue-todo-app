require('./bootstrap');
window.Vue = require('vue');

Vue.component('todo', require('./components/Todo.vue').default);
Vue.component('new-todo', require('./components/NewTodo.vue').default);
Vue.component('todo-list', require('./components/TodoList.vue').default);
Vue.component('todo-app', require('./components/TodoApp.vue').default);

import store from '../js/store';

const app = new Vue({
    el: '#app',
    store
});
