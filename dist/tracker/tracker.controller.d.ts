import { TrackerService } from './tracker.service';
export declare class TrackerController {
    private trackerService;
    constructor(trackerService: TrackerService);
    batchWriteToDB(): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    }>;
}
