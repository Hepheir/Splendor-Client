import { io } from "socket.io-client";


const host = 'localhost';
const port = '5000';

const socket = io(`ws://${host}:${port}`, {
    autoConnect: false,
    cors: {
        origin: "*",
    },
});


export default socket;
