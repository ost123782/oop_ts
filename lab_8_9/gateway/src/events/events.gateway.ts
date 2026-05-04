import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
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

@WebSocketGateway({ cors: { origin: true, credentials: true } })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(EventsGateway.name);

  @WebSocketServer()
  server!: Server;

  handleConnection(client: Socket) {
    this.logger.log(`client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`client disconnected: ${client.id}`);
  }

  broadcastResultCreated(result: ResultRow) {
    this.server.emit('result.created', result);
  }

  broadcastResultDeleted(payload: { id: string; lab: 'lab8' | 'lab9' }) {
    this.server.emit('result.deleted', payload);
  }
}
