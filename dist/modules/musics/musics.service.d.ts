import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
import { MusicRepository } from './repository/music.repository';
export declare class MusicsService {
    private musicRepository;
    constructor(musicRepository: MusicRepository);
    create(createMusicDto: CreateMusicDto): Promise<import("./entities/music.entity").Music>;
    findAll(): Promise<import("./entities/music.entity").Music[]>;
    findOne(id: string): Promise<import("./entities/music.entity").Music>;
    update(updateMusicDto: UpdateMusicDto, id: string): Promise<import("./entities/music.entity").Music>;
    remove(id: string): Promise<void>;
}
