/**
 * mutations
 * 在文件顶部先引用vue，mutaions里面这样写，Vue.set(state,'messageList',res.data.messageList);通过这种方式就可以触发getters的更新
 */
import  Vue from 'vue'
import {ADD_DATA,ADD_CAR,UPADTECAR,DELETEGOODS,UPADTECHECK} from './mutations-type'
export default {
    [ADD_DATA](state,{qbData}){
        state.qbinfo = qbData
        // console.log(state.qbinfo)
    },
    [ADD_CAR](state,{id,message}){
        if(message){
            state.car.push(message)
            console.log(message)
            message.checked = false
            // 将数据保存到本地
            wx.setStorage({
                key:"shoppingCar",
                data:state.car
            })
            return
        }
        state.qbinfo.forEach(item => {
            if(item.number == id){
                item.checked = false
                state.car.push(item)
                // 将数据保存到本地
                wx.setStorage({
                    key:"shoppingCar",
                    data:state.car
                })
                console.log("ADD_CAR"+state.car)
                return
            }
        });
    },
    [UPADTECAR](state,{index}){
        state.car.forEach((item,i)=>{
            if(i == index){
                item.checked = !item.checked
                console.log(item.checked)
                state.car.splice(i,1,item)
                console.log(item)
                return
            }
        })
        wx.setStorage({
            key:"shoppingCar",
            data:state.car
        })
    },
    [DELETEGOODS](state,{arr}){
        state.car.forEach((item,i)=>{
            for(let j =0 ; j<arr.length;j++){
                if(i==arr[j]){
                    state.car.splice(i,1)
                }
            }
        })
        wx.setStorage({
            key:"shoppingCar",
            data:state.car
        })

    },
    [UPADTECHECK](state,{checked}){
        state.car.forEach(item=>{
            item.checked = checked
        })
    }
}