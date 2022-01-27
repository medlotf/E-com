import axios from "axios";

const BASE_URL = "http://localhost:9000/api/";

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWNhZDExOWVkMDdlNDBlNjYxYWViMSIsImlzUHJvIjp0cnVlLCJpYXQiOjE2NDMyNDIxOTZ9.t5qUvQOaiPxmLpMCVt4bnmVnBa4llqOYmaexxZ8AQqw"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
});