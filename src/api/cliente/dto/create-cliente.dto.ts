import { IsEmail, IsInt, IsOptional, IsString, Matches, MaxLength, Min } from "class-validator";

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
    @Matches(/^\d{7,15}$/, { message: 'El teléfono debe contener solo números y tener entre 7 y 15 dígitos' })
    telefono?: string;
  
    @IsOptional()
    @IsString()
    @MaxLength(255)
    direccion?: string;
}
