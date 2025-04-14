import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CPersonaService } from './c_persona.service';
import { CreateCPersonaDto } from './dto/create-c_persona.dto';
import { UpdateCPersonaDto } from './dto/update-c_persona.dto';
import { errorResponse, successResponse } from 'src/common/response.helper';

@Controller('persona')
export class CPersonaController {
  constructor(private cPersonaService: CPersonaService) {}

  @Get()
  public index() {
    return this.cPersonaService.list();
  }
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async add(@Body() createCPersonaDto: CreateCPersonaDto) {
    try {
      const result = await this.cPersonaService.add(createCPersonaDto);
      return successResponse('Usuario creado correctamente', result);
    } catch (error) {
      return errorResponse('No se pudo crear el usuario', error.message);
    }
  }
  @Post()
  create(@Body() createPersonaDto: CreateCPersonaDto) {
    return this.cPersonaService.add(createPersonaDto);
  }

  @Put('/:id')
  public editar(@Param() {id},  @Body() persona:UpdateCPersonaDto){
      return this.cPersonaService.edit(id,persona);
  }

  @Delete(':id')
  public borrar(@Param() {id}) {
    return this.cPersonaService.delete(id);
  }
}
