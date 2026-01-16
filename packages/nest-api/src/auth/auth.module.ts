import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller.ts";

@Module({
  controllers: [AuthController],
})
class AuthModule {}

export { AuthModule };
