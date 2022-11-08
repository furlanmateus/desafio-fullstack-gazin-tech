import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['nivel'])
export class Nivel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nivel: string;
}
