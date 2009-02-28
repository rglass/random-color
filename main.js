/*global Math, change_color
*/

/*members backgroundColor, color, floor, getElementById, innerHTML, 
    random, style
*/

/*jslint bitwise: true, browser: true, eqeqeq: true, nomen: true,
  passfail: true, plusplus: true, undef: true, white: true
 */

var change_color = function () {
    var colorfield,
        colorname,
        rgb,
        generate_color,
        generate_rgb;

    generate_color = function ()  {
        return Math.floor(Math.random() * 255 + 1);
    };

    generate_rgb = function () {
        return [generate_color(),
                generate_color(),
                generate_color()];
    };

    colorfield = document.getElementById('colorfield');
    colorname = document.getElementById('colorname');
    rgb = generate_rgb();

    colorfield.style.backgroundColor = 'rgb(' +
        rgb[0] + 
        ', ' +
        rgb[1] +
        ', ' +
        rgb[2] +
        ')';
    colorname.innerHTML = '' +
        rgb[0] +
        ', ' +
        rgb[1] +
        ', ' +
        rgb[2];
    if ((rgb[0] + rgb[1] + rgb[2]) / 3 < 128) {
        colorname.style.color = 'white';
    } else {
        colorname.style.color = 'black';
    }
};