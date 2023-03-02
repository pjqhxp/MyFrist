export default {
	namespaced: true,
	state() {
		return {
			orderList: [{
						name: "全部",
						list: []
					},
					{
						name: "待付款",
						list: []
					},
					{
						name: "待发货",
						list: []
					},
					{
						name: "待收货",
						list: []
					},
					{
						name: "待评价",
						list: []
					}
				]
		}
	},
	mutations:{
		moneyMut(state,res){
			state.money = res
		},
		orderListMut(state,orderList){
			state.orderList[0].list.push(orderList)
			state.orderList[2].list.push(orderList)
		},
		orderOrderMut(state,orderList){
			state.orderList[0].list.push(orderList)
			state.orderList[1].list.push(orderList)
		}
	},
	actions:{
		
	}
}
