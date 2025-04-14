import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
@Entity({name :'Cliente'})
export class ClienteEntity {
    @ObjectIdColumn()
    _id: ObjectId;
    @Column({ type: 'varchar', length: 100 })
    nombre: string;
    
    @Column({ type: 'varchar', length: 100 })
    apellido: string;
  
    @Column({ type: 'int', unsigned: true })
    edad: number;
  
    @Column({ type: 'varchar', length: 255, unique: true })
    correo: string;
  
    @Column({ type: 'varchar', length: 15, nullable: true })
    telefono?: string;
  
    @Column({ type: 'text', nullable: true })
    direccion?: string;
}
