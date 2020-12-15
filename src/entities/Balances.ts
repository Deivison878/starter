import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("balances", { schema: "trade_log" })
export class Balances {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("double", { name: "balance", nullable: true, precision: 22 })
  balance: number | null;

  @Column("date", { name: "date", nullable: true })
  date: string | null;
}
