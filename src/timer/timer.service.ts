import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { TrackerService } from 'src/tracker/tracker.service';

@Injectable()
export class ScheduleService {
  constructor(private readonly trackerService: TrackerService) {}

  @Cron(CronExpression.EVERY_MINUTE)
  handleCron() {
    this.trackerService.batchWriteToDB();
  }
}
