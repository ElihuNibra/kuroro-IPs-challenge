import { Module } from '@nestjs/common';
import { TrackerController } from './tracker.controller';
import { TrackerService } from './tracker.service';
import { PrismaModule } from 'src/Prisma/prisma.module';

@Module({
  controllers: [TrackerController],
  providers: [TrackerService],
  imports: [PrismaModule],
})
export class TrackerModule {}
