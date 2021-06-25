import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        //DATA
        todos:[
            { id : 1, text:'buy a car', checked : false},
            { id : 2, text:'play a game', checked : false},
        ],
        users : [],
    },
    mutations:{
        //state 내용을 변경하고 싶을때 사용
        SET_USERS(state,users){
            state.users = users;
        },
        ADD_TODO(state,value){
            state.todos.push({
                id: Math.random(),
                text :value,
                checked:false
              });
        },
        TOGGLE_TODO(state,{id,checked}){
            // 구조분해할당
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            })
            state.todos[index].checked = checked
        },
        DELETE_TODO(state,todoId){
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index,1);      
        }
    },
    actions:{
        // METHODS
        getUsers({commit}){
            axios.get( 'https://jsonplaceholder.typicode.com/users').then(res =>{
                // 응답이 오면 이 안의 내용이 실행된다. ( 비동기)
                commit('SET_USERS', res.data);
            });
        },
        addTodo({commit}, value){
            setTimeout(function(){
                commit('ADD_TODO',value);
            },500)  
        },
        toggleTodo({commit},payload){
            setTimeout(function(){
                commit('TOGGLE_TODO',payload);
            },500)  
        },
        deleteTodo({commit},todoId){
            setTimeout(function(){
                commit('DELETE_TODO',todoId);
            },500)  
        }
    },
    getters:{
        //COMPUTED
    }
});