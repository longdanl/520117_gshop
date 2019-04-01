//包含n个接口请求函数的模块
//1、根据经纬度获取位置详情<br/>
//暴露多个用export,所有接口函数名称都有一个开头req,${geohash}获取{}中指定的对象（参数、对象等）的值
import ajax from "./ajax"
export const reqAddress = (geohash) =>ajax("/position/${geohash}",)//调用ajax函数//ajax传参数，写在路经里面的参数parem参数，写在？后面的参数query参数
//2、获取食品分类列表<br/>
export const reqFoodTypes = () =>ajax("/index_category")//调用ajax函数
//3、根据经纬度获取商铺列表<br/>
export const reqShops = (longitude,latitude) =>ajax("/shops",{longitude,latitude})//调用ajax函数
//4、根据经纬度和关键字搜索商铺列表<br/>

//5、获取一次性验证码<br/>

//6、用户名密码登陆<br/>

//7、发送短信验证码<br/>

//8、手机号验证码登陆<br/>

//9、根据会话获取用户信息<br/>

//10、用户登出<br/>

