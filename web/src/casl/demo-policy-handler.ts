import { Action } from 'src/users/action.enum';
import { User } from 'src/users/entities/user.entity';
import { AppAbility } from './casl-ability.factory';
import { IPolicyHandler } from './policy-handler';

export class DemoPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, User); //200
    //return ability.can(Action.Delete, User); //403
  }
}
