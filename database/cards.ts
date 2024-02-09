import { cache } from 'react';
import { Products } from '../migrations/00000-createTableProducts';
import { sql } from './connect';

export const getCardsInsecure = cache(async () => {
  const cards = await sql<Card[]>`
    SELECT
      *
    FROM
      cards
  `;

  return cards;
});

export const getCardInsecure = cache(async (id: number) => {
  const [card] = await sql<Card[]>`
    SELECT
      *
    FROM
      cards
    WHERE
      id = ${id}
  `;

  return card;
});

export const createCardInsecure = cache(
  async (newProduct: Omit<Card, 'id'>) => {
    const [card] = await sql<Card[]>`
      INSERT INTO
        cards (
          product_name,
          product_description,
          price
        )
      VALUES
        (
          ${newProduct.productName},
          ${newProduct.productDescription},
          ${newProduct.price}
        )
      RETURNING
        cards.*
    `;

    return card;
  },
);

export const updateCardInsecure = cache(async (updatedCard: Card) => {
  const [card] = await sql<Card[]>`
    UPDATE cards
    SET
      product_name = ${updatedCard.productName},
      product_description = ${updatedCard.productDescription},
      price = ${updatedCard.price}
    WHERE
      id = ${updatedCard.id}
    RETURNING
      cards.*
  `;

  return card;
});

export const deleteCardInsecure = cache(async (id: number) => {
  const [card] = await sql<Card[]>`
    DELETE FROM cards
    WHERE
      id = ${id}
    RETURNING
      cards.*
  `;

  return card;
});
