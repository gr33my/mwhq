const db = require('../db/connection');

class MWHQModel {
    async create(data) {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = 'INSERT INTO example_table SET ?';
            const result = await conn.query(query, data);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }

    async findAll() {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = 'SELECT * FROM example_table';
            const rows = await conn.query(query);
            return rows;
        } finally {
            if (conn) conn.release();
        }
    }

    async findById(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = 'SELECT * FROM example_table WHERE id = ?';
            const rows = await conn.query(query, [id]);
            return rows[0];
        } finally {
            if (conn) conn.release();
        }
    }

    async update(id, data) {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = 'UPDATE example_table SET ? WHERE id = ?';
            const result = await conn.query(query, [data, id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }

    async delete(id) {
        let conn;
        try {
            conn = await pool.getConnection();
            const query = 'DELETE FROM example_table WHERE id = ?';
            const result = await conn.query(query, [id]);
            return result;
        } finally {
            if (conn) conn.release();
        }
    }
}

module.exports = new MWHQModel();