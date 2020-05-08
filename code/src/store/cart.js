export default {
    namespaced: true,
    state: {
        cartlist: [
            //购物车商品列表
        ],
        cartnum: 0, //计算商品添加个数
        totals: 0//总价格
    },
    mutations: {
        addCart(state,obj){
            //添加商品信息
            let index = state.cartlist.findIndex(val => val.goodId == obj.goodId)
            if(index != "-1"){
                state.cartlist[index].num += 1;
                state.cartnum = state.cartlist[index].num;
            }else{
                obj.isSelect = true;
                state.cartlist.push(obj);
                state.cartnum = 1;
            }
        },
        checkselect(state){
            if(state.cartlist.every(item => item.isSelect) == true){
                //返回的值 isSelect == true时
                state.cartlist.forEach((item) => {
                    item.isSelect = !item.isSelect
                })
            }else{
                //为false时循环让所有的选中
                state.cartlist.forEach((item)=>{
                    item.isSelect = true
                })
            }
        },
        del(state,index){
            state.cartlist.splice(index,1)
            state.cartnum = 0
        }
    },
    getters: {
        result(state){
            // 计算总数
            return state.cartlist.reduce((total,value) => {
                if(!value.isSelect)  return total //如果有被选中不为true的 ,不计算在里面
                return state.totals = total += value.num * value.price
            },0)
        },
        checkall(state){
            //监听 每一个 isSelect 
            return state.cartlist.every(item => item.isSelect)
        }
    },
    actions: {},
    modules:{}
}