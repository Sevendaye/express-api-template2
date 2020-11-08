export const createMessageTable = `
DROP TABLE IF EXISTS messages2;
CREATE TABLE IF NOT EXISTS messages2(
    id SERIAL PRIMARY KEY,
    name VARCHAR DEFAULT '',
    message VARCHAR NOT NULL
)`;

export const insertMessages = `
INSERT INTO messages2(name,message)
VALUES ('dom', 'message 1'),
        ('toto', 'message 2')`;

export const dropMessagesTable = 'DROP TABLE messages2';
