import { TrackerService } from './tracker.service';
export declare class TrackerController {
    private readonly trackerService;
    constructor(trackerService: TrackerService);
    batchWriteToDB(): Promise<{
        message: string;
        error?: undefined;
    } | {
        error: string;
        message?: undefined;
    }>;
}
