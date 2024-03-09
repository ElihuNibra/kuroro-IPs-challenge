import { PrismaService } from 'src/Prisma/prisma.service';
export declare class TrackerService {
    private prisma;
    private readonly userData;
    constructor(prisma: PrismaService);
    saveData(userId: string, userIp: string): void;
    batchWriteToDB(): Promise<void>;
}
