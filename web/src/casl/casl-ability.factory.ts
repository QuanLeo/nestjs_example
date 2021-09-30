import { User } from 'src/users/entities/user.entity';
import {
  Ability,
  InferSubjects,
  AbilityClass,
  AbilityBuilder,
  ExtractSubjectType,
} from '@casl/ability';
import { Action } from '../users/action.enum';
import { UserRoles } from 'src/users/user.roles';

type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[Action, Subjects]>;
export class CaslAbilityFactory {
  createForUser(user: User) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    if (user.role === UserRoles.ADMIN) {
      can(Action.Manage, 'all'); // read-write access to everything
    } else {
      can(Action.Read, 'all'); // read-only access to everything
    }

    can(Action.Update, User, { id: user.id });
    cannot(Action.Delete, User, { id: user.id });

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (object) =>
        object.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
