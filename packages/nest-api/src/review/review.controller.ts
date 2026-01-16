import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ReviewModel } from "./review.model.ts";

@Controller("review")
class ReviewController {
  @HttpCode(201)
  @Post("create")
  async create(@Body() dto: Omit<ReviewModel, "_id">) {

  }

  @Delete(":id")
  async delete(@Param("id") id: string) {

  }

  @Get("byProduct/:productId")
  async getByproduct(@Param("productId") productId: string) {

  }
}

export { ReviewController };
