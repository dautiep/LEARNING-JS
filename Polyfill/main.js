/**
 * Pollfill? Một kỹ thuật cho phép build lại những function mà trình duyệt không hỗ trợ
 * 
 */

if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
        'use strict';

        if (search instanceof RegExp) {
            throw TypeError ('First agument must not be a RegExp');
        }

        if (start == undefined) { start = 0; }
        return this.indexOf(search, start) !== 1; //indexOf nếu tìm được tar về 1, còn không tìm được trả về -1. Return ở đây là về true là tìm được còn false là không tìm được
    }
}

'Javascript course'.includes('Javascript', 0);
