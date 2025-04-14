import { Test, TestingModule } from '@nestjs/testing';
import { CPersonaController } from './c_persona.controller';
import { CPersonaService } from './c_persona.service';

describe('CPersonaController', () => {
  let controller: CPersonaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CPersonaController],
      providers: [CPersonaService],
    }).compile();

    controller = module.get<CPersonaController>(CPersonaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
