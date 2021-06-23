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

    },
    actions:{
        // METHODS
    },
    getters:{
        //COMPUTED
    }
});