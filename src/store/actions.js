/**
 * actions
 */

import {ADD_DATA,ADD_CAR,UPADTECAR,DELETEGOODS,UPADTECHECK} from './mutations-type'
import qbData from '../../static/data/qbData'
export default {
    addData({commit}){
        commit(ADD_DATA,{qbData})
    },
    addToCar({commit},{id,message}){
        commit(ADD_CAR,{id,message})
    },
    updateCar({commit},{index}){
        commit(UPADTECAR,{index})
    },
    deletegoods({commit},{arr}){
        commit(DELETEGOODS,{arr})
    },
    updatedCheck({commit},{checked}) {
        commit(UPADTECHECK,{checked})
    },
}