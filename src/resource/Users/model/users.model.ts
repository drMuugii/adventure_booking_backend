import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column({ primaryKey: true })
  id: string;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  birthDate: string;
  @Column
  sex: string;
  @Column
  imgUrl: string;
  @Column
  userName: string;
}
