import { All, Controller } from '@nestjs/common';
import { TrackerService } from './tracker.service';

@Controller('/')
export class TrackerController {
  constructor(private trackerService: TrackerService) {}

  @All()
  async batchWriteToDB() {
    try {
      await this.trackerService.batchWriteToDB();
      console.log('Request Handled');
      return { message: 'Request Handled Sucessfully' };
    } catch (error) {
      console.error('Error saving data locally:', error);
      return { error: 'Internal Server Error' };
    }
  }
}
