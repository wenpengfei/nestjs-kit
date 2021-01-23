import { IsString } from 'class-validator'

export class DeleteUniqueDto {
  @IsString()
  id: string
}
