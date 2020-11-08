import {
  dropTable,
  createTables,
  insertIntoTables
} from '../src/utils/queryFunctions';

before(async () => {
  await createTables();
  await insertIntoTables();
});

after(async () => {
  await dropTable();
});
