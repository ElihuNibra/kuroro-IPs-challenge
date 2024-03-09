import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/Prisma/prisma.service';
@Injectable()
export class TrackerService {
  private readonly userData = [];
  constructor(private prisma: PrismaService) {}
  saveData(userId: string, userIp: string) {
    this.userData.push({ userId, userIp });
  }
  async batchWriteToDB() {
    const uniquePairs = Array.from(
      new Set(this.userData.map((item) => JSON.stringify(item))),
    );

    const writePromises = uniquePairs.map(async (item) => {
      const { userId, userIP } = JSON.parse(item);
      await this.prisma.tracked.create({
        data: {
          userId,
          ipAddress: userIP,
        },
      });
    });

    await Promise.all(writePromises);
    this.userData.length = 0;
  }
}
