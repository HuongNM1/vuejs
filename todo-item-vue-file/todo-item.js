Vue.component('todo-item', {
    props: ['todo'],
    data: function () {
        return { todoData: this.todo }
    },
    template: '<li v-on:click="changeStatus()">{{todo.text}} {{todo.status}}</li>',
    methods: {
        changeStatus: function () {
            this.todoData.status = !this.todoData.status;
        }
    }
});