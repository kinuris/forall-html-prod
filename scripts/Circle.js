export class Circle {
    constructor(pos_x, pos_y, rad, velx, vely, color_str) {
        this.pos_x = pos_x;
        this.pos_y = pos_y;
        this.vel_x = velx;
        this.vel_y = vely;
        this.radius = rad;
        this.color = color_str;
    }
    logic() {
        this.pos_x += this.vel_x;
        this.pos_y += this.vel_y;
    }
    update(max_x, max_y) {
        if (this.pos_x + this.radius > max_x || this.pos_x - this.radius < 0)
            this.vel_x = -this.vel_x;
        else if (this.pos_y + this.radius > max_y || this.pos_y - this.radius < 0)
            this.vel_y = -this.vel_y;
    }
    reverseTrajectory() {
        this.vel_x = -this.vel_x;
        this.vel_y = -this.vel_y;
    }
    calcApproaching(cursor) {
        this.approaching = distance(cursor, new Point(this.pos_x, this.pos_y)) > distance(cursor, new Point(this.pos_x + this.vel_x, this.pos_y + this.vel_y));
    }
    randomizeVelocity() {
        let randomizer = (Math.random() - 0.5);
        let randomizer2 = (Math.random() - 0.5);
        this.vel_x = this.vel_x + randomizer;
        this.vel_y = this.vel_y + randomizer2;
    }
    spreadOutwardFromPoint(point, intensity) {
        if (distance(point, new Point(this.pos_x, this.pos_y)) < intensity) {
            let x_diff = (point.x - this.pos_x);
            let y_diff = (point.y - this.pos_y);
            let dist_of_points = Math.hypot(x_diff, y_diff);
            let y_component = (this.pos_y - point.y) / dist_of_points;
            let x_component = (this.pos_x - point.x) / dist_of_points;
            let distanceRatio = clamp(dist_of_points / intensity, 0.2, 1);
            this.vel_x = x_component * distanceRatio; // clamp(x_component * 2, -1, 1)
            this.vel_y = y_component * distanceRatio; // clamp(y_component * 2, -1, 1)
        }
    }
    draw(context) {
        context.beginPath();
        context.arc(this.pos_x, this.pos_y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }
}
export function getColor() {
    return "hsl(" + 360 * Math.random() + ',' +
        (25 + 70 * Math.random()) + '%,' +
        (85 + 10 * Math.random()) + '%)';
}
export function distance(first_point, second_point) {
    return Math.hypot(first_point.x - second_point.x, first_point.y - second_point.y);
    // return Math.sqrt(Math.pow((first_point.x - second_point.x), 2) + Math.pow((first_point.y - second_point.y), 2))
}
export class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
export function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
export function getCount(x_dim, y_dim) {
    let scale = (x_dim * y_dim) / (2560 * 1300);
    let count = scale * 500;
    return count;
}
