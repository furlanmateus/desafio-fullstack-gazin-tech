import { Sexo } from 'src/common/enums/sexo.enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Nivel } from '../../niveis/entities/nivel.entity';

@Entity()
export class Desenvolvedor {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Nivel, {
    nullable: false,
    createForeignKeyConstraints: false,
  })
  @JoinColumn()
  nivel: Nivel;

  @Column()
  nome: string;

  @Column({
    type: 'enum',
    enum: Sexo,
  })
  sexo: Sexo;

  @Column({ type: 'date' })
  dataNascimento: Date;

  @Column()
  idade: number;

  @Column()
  hobby: string;
}
