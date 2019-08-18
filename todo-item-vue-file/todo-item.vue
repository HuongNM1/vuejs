<template>
    <li v-on:click="changeStatus()">{{todo.text}} {{todo.status}}</li>
</template>

<script src="todo-item.js"></script>
