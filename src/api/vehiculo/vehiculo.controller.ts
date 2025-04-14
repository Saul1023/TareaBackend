import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

  @Get()
  public index() {
    return this.vehiculoService.list();
  }

  @Post()
  create(@Body() createPersonaDto: CreateVehiculoDto) {
    return this.vehiculoService.add(createPersonaDto);
  }

  @Put('/:id')
  public editar(@Param() {id},  @Body() persona:UpdateVehiculoDto){
      return this.vehiculoService.edit(id,persona);
  }

  @Delete(':id')
  public borrar(@Param() {id}) {
    return this.vehiculoService.delete(id);
  }
}
