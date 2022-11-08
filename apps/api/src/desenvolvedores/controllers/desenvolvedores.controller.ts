import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateDesenvolvedorDto } from '../services/create-desenvolvedor/dto/create-desenvolvedor.dto';
import { DesenvolvedoresService } from '../services/desenvolvedores.service';
import { FindAllDesenvolvedoresDto } from '../services/find-all-desenvolvedores/dto/find-all-desenvolvedores.dto';
import { UpdateDesenvolvedorDto } from '../services/update-desenvolvedor/dto/update-desenvolvedor.dto';

@Controller('desenvolvedores')
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
)
export class DesenvolvedoresController {
  constructor(
    private readonly desenvolvedoresService: DesenvolvedoresService,
  ) {}

  @Post()
  create(@Body() dto: CreateDesenvolvedorDto) {
    return this.desenvolvedoresService.create(dto);
  }

  @Put(':id')
  update(@Param() id: number, @Body() dto: UpdateDesenvolvedorDto) {
    return this.desenvolvedoresService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.desenvolvedoresService.remove(id);
  }

  @Get()
  findAll(@Query() query: FindAllDesenvolvedoresDto) {
    return this.desenvolvedoresService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.desenvolvedoresService.findOne(id);
  }
}
