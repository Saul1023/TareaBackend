import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteEntity } from './entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ClienteService {

  constructor(
    @InjectRepository(ClienteEntity)
    private clienteRepository: Repository<ClienteEntity>,
  ) {}

  public list(){
    return this.clienteRepository.find();
    }
    
    public async add(al){
    return await this.clienteRepository.save(al);
    }
    
    public async edit(id,al){
    /*let categoria = this.categoriaRepository.findBy(id);
    if(categoria)*/
    return await this.clienteRepository.update(id,al);
    }
    
    
    public async delete(id){
     return await this.clienteRepository.delete(id);
    }
}
