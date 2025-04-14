import { Injectable } from '@nestjs/common';
import { CreateCPersonaDto } from './dto/create-c_persona.dto';
import { UpdateCPersonaDto } from './dto/update-c_persona.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/c_persona.entity';
import { Repository } from 'typeorm';
import { errorResponse, successResponse } from 'src/common/response.helper';

@Injectable()
export class CPersonaService {
  constructor(
    @InjectRepository(PersonaEntity)
    private personaRepository: Repository<PersonaEntity>,
  ) {}

  async crearPersona(nombre: string, apellido: string, edad: number, correo: string) {
    try {
      const nuevaPersona = this.personaRepository.create({
        nombre,
        apellido,
        edad,
        correo,
      });

      const saved = await this.personaRepository.save(nuevaPersona);
      return successResponse('Usuario creado correctamente', saved);
    } catch (error) {
      return errorResponse('No se pudo crear el usuario', error.message);
    }
  }

  async list() {
    try {
      const personas = await this.personaRepository.find();
      return successResponse('Lista de personas obtenida correctamente', personas);
    } catch (error) {
      return errorResponse('No se pudo obtener la lista de personas', error.message);
    }
  }

  async add(data: CreateCPersonaDto) {
    try {
      const persona = this.personaRepository.create(data);
      const saved = await this.personaRepository.save(persona);
      return saved;
    } catch (error) {
      return errorResponse('No se pudo crear el usuario', error.message);
    }
  }


  async edit(id: number, data: UpdateCPersonaDto) {
    try {
      const result = await this.personaRepository.update(id, data);
      return result.affected
        ? successResponse('Usuario actualizado correctamente', { id, ...data })
        : errorResponse('No se encontró el usuario para actualizar', { id });
    } catch (error) {
      return errorResponse('No se pudo actualizar el usuario', error.message);
    }
  }

  async delete(id: number) {
    try {
      const result = await this.personaRepository.delete(id);
      return result.affected
        ? successResponse('Usuario eliminado correctamente', { id })
        : errorResponse('No se encontró el usuario para eliminar', { id });
    } catch (error) {
      return errorResponse('No se pudo eliminar el usuario', error.message);
    }
  }
}
