export default {
    namespaced:true,
    state: {
        addresslist:[
            {
                name: "张三",
                tel: "13099998888",
                province: "山西省",
                city: "晋中市",
                county: "和顺县",
                addressDetail: "20号",
                postalCode: "140723",
                address: "山西省晋中市和顺县20号",
                isDefault: true,
                id: "1", //地址id
            },
        ],
        seladdress: [],//选中的地址
        dataId:"1", //选中地址id,
        editId: null
    },
    mutations: {
        add(state,obj){ //添加地址 obj
            obj.isDefault = true; //
            obj.id = `${state.addresslist.length + 1}`; //设置id == 长度
            state.addresslist.unshift(obj)
        },
        getId(state,index){ //返回选中地址
            state.dataId = index
            state.seladdress = [] //每次进来把选中地址全部清空
            let arr = state.addresslist.find(element => { //返回选中地址
                return element.id == index
            });
            state.seladdress = arr;
        },
        addressedit(state,index){
            state.editId = parseInt(index) //因为是字符串，要转换
        }
    },
    actions: {
    },
    modules: {
    }

}