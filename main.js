import App from './App'

// 导入网络请求包
import {
	$http
} from "@escook/request-miniprogram"
uni.$http = $http
$http.baseUrl = "https://api-ugo-web.itheima.net"

// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: "数据加载中..."
	})
}
// 响应拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}
//自定义请求失败提示框
uni.$showMsg = function(title = "请求失败", duration = 1500) {
	uni.showToast({
		title,
		duration,
		icon: 'none'

	})
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
