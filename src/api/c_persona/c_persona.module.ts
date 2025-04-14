import { Module } from '@nestjs/common';
import { CPersonaService } from './c_persona.service';
import { CPersonaController } from './c_persona.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from './entities/c_persona.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PersonaEntity])],
  controllers: [CPersonaController],
  providers: [CPersonaService],
})
export class CPersonaModule {}
