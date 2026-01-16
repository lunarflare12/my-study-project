import { Module } from "@nestjs/common";
import { ReviewController } from "./review.controller.ts";

@Module({
  controllers: [ReviewController],
})
class ReviewModule {}

export { ReviewModule };
