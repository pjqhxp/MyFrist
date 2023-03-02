let baseURL = 'https://xmblqdtb.lc-cn-n1-shared.com'
export const $http = function (url, method = 'GET', data = {}) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseURL + url,
			method,
			header: {
				"X-LC-Id": "xmBLQDtBDTvS0jKQDpdW0jhN-gzGzoHsz",
				"X-LC-Key": "o7AC0cI2d4O1goDJE8edD8xf",
				"Content-Type": "application/json"
			},
			data,
			success: (res) => {
				resolve(res.data)
			},
			fail(err) {
				reject(err)
			}
		})
	})
}

export const $get = function(url,data={}){
	return $http(url,'GET',data)
}

export const $post = function(url,data={}){
	return $http(url,'POST',data)
}

export const $put = function(url,data={}){
	return $http(url,'PUT',data)
}
export const $delete = function(url,data={}){
	return $http(url,'DELETE',data)
}

