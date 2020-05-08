export default {
        namespaced: true,
        state: {
            orderlist:[], //在操作订单
            unpaidlist:[], //未支付订单
            receivedlist:[], //待收货
            completelist:[] //完成
            
        },
        mutations: {
            createorder(state,obj){
               state.orderlist = obj
            },
            del(state,i){
                //删除已完成订单
                state.completelist.splice(i,1);
            }
        },
        actions: {

        },
        modules: {
          
        }
}