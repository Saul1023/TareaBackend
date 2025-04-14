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
    private personaRepository:Repository<VehiculoEntity>
){}
public list(){
  return this.personaRepository.find();
  }
  
  public async add(al){
  return await this.personaRepository.save(al);
  }
  
  public async edit(id,al){
  /*let categoria = this.categoriaRepository.findBy(id);
  if(categoria)*/
  return await this.personaRepository.update(id,al);
  }
  
  
  public async delete(id){
   return await this.personaRepository.delete(id);
  }
}
