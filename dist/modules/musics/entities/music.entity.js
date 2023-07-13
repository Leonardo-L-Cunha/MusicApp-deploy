"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Music = void 0;
const crypto_1 = require("crypto");
class Music {
    constructor() {
        this.id = (0, crypto_1.randomUUID)();
    }
}
exports.Music = Music;
//# sourceMappingURL=music.entity.js.map