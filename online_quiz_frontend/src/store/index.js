import { createStore } from "vuex";
import axiosClient from '../axios.js'
import VuexPersister from 'vuex-persister';

const vuexPersister = new VuexPersister({
  key: 'myAppStore', // The key used to store the data in LocalStorage/SessionStorage
  storage: localStorage, // Choose between localStorage or sessionStorage
});

const quizs = [
    {
        id: 1,
        title: "Vue3 JS",
        image: "@/assets/images/vue.jpg",
        time: 10,
        question: 10
    },
    {
        id: 2,
        title: "Laravel",
        image: "./assets/images/laravel.jpg",
        time: 15,
        question: 15
    },
    {
        id: 3,
        title: "Django",
        image: "./assets/images/laravel.jpg",
        time: 15,
        question: 15
    }
];

const courses = [
    {
        quiz_id: 1,
        question: [
            {
                id: 1,
                question: "What is CSS?",
                options: [
                    {
                        id: 1,
                        option: "Cascade S S"
                    },
                    {
                        id: 2,
                        option: "Cascade Style S"
                    },
                    {
                        id: 3,
                        option: "Cascade Style Sheet"
                    },
                ],
                answer: 3
            },
            {
                id: 2,
                question: "What is Laravel?",
                options: [
                    {
                        id: 1,
                        option: "Front End dev"
                    },
                    {
                        id: 2,
                        option: "Back End Dev"
                    },
                    {
                        id: 3,
                        option: "Full S"
                    },
                ],
                answer: 2
            },
        ]
    },
    {
        quiz_id: 2,
        question: [
            {
                id: 1,
                question: "What is Vue?",
                options: [
                    {
                        id: 1,
                        option: "Vue JSSSS"
                    },
                    {
                        id: 2,
                        option: "Vue 3 JS"
                    },
                    {
                        id: 3,
                        option: "React"
                    },
                ],
                answer: 2
            },
            {
                id: 2,
                question: "What is Flutter?",
                options: [
                    {
                        id: 1,
                        option: "Andriod Only"
                    },
                    {
                        id: 2,
                        option: "IOS only"
                    },
                    {
                        id: 3,
                        option: "Andriod and iOS"
                    },
                ],
                answer: 3
            },
        ]
    }
]
const store = createStore ({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem("TOKEN"),
        },
        quiz: [],
        course: null,
        question: [],
        currentQuestionIndex: 0,
        answers: [],
        questionTime: 60
    },
    getters: {},
    actions: {
        register({commit}, user){
            return axiosClient.post('/register', user).then(({data})=>{
                commit('setUser', data);
                return data;
            })
        },
        login({commit}, user){
            return axiosClient.post('/login', user).then(({data})=>{
                commit('setUser', data);
                return data;
            })
        },
        addQuiz({commit}, quiz){
            return axiosClient.post('/addquiz', quiz).then(({data})=>{
                commit('addNewQuiz', data);
                return data;
            })
        },
        questions({commit}, state){
            commit('setQuestion')
            return state.question;
        }
    },
    mutations: {
        setUser:(state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem("TOKEN", userData.token)
        },
        setQuestion:(state) => {
            for (const item of courses){
                if(item.quiz_id === state.course){
                    state.question = item.question
                    break
                }
            }
        },
        nextQuestion(state) {
            state.currentQuestionIndex++;
        },
        selectAnswer(state, { questionIndex, answer }) {
            let found = false;
            const ans = {
                id: questionIndex,
                answer: answer
            }
            for (let i = 0; i < state.answers.length; i++){
                if(state.answers[i].id === questionIndex){
                    state.answers[i] = ans;
                    found = true;
                    break;
                }
            }
            if(!found){
                state.answers.push(ans);
            }
        },
        addNewQuiz(state, newQuiz){
            state.quiz = newQuiz.quiz;
        },
        finish(state) {
            state.currentQuestionIndex = 0;
            state.answers = [];
            state.course = null;
            state.question = []
        },
        
    },
    modules: {},
    plugins: [vuexPersister.persist],
});

export default store;