import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { errorResponse, successResponse } from 'src/common/response.helper';

@Controller('vehiculo')
export class VehiculoController {
  constructor(private readonly vehiculoService: VehiculoService) {}

@Get()
  public async index() {
    try {
      const data = await this.vehiculoService.list();
      return successResponse('Lista de vehículos obtenida correctamente', data);
    } catch (error) {
      return errorResponse('Error al obtener la lista de vehículos', error.message);
    }
  }

  @Post()
  public async create(@Body() createPersonaDto: CreateVehiculoDto) {
    try {
      const data = await this.vehiculoService.add(createPersonaDto);
      return successResponse('Vehículo registrado correctamente', data);
    } catch (error) {
      return errorResponse('Error al registrar el vehículo', error.message);
    }
  }

  @Put('/:id')
  public async editar(@Param() { id }, @Body() persona: UpdateVehiculoDto) {
    try {
      const data = await this.vehiculoService.edit(id, persona);
      return successResponse('Vehículo actualizado correctamente', data);
    } catch (error) {
      return errorResponse('Error al actualizar el vehículo', error.message);
    }
  }

  @Delete(':id')
  public async borrar(@Param() { id }) {
    try {
      const data = await this.vehiculoService.delete(id);
      return successResponse('Vehículo eliminado correctamente', data);
    } catch (error) {
      return errorResponse('Error al eliminar el vehículo', error.message);
    }
  }
}
