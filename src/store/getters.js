/**
 * getters
 */
export default {
    getCarCount(state){
        const count = state.car.length
        console.log("getCarCount"+count)
        return count
    },
    getCarInfo(state){
        console.log("getters__getCarInfo___"+state.car)
        return state.car
    }
}