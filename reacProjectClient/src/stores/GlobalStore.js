import { observable, makeObservable, action, computed } from 'mobx';

class GlobalStore {
    isLogin = false;
    isEdit = false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            isEdit:observable,
            setIsLogin: action,
            setIsEdit:action

        })
    }





    setIsLogin = (x) => {
        this.isLogin = x;
    }
    setIsEdit = (x) => {
        this.isEdit = x;
    }

}

export default new GlobalStore();