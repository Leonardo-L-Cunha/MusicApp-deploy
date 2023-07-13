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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MusicsService = void 0;
const common_1 = require("@nestjs/common");
const music_repository_1 = require("./repository/music.repository");
let MusicsService = exports.MusicsService = class MusicsService {
    constructor(musicRepository) {
        this.musicRepository = musicRepository;
    }
    create(createMusicDto) {
        const music = this.musicRepository.create(createMusicDto);
        return music;
    }
    findAll() {
        const musics = this.musicRepository.listMusic();
        return musics;
    }
    async findOne(id) {
        const music = await this.musicRepository.ListMusicPerId(id);
        if (!music) {
            throw new common_1.NotFoundException('Music not found');
        }
        return music;
    }
    async update(updateMusicDto, id) {
        const music = await this.musicRepository.updatedMusic(updateMusicDto, id);
        return music;
    }
    async remove(id) {
        const findMusic = await this.findOne(id);
        if (!findMusic) {
            throw new common_1.NotFoundException('music not found!');
        }
        this.musicRepository.deleteMusic(id);
    }
};
exports.MusicsService = MusicsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [music_repository_1.MusicRepository])
], MusicsService);
//# sourceMappingURL=musics.service.js.map