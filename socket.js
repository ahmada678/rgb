import { io } from "socket.io-client";

const socketURL = import.meta.env.VITE_SOCKET_SERVER;

export const socket = io(socketURL);