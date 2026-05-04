import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
export interface ResultRow {
    id: string;
    lab: 'lab8' | 'lab9';
    operation: string;
    title: string | null;
    inputs: unknown;
    output: unknown;
    createdAt: string | Date;
}
export declare class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
    private readonly logger;
    server: Server;
    handleConnection(client: Socket): void;
    handleDisconnect(client: Socket): void;
    broadcastResultCreated(result: ResultRow): void;
    broadcastResultDeleted(payload: {
        id: string;
        lab: 'lab8' | 'lab9';
    }): void;
}
