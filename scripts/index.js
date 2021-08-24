import { getColor, Circle, Point, distance, getCount, clamp } from './Circle.js';
let canvas_obj = document.getElementById('a_canvas');
let html_obj = document.getElementById('html_obj');
canvas_obj.width = html_obj.clientWidth;
canvas_obj.height = html_obj.clientHeight;
let circle_arr = [];
let init_offset = 10;
let min_speed = 0;
let mult_speed = 0;
let circle_count = clamp(getCount(canvas_obj.width, canvas_obj.height), 75, 1000);
let threshold = clamp(getCount(canvas_obj.width, canvas_obj.height), 200, 500);
//500C/(2560px/1440px)
for (let i = 0; i < circle_count; i++) {
    let radius = 1 + (Math.random() * 10);
    let velx = Math.random() >= 0.5 ? -min_speed + ((Math.random() - 0.5) * mult_speed) : min_speed + ((Math.random() - 0.5) * mult_speed);
    let vely = Math.random() >= 0.5 ? -min_speed + ((Math.random() - 0.5) * mult_speed) : min_speed + ((Math.random() - 0.5) * mult_speed);
    circle_arr.push(new Circle((radius + init_offset) + (Math.random() * (html_obj.clientWidth - (2 * (radius + init_offset)))), (radius + init_offset) + (Math.random() * (html_obj.clientHeight - (2 * (radius + init_offset)))), radius, velx, vely, getColor()));
}
canvas_obj.addEventListener('click', (e) => {
    let click_position = new Point(e.clientX, e.clientY);
    circle_arr.forEach(circle => {
        let circle_pos = new Point(circle.pos_x, circle.pos_y);
        if (distance(click_position, circle_pos) <= threshold) {
            circle.spreadOutwardFromPoint(click_position);
        }
    });
});
let c = canvas_obj.getContext('2d');
function animate() {
    c.beginPath();
    c.fillStyle = '#0a061310';
    c.fillRect(0, 0, html_obj.clientWidth, html_obj.clientHeight);
    circle_arr.forEach(circle => {
        circle.logic();
        circle.draw(c);
        circle.update(html_obj.clientWidth, html_obj.clientHeight);
    });
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
