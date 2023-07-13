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
exports.MusicPrismaRepository = void 0;
const common_1 = require("@nestjs/common");
const music_entity_1 = require("../../entities/music.entity");
const prisma_service_1 = require("../../../../database/prisma.service");
let MusicPrismaRepository = exports.MusicPrismaRepository = class MusicPrismaRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const music = new music_entity_1.Music();
        Object.assign(music, Object.assign({}, data));
        const newMusic = await this.prisma.music.create({
            data: Object.assign({}, music)
        });
        return newMusic;
    }
    async listMusic() {
        const musics = await this.prisma.music.findMany();
        return musics;
    }
    async ListMusicPerId(id) {
        const findMusic = await this.prisma.music.findFirst({
            where: {
                id: id
            }
        });
        return findMusic;
    }
    async updatedMusic(data, id) {
        const findMusic = await this.prisma.music.findFirst({
            where: { id: id }
        });
        if (!findMusic) {
            throw new common_1.NotFoundException('Music Not found');
        }
        const updatedMusic = await this.prisma.music.update({
            where: { id: findMusic.id },
            data: Object.assign({}, data)
        });
        return updatedMusic;
    }
    async deleteMusic(id) {
        await this.prisma.music.delete({
            where: { id: id }
        });
    }
};
exports.MusicPrismaRepository = MusicPrismaRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MusicPrismaRepository);
//# sourceMappingURL=musicPrisma.repository.js.map