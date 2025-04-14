import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from "class-validator";

export class CreateVehiculoDto {
  @IsNotEmpty()
  @IsString()
  marca: string;

  @IsNotEmpty()
  @IsString()
  modelo: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(10, { message: 'La placa no puede tener más de 10 caracteres' })
  placa: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsInt()
  @Min(1900)
  anio: number;
}
