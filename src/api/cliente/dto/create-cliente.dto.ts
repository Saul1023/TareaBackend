import { IsEmail, IsInt, IsOptional, IsString, MaxLength, Min } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MaxLength(100)
    nombre: string;
  
    @IsString()
    @MaxLength(100)
    apellido: string;
  
    @IsInt()
    @Min(0)
    edad: number;
  
    @IsEmail()
    correo: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(15)
    telefono?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(255)
    direccion?: string;
}
