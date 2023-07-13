import { MusicRepository } from '../music.repository';
import { CreateMusicDto } from '../../dto/create-music.dto';
import { UpdateMusicDto } from '../../dto/update-music.dto';
import { Music } from '../../entities/music.entity';
import { PrismaService } from 'src/database/prisma.service';
export declare class MusicPrismaRepository implements MusicRepository {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateMusicDto): Promise<Music>;
    listMusic(): Promise<Music[]>;
    ListMusicPerId(id: string): Promise<Music>;
    updatedMusic(data: UpdateMusicDto, id: string): Promise<Music>;
    deleteMusic(id: string): Promise<void>;
}
