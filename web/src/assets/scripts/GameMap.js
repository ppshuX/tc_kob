import { AcGameObject } from './AcGameObject.js'
import { Wall } from './Wall.js'

export class GameMap extends AcGameObject {
    constructor(ctx, parent) {
        super();
        this.ctx = ctx;  // 画布
        this.parent = parent;  // 父元素

        this.L = 0;
        this.rows = 13;
        this.cols = 13;

        this.inner_walls_count = 25;
        this.walls = [];
    }

    check_connected(g, sx, sy, tx, ty) {  // 判断是否连通
        if (sx == tx && sy == ty) return true;  // 如果起点和终点相同，则返回true
        g[sx][sy] = true;  // 标记起点为已访问

        let dx = [0, 1, 0, -1], dy = [1, 0, -1, 0];  // 四个方向
        for (let i = 0; i < 4; i ++) {
            let x = sx + dx[i], y = sy + dy[i];
            if (!g[x][y] && this.check_connected(g, x, y, tx, ty)) return true;  // 如果下一个点没有被访问过，则继续递归
        }

        return false;
    }

    create_walls() {  
        const g = [];

        // 初始化地图
        for (let r = 0; r < this.rows; r++) {
            g[r] = [];
            for (let c = 0; c < this.cols; c++) {
                g[r][c] = false;
            }
        }

        // 给四周加上墙
        for (let c = 0; c < this.cols; c++) {
            g[0][c] = g[this.rows - 1][c] = true;
        }
        for (let r = 0; r < this.rows; r++) {
            g[r][0] = g[r][this.cols - 1] = true;
        }

        for (let i = 0; i < this.inner_walls_count / 2; i ++) {
            for (let j = 0 ; j < 1000; j ++) {
                let r = parseInt(Math.random() * this.rows);
                let c = parseInt(Math.random() * this.cols);

                if (g[r][c] || g[c][r])  continue;

                if (r == this.rows - 2 && c == 1 || r == 1 && c == this.cols - 2) continue;  // 不能覆盖起始位置
                
                g[r][c] = g[c][r] = true;  // 设置为墙
                break;
            }
        }

        // 两条蛇必须要能连通（不连通就重新生成）
        const copy_g = JSON.parse(JSON.stringify(g));
        if (!this.check_connected(copy_g, this.rows - 2, 1, 1, this.cols - 2)) return false;
        

        for (let r = 0; r < this.rows; r++) {
            for (let c = 0; c < this.cols; c++) {
                if (g[r][c]) {
                    this.walls.push(new Wall(r, c, this));
                }
            }
        }
        return true;
    }

    start() {
        for (let i = 0; i < 1000; i++) {
            if (this.create_walls()) {
                break;
            }
        }
    }

    update_size() {
        this.L = parseInt(Math.min(this.parent.clientWidth / this.cols, this.parent.clientHeight / this.rows));
        this.ctx.canvas.width = this.L * this.cols;
        this.ctx.canvas.height = this.L * this.rows;
    }

    update() {
        this.update_size();
        this.render();
    }

    render() {
        const color_even = "#AAD751", color_odd = "#A2D149";
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                if ((row + col) % 2 == 0) {
                    this.ctx.fillStyle = color_even;
                } else {
                    this.ctx.fillStyle = color_odd;
                }
                this.ctx.fillRect(col * this.L, row * this.L, this.L, this.L);
            }
        }
    }
}

