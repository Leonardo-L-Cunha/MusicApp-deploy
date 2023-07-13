"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicsController = void 0;
const common_1 = require("@nestjs/common");
const musics_service_1 = require("./musics.service");
const create_music_dto_1 = require("./dto/create-music.dto");
const update_music_dto_1 = require("./dto/update-music.dto");
let MusicsController = exports.MusicsController = class MusicsController {
    constructor(musicsService) {
        this.musicsService = musicsService;
    }
    create(createMusicDto) {
        return this.musicsService.create(createMusicDto);
    }
    findAll() {
        return this.musicsService.findAll();
    }
    findOne(id) {
        return this.musicsService.findOne(id);
    }
    update(id, updateMusicDto) {
        return this.musicsService.update(updateMusicDto, id);
    }
    remove(id) {
        return this.musicsService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_music_dto_1.CreateMusicDto]),
    __metadata("design:returntype", void 0)
], MusicsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MusicsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MusicsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_music_dto_1.UpdateMusicDto]),
    __metadata("design:returntype", void 0)
], MusicsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MusicsController.prototype, "remove", null);
exports.MusicsController = MusicsController = __decorate([
    (0, common_1.Controller)('musics'),
    __metadata("design:paramtypes", [musics_service_1.MusicsService])
], MusicsController);
//# sourceMappingURL=musics.controller.js.map