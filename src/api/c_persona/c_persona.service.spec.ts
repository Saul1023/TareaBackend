import { Test, TestingModule } from '@nestjs/testing';
import { CPersonaService } from './c_persona.service';

describe('CPersonaService', () => {
  let service: CPersonaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CPersonaService],
    }).compile();

    service = module.get<CPersonaService>(CPersonaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
