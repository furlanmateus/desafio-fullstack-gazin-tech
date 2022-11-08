import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CustomTypeOrmErrorMessage } from 'src/common/decorators/custom-typeorm-error-message.decorator';
import { CustomTypeOrmErrorMessageInterceptor } from 'src/common/interceptors/custom-typeorm-error-message.interceptor';
import { Messages } from 'src/common/messages';
import { CreateNivelDto } from '../services/create-nivel/dto/create-nivel.dto';
import { FindAllNiveisDto } from '../services/find-all-niveis/dto/find-all-niveis.dto';
import { NiveisService } from '../services/niveis.service';
import { UpdateNivelDto } from '../services/update-nivel/dto/update-nivel.dto';

@Controller('niveis')
@UsePipes(
  new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
  }),
)
export class NiveisController {
  constructor(private readonly niveisService: NiveisService) {}

  @Post()
  @UseInterceptors(CustomTypeOrmErrorMessageInterceptor)
  @CustomTypeOrmErrorMessage({
    errorCode: 'ER_DUP_ENTRY',
    message: Messages.MESSAGE_NIVEL_EXIST,
    newThrow: BadRequestException,
  })
  create(@Body() dto: CreateNivelDto) {
    return this.niveisService.create(dto);
  }

  @Put(':id')
  @UseInterceptors(CustomTypeOrmErrorMessageInterceptor)
  @CustomTypeOrmErrorMessage({
    errorCode: 'ER_DUP_ENTRY',
    message: Messages.MESSAGE_NIVEL_EXIST,
    newThrow: BadRequestException,
  })
  update(@Param('id') id: number, @Body() dto: UpdateNivelDto) {
    return this.niveisService.update(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.niveisService.remove(id);
  }

  @Get()
  findAll(@Query() query: FindAllNiveisDto) {
    return this.niveisService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.niveisService.findOne(id);
  }
}
