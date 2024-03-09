import { All, Controller } from '@nestjs/common';
import { TrackerService } from './tracker.service';

@Controller('/')
export class TrackerController {
  constructor(private readonly trackerService: TrackerService) {}

  @All()
  async batchWriteToDB() {
    try {
      await this.trackerService.batchWriteToDB();
      console.log('DataSavedLocally');
      return { message: 'Data saved locally successfully' };
    } catch (error) {
      console.error('Error saving data locally:', error);
      return { error: 'Internal Server Error' };
    }
  }
}
