import { Sql } from 'postgres';

const products = [
  {
    id: 1,
    name: 'Lorcana',
    type: 'Cards',
    price: 129.99,
    currency: 'EUR',
  },
  {
    id: 2,
    name: 'Pokemon',
    type: 'Cards',
    price: 59.99,
    currency: 'EUR',
  },
  {
    id: 3,
    name: 'One Piece',
    type: 'Cards',
    price: 99.99,
    currency: 'EUR',
  },
  {
    id: 4,
    name: 'Star Wars',
    type: 'Cards',
    price: 19.99,
    currency: 'EUR',
  },
];

export async function up(sql: Sql) {
  for (const product of products) {
    await sql`
      INSERT INTO
        products (name, type, price, currency)
      VALUES
        (
          ${product.name},
          ${product.type},
          ${product.price},
          ${product.currency}
        )
    `;
  }
}

export async function down(sql: Sql) {
  for (const product of products) {
    await sql`
      DELETE FROM products
      WHERE
        id = ${product.id}
    `;
  }
}
