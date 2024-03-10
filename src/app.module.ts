import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TrackingMiddleware } from './middleware/tracker.middleware';
import { ScheduleModule } from '@nestjs/schedule';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TrackerService } from './tracker/tracker.service';
import { PrismaService } from './Prisma/prisma.service';
import { ScheduleService } from './timer/timer.service';
import { TrackerModule } from './tracker/tracker.module';

@Module({
  imports: [ScheduleModule.forRoot(), TrackerModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TrackingMiddleware,
    },
    TrackerService,
    PrismaService,
    ScheduleService,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(TrackingMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
