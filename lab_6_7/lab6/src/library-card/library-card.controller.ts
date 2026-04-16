import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { LibraryCardService } from './library-card.service';

@Controller()
export class LibraryCardController {
  constructor(private readonly service: LibraryCardService) {}

  @MessagePattern('library-card.create')
  create(
    @Payload()
    payload: { name: string; surname: string; booksTaken: number },
  ) {
    return this.service.create(payload);
  }

  @MessagePattern('library-card.change-books')
  changeBooks(
    @Payload()
    payload: {
      name: string;
      surname: string;
      booksTaken: number;
      delta: number;
    },
  ) {
    return this.service.changeBooks(payload);
  }

  @MessagePattern('library-card.special')
  special(
    @Payload()
    payload: {
      name: string;
      surname: string;
      booksTaken: number;
      cardId: string;
      fine: number;
    },
  ) {
    return this.service.special(payload);
  }
}
