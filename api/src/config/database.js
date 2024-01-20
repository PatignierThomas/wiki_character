import mysql from 'mysql2/promise';
import "dotenv/config";

const dotenv = process.env;

export const pool = mysql.createPool({
    host: dotenv.DB_HOST,
    database: dotenv.DB_NAME,
    user: dotenv.DB_USER,
    password: dotenv.DB_PASS,
    waitForConnections: true, // on attend que la connexion soit disponible
    connectionLimit: 10, // nombre de connexions maximum
    queueLimit: 0  // nombre de connexions maximum dans la file d'attente
});


