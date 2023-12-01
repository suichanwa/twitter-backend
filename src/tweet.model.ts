import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Tweet extends Document {
  @Prop()
  text: string;

  @Prop()
  user: string;

  @Prop()
  likes: number;

}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
