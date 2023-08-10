import { pool } from "../config/db/db";
import message from "../config/messages";

//Funciones para crear un nuevo usuario referenciada en la base de datos
export const createUser = async (req, res) => {
    try {
        const {productos, bebida} = req.body;
        const result = await pool.query(`INSERT INTO users (productos, bebida) VALUES (?, ?)`,[productos, bebida]);
        res.json(result);        
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}

//Funcion para mirar todos los usuarios de nuestro tabla
export const findAllUsers = async (req, res) => {
    try {
        const [rows] = await pool.query(`SELECT * FROM users`);
        res.json(rows);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}
export const findOneUser = async (req, res) => {
    try {
        const id = req.params.id;
        const [result] = await pool.query(`SELECT id, productos FROM users WHERE id = ${id}`);
        res.send(result[0]);        
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}
export const pingUser = async (req, res) => {
    try {
        const [result] = await pool.query(`SELECT "hola mundo" as RESULT`);
        res.send(result[0]);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}
export const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {productos, bebida} = req.body;
        const result = await pool.query(`UPDATE users SET productos = ?, bebida = ? WHERE id = ?`, [productos, bebida, id]);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}
export const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await pool.query(`DELETE FROM users WHERE id = ${id}`);
        res.send(result);
    } catch (error) {
        message(error.message, "danger");
        res.status(500);
        
    }
}