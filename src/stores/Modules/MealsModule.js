import axios from "axios";
export default {
    namespaced: true,
    state() {
        return {
            meals: [],
            indainMeals: [],
            mealsType: [],
            mealsByCategory: []
        }
    },
    mutations: {
        GET_MEAL(state, data) {
            state.meals = data?.data?.meals
        },
        GET_INDIAN_MEAL(state, data) {
            state.indainMeals = data?.data?.meals
        },
        GET_MEAL_BY_ID(state, data) {
            state.meals = data?.data?.meals
        },
        GET_MEAL_BY_CATEGORY(state, data) {
            state.mealsByCategory = data?.data?.meals
        },
        GET_MEAL_TYPE(state, data) {
            state.mealsType = data?.data?.categories

        }
    },
    actions: {
        getMeals(context) {
            axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c').then((response) => {
                context.commit('GET_MEAL', response)
            })
        },
        getIndianMeals(context, country) {

            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?a=' + country).then((response) => {
                context.commit('GET_INDIAN_MEAL', response)
            })
        },
        getMealsById(context, mealId) {
            axios.get('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId).then((response) => {
                context.commit('GET_MEAL_BY_ID', response)

            })
        },
        getMealsByCategory(context, mealCategory) {
            axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + mealCategory).then((response) => {
                context.commit('GET_MEAL_BY_CATEGORY', response)

            })
        },
        getMealsType(context,) {
            axios.get('https://www.themealdb.com/api/json/v1/1/categories.php').then((response) => {
                context.commit('GET_MEAL_TYPE', response)

            })
        }
    },
    getters: {
        meals(state) {
            return state.meals
        },
        indainMeals(state) {
            return state.indainMeals
        },
        mealsType(state) {
            return state.mealsType
        },
        mealsByCategory(state) {
            return state.mealsByCategory
        },
    }
}