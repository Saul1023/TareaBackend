import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe, Put } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { errorResponse, successResponse } from 'src/common/response.helper';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Get()
    public index() {
      return this.clienteService.list();
    }
    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async add(@Body() createClienteDTO: CreateClienteDto) {
      try {
        const result = await this.clienteService.add(createClienteDTO);
        return successResponse('Usuario creado correctamente', result);
      } catch (error) {
        return errorResponse('No se pudo crear el usuario', error.message);
      }
    }
    @Post()
    create(@Body() createClienteDTO: CreateClienteDto) {
      return this.clienteService.add(createClienteDTO);
    }
  
    @Put('/:id')
    public editar(@Param() {id},  @Body() persona:UpdateClienteDto){
        return this.clienteService.edit(id,persona);
    }
  
    @Delete(':id')
    public borrar(@Param() {id}) {
      return this.clienteService.delete(id);
    }
}
