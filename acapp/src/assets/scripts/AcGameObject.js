const AC_GAME_OBJECTS = [];

export class AcGameObject {
    constructor() {
        AC_GAME_OBJECTS.push(this);  // 将对象添加到数组中
        this.has_called_start = false;  // 是否执行过start函数
        this.timedelta = 0;  // 当前帧距离上一帧的时间差
    }

    start() {  // 只执行一次    
    }

    update() {  // 每帧执行一次
        
    }

    on_destroy() {  // 删除之前执行
    }

    destroy() {  // 删除对象
        this.on_destroy();
        
        for (let i in AC_GAME_OBJECTS) {
            const obj = AC_GAME_OBJECTS[i];
            if (obj === this) {
                AC_GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp;  // 上一帧的时间
const step = timestamp => {
    for (let obj of AC_GAME_OBJECTS) {
        if (!obj.has_called_start) {
            obj.has_called_start = true;
            obj.start();
        } else {
            obj.timedelta = timestamp - last_timestamp;  // 计算当前帧距离上一帧的时间差
            obj.update();
        }
    }
    last_timestamp = timestamp;  // 更新上一帧的时间
    requestAnimationFrame(step);
}

requestAnimationFrame(step);