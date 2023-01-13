import React from 'react';
import {Socket} from 'socket.io-client';
// import {DefaultEventsMap} from 'socket.io-client/build/typed-events';

// interface ServerToClientEvents {
//   noArg: () => void;
//   basicEmit: (a: number, b: string, c: Buffer) => void;
//   withAck: (d: string, callback: (e: number) => void) => void;
// }

// interface ClientToServerEvents {
//   hello: () => void;
// }

// interface InterServerEvents {
//   ping: () => void;
// }

// interface SocketData {
//   name: string;
//   age: number;
// }

export interface SocketInterface {
  socket: Socket<any, any>;
  setSocket: React.Dispatch<React.SetStateAction<Socket<any, any>>>;
}

export const SocketContext = React.createContext<SocketInterface>(
  {} as SocketInterface,
);
