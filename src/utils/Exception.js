/**
 * Created by diew on 2018-08-08.
 * 处理捕获的异常
 */

// 运行异常基类
class RuntimeException {
    constructor(name, message) {
        this._name = name;
        this._message = message;
    }

    // 获取异常类型名字
    get name() {
        return this._name;
    }

    // 获取异常信息
    get message() {
        return this._message;
    }

    /**
     * 字符串转化，适用场景【是在隐式转换成字符串的时候，会调用toString】
     * let a = new ResponseException("456"); 
     * let b = "123"; 
     * console.log(b+a) //输出的就是123hehe::456
     */
    toString() {
        return `${this.name}::${this.message}`
    }
}

// let inst = new RuntimeException('代云舟', '报错了');
// console.log(inst.message);
// 网络异常
export class NetworkException extends RuntimeException {
    constructor(message) {
        super('NetworkException', message);
    }
}
// // 响应异常
export class ResponseException extends RuntimeException {
    constructor(message) {
        super('ResponseException', message);
    }
}