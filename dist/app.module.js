"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const tracker_middleware_1 = require("./middleware/tracker.middleware");
const schedule_1 = require("@nestjs/schedule");
const core_1 = require("@nestjs/core");
const tracker_service_1 = require("./tracker/tracker.service");
const prisma_service_1 = require("./Prisma/prisma.service");
const timer_service_1 = require("./timer/timer.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [schedule_1.ScheduleModule.forRoot()],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: tracker_middleware_1.TrackingMiddleware,
            },
            tracker_service_1.TrackerService,
            prisma_service_1.PrismaService,
            timer_service_1.ScheduleService,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map