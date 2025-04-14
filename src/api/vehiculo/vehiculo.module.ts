import { Module } from '@nestjs/common';
import { VehiculoService } from './vehiculo.service';
import { VehiculoController } from './vehiculo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VehiculoEntity } from './entities/vehiculo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VehiculoEntity])],
  controllers: [VehiculoController],
  providers: [VehiculoService],
})
export class VehiculoModule {}
