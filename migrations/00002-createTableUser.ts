import { Sql } from 'postgres';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  postcode: number;
  mail: string;
};

export async function up(sql: Sql) {
  await sql`
		CREATE TABLE users (
		id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
		firstName varchar(70) NOT NULL,
		lastName varchar(70) NOT NULL,
 		address varchar(100) NOT NULL,
 		postcode integer NOT NULL,
 		mail varchar(70) NOT NULL
		)
	`;
}

export async function down(sql: Sql) {
  await sql`DROP TABLE users`;
}
