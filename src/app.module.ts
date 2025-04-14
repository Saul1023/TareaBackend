import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CPersonaModule } from './api/c_persona/c_persona.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonaEntity } from './api/c_persona/entities/c_persona.entity';
import { VehiculoModule } from './api/vehiculo/vehiculo.module';
import { ClienteModule } from './api/cliente/cliente.module';
import { VehiculoEntity } from './api/vehiculo/entities/vehiculo.entity';

@Module({
  imports: [CPersonaModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      logging:true,
      autoLoadEntities: true,
      /*username: 'root',
      password: 'root',*/
      database: 'backend',
      entities: [PersonaEntity,VehiculoEntity],
      synchronize: true, //cuando este en produccion debe estar false.
    }),
    CPersonaModule,
    VehiculoModule,
    ClienteModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
