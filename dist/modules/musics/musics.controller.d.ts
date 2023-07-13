import { MusicsService } from './musics.service';
import { CreateMusicDto } from './dto/create-music.dto';
import { UpdateMusicDto } from './dto/update-music.dto';
export declare class MusicsController {
    private readonly musicsService;
    constructor(musicsService: MusicsService);
    create(createMusicDto: CreateMusicDto): Promise<import("./entities/music.entity").Music>;
    findAll(): Promise<import("./entities/music.entity").Music[]>;
    findOne(id: string): Promise<import("./entities/music.entity").Music>;
    update(id: string, updateMusicDto: UpdateMusicDto): Promise<import("./entities/music.entity").Music>;
    remove(id: string): Promise<void>;
}
