import { Module } from "@nestjs/common";
import { TopPageController } from "./top-page.controller.ts";

@Module({
  controllers: [TopPageController],
})
class TopPageModule {}

export { TopPageModule };
