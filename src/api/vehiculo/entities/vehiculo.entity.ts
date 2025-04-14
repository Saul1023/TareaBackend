import { Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";
@Entity({name :'Vehiculo'})
export class VehiculoEntity {
     @ObjectIdColumn()
        _id: ObjectId;
        @Column()
        marca: string;
      
        @Column()
        modelo: string;
      
        @Column()
        placa: string;
      
        @Column()
        color: string;
      
        @Column()
        anio: number;
}
