/**
 * state
 */
var shoppingCar = wx.getStorageSync('shoppingCar') || []
export default{
    qbinfo:{},
    car:shoppingCar
}