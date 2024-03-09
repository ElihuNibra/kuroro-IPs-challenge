import { TrackerService } from 'src/tracker/tracker.service';
export declare class ScheduleService {
    private readonly trackerService;
    constructor(trackerService: TrackerService);
    handleCron(): void;
}
