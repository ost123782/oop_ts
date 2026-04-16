import { Module } from '@nestjs/common';
import { LibraryCardController } from './library-card.controller';
import { LibraryCardService } from './library-card.service';

@Module({
  controllers: [LibraryCardController],
  providers: [LibraryCardService],
})
export class LibraryCardModule {}
