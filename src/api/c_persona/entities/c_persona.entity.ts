import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity({name :'Persona'})
export class PersonaEntity {
    @ObjectIdColumn()
    _id: ObjectId;

    @Column({length:80})
    nombre:string;

    @Column({length:200})
    apellido:string;
    
    @Column()
    edad: number;
  
    @Column()
    correo: string;
}
