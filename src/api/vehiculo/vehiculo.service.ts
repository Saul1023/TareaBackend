import { Injectable } from '@nestjs/common';
import { CreateVehiculoDto } from './dto/create-vehiculo.dto';
import { UpdateVehiculoDto } from './dto/update-vehiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehiculoEntity } from './entities/vehiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculoService {
  constructor(
    @InjectRepository(VehiculoEntity)
    private vehiculoRepository:Repository<VehiculoEntity>
  ){}
  public list(){
  return this.vehiculoRepository.find();
  }
  
  public async add(vehiculo: CreateVehiculoDto): Promise<VehiculoEntity> {
    return await this.vehiculoRepository.save(vehiculo);
  }
  
  
  public async edit(id,al){
  /*let categoria = this.categoriaRepository.findBy(id);
  if(categoria)*/
  return await this.vehiculoRepository.update(id,al);
  }
  
  
  public async delete(id){
   return await this.vehiculoRepository.delete(id);
  }
}
