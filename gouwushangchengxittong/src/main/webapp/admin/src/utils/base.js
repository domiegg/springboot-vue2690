const base = {
    get() {
        return {
            url : "http://localhost:8080/gouwushangchengxittong/",
            name: "gouwushangchengxittong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gouwushangchengxittong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "购物商场"
        } 
    }
}
export default base
