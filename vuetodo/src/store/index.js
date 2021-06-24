import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        //DATA
        todos:[
            { id : 1, text:'buy a car', checked : false},
            { id : 2, text:'play a game', checked : false},
          ],
    },
    mutations:{
        //state 내용을 변경하고 싶을때 사용
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
    },
    getters:{
        //COMPUTED
    }
});