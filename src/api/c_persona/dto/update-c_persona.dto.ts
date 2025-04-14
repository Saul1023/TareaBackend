import { PartialType } from '@nestjs/mapped-types';
import { CreateCPersonaDto } from './create-c_persona.dto';

export class UpdateCPersonaDto extends PartialType(CreateCPersonaDto) {}
