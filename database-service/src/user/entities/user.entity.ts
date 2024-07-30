import { Column, DataType,  Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Users' })
export class User extends Model<User> {
    @Column({ allowNull: false })
    name: string;

    @Column({ allowNull: false, unique: true })
    email: string;

    @Column
    password: string;

    @Column({
        type: DataType.ENUM('user', 'admin')
    })
    role: string;

    @Column({
        type: DataType.ENUM('active', 'inactive')
    })
    status: string;
}
