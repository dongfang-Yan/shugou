<template>
    <div>
       <div class="nav">
           <div class="content">
                <div class="left" ref="left">
                <ul>
                    <li :class="{current:i == currentIndex}" v-for="(item,i) in left" :key="i" @click="selectItem(i,$event)">
                        <span class="left-item">{{ item }}</span>
                    </li>
                   
                </ul>
            </div>
            <div class="right" ref="right">
                <ul>
                    <li v-for="(item,i) in right" :key="i" class="right-item right-item-hook">
                        <h2>{{ item.name }}</h2>
                        <ul class="clearfix">
                            <router-link to="/details" tag="li" v-for="(num,j) in item.content" :key="j">
                                <div class="imgli">
                                   <img :src="item.img" alt="">
                                </div>
                                <p>{{num}}</p>
                                </router-link>
                        </ul>
                    </li>
                </ul>
            </div>
           </div>
       </div>
    </div>
</template>

<script>
import BScroll from '@better-scroll/core'
    export default {
        data:function(){
            return {
                left:["超市","数码","服装","新品","充值","团购","领券","特惠"],
               right:[
                    {name:"超市",content:["水果","日常用品","海鲜","肉类"],img:[require("../../assets/imgs/class_phone.png")]},
                    {name:"数码",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/class_tv.jpg")]},
                    {name:"服装",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/good1.webp")]},
                    {name:"新品",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/good2.jpg")]},
                    {name:"充值",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/good3.jpg")]},
                    {name:"团购",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/goodshot.jpg")]},
                    {name:"领券",content:["手机","电视","耳机","数码相机","电子表"],img:[require("../../assets/imgs/details_1.jpg")]},
                    {name:"特惠",content:["拍卖价","疯抢","秒杀","数码相机","电子表"],img:[require("../../assets/imgs/details_2.jpg")]},
                ],
                scrollY:0,
                listHeight:[],  //存储右边每一项li高度
            }
        },
        methods: {
                _initScroll(){
                    // 联动实例化插件对象
                    this.lefts = new BScroll(this.$refs.left,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });
                    this.rights = new BScroll(this.$refs.right,{
                        click:true, //拥有触发事件，
                        probeType:3 //探针的效果，时时获取滚动高度
                    });

                    // right这个对象监听滚动事件，
                    this.rights.on("scroll",(pos)=>{
                        this.scrollY = Math.abs(Math.round(pos.y));
                    })
                },
                _getHeight(){
                    let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                    let height = 0;//默认高度
                    this.listHeight.push(height); //添加高度数组中
                    // 循环对象
                    for(let i = 0;i < rightItems.length;i++){
                        let item = rightItems[i];
                        height += item.clientHeight; // 对象高度
                        this.listHeight.push(height);
                    }
                },
                // 左侧点击效果
                // index 下标
                // event 点击对象事件
                selectItem(index,event){
                    // 在better-scroll指派事件的event和普通浏览器的点击事件event有个属性区别_constructed
                    // 浏览器原生点击事件没有_constructed所以当时浏览器监听到该属性时候return掉
                    if(!event._constructed){
                        return;
                    }else{
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[index];
                        // scrollToElement()//滚动到指定的目标元素
                        this.rights.scrollToElement(el);

                        // 左边联动
                        let leftItems = this.$refs.left.getElementsByTagName("li");
                        let elLi = leftItems[index];
                        this.lefts.scrollToElement(elLi);
                    }
                }
            },
            // 生命周期函数
            mounted() {  //页面渲染到浏览器时候
                // 生命周期函数执行代码速度比页面渲染浏览器执行速度快。html代码没有渲染成功？
                // 保证页面代码浏览器正常执行后，在执行当前生命周期函数代码段
                // $nextTick() 让所有DOM执行完后，回调执行方法
                this.$nextTick(()=>{
                    this._initScroll();//调用初始化联动效果
                    this._getHeight(); //获取右边每一项高度

                    // 跳转效果
                    if("id" in this.$route.query){
                        // 联动效果
                        let rightItems = this.$refs.right.getElementsByClassName("right-item-hook");
                        let el = rightItems[this.$route.query.id];
                        this.rights.scrollToElement(el);
                    }
                })
            },
            // 计算属性
            computed: {
                currentIndex(){
                    for(let i = 0; i < this.listHeight.length;i++){
                        let height = this.listHeight[i];
                        let height2 = this.listHeight[i+1];
                        // height2不存在时候，或落在height和height2之间时候，直接放回索引值
                        if(!height2 || (this.scrollY >=height && this.scrollY < height2) ){
                        
                            // 左边联动
                            let leftItems = this.$refs.left.getElementsByTagName("li");
                            let elLi = leftItems[i];
                            this.lefts.scrollToElement(elLi);
                            return i;
                        }
                    }
                    // 如果this.listHeight没有值，返回0
                    return 0;
                }
            },
    }
</script>

<style lang="scss" scoped>
h3{
    padding-left:10px;
    height: 80px;
    margin: 0;
    color: white;
    text-align: center;
    background-color: tomato;
}
  *{
            padding: 0;
            margin: 0;
        }
        ul{
            list-style: none;
        }
        .content{
            display: flex;
            position: absolute;
            top: 50px;
            bottom: 50px;
            width: 100%;
            background-color: #f5f5f5;
        }
        .left{
            flex: 0 0 100px;
            width: 100px;
            background-color: #f5f5f5;
            overflow: hidden;
            border-right: 2px solid #f5f5f5;
            li{
                &.current{
                    border-left:2px solid #ed2a17;
                    color: #ed2a17;
                }
                span{
                    &.left-item{
                        display: block;
                        width: 100%;
                        height: 60px;
                        line-height: 60px;         
                        text-align: center;
                    }
                }
            }
        }
        .right{
            flex:1;
            overflow: hidden;
            background-color: #f5f5f5;
            &>ul{
                height: 2800px;
                margin-bottom: 30px;
                background-color: #fff;
                li{
                    background-color: #fff;
                    h2{
                    line-height: 50px;
                    text-align: left;
                    padding-left: 10PX;
                    font-size: 20PX;
                    font-weight: bold;
                    }
                    ul{
                        li{
                            text-align: center;
                            float: left;
                            width: 90px;
                            height: 120px;
                            padding: 5px;
                            .imgli{
                                width: 100%;
                                height: 90px;
                                img{
                                    width: 90px;
                                    height: 90px;
                                }
                            }
                            
                        }
                    }
                }
            }
        }  
        .clearfix::after{
            content: "";
            display: block;
            clear: both;
        }
</style>