import axios from 'axios'

export default{
    state:{
        users:[]
    },
    mutations:{
        SET_USERS(state,users){
            state.user.users = users;
        },
    },
    actions:{
        getUsers({commit}){
            axios.get( 'https://jsonplaceholder.typicode.com/users').then(res =>{
                // 응답이 오면 이 안의 내용이 실행된다. ( 비동기)
                commit('SET_USERS', res.data);
            });
        },
    }

}