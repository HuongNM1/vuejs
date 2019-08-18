const app = new Vue({
    el: '#app',
    data: {
        title: 'Todo app with vue',
        input: 'input please',
        todoList: [
            { text: 'hoc vuejs 123', status: true },
            { text: 'hoc vuex', status: false },
            { text: 'hoc vue router', status: true }
        ]
    },
    computed: {
        titleReverse: function () {
            return this.title.split(' ').reverse().join(' ');
        }
    },
    methods: {
        showStatus: function (i = 0) {
            alert(this.todoList[i].status);
        },
    }
});
setTimeout(() => {
    app.todoList.push({ text: 'hoc them vue linh tinh', status: false });
}, 2000);