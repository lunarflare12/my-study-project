import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypegooseModule } from "nestjs-typegoose";
import { AppController } from "./app.controller.ts";
import { AppService } from "./app.service.ts";
import { AuthModule } from "./auth/auth.module.ts";
import { getMongoConfig } from "./configs/mongo.config.ts";
import { ProductModule } from "./product/product.module.ts";
import { ReviewModule } from "./review/review.module.ts";
import { TopPageModule } from "./top-page/top-page.module.ts";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
class AppModule {}

export { AppModule };
