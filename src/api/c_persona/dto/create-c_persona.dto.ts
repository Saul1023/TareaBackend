import { IsEmail, IsInt, IsNotEmpty, IsString, Min } from "class-validator";
import { UpdateCPersonaDto } from "./update-c_persona.dto"
export type newDto = Omit<UpdateCPersonaDto,'id'>; 
export class CreateCPersonaDto {
    @IsNotEmpty()
    @IsString()
    nombre: string;
  
    @IsNotEmpty()
    @IsString()
    apellido: string;
  
    @IsInt()
    @Min(0, { message: 'edad must not be less than 0' })
    edad: number;
  
    @IsNotEmpty()
    @IsEmail()
    correo: string;
}
