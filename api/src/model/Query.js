import { pool } from '../config/database.js';

class Query {
    static render = async (query) => {
        const [datas] = await pool.execute(query);
        return datas;
    }

    static renderWithValues = async (query, values) => {
        try {
            const [data] = await pool.execute(query, values);
            return data;
        } catch (error) {
            console.error(`Error executing query "${query}" with values ${JSON.stringify(values)}:`, error);
            throw error;
        }
    }

    static insert = async (query, values) => {
        await pool.execute(query, values);
    }
}

export default Query;