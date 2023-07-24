import { Module } from '@nestjs/common';
import { CardsService } from './cards.service';
import { CardsController } from './cards.controller';
import { DatabaseModule } from '../database/database.module';
import { DecksService } from './decks/decks.service';
import { DecksController } from './decks/decks.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [CardsController, DecksController],
  providers: [CardsService, DecksService],
})
export class CardsModule {}