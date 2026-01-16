import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller.ts";

@Module({
  controllers: [ProductController],
})
class ProductModule {}

export { ProductModule };
