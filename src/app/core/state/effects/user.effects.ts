// user.effects.ts

import { Injectable } from '@angular/core';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import * as UserActions from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { ActionCreator } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

@Injectable()
export class UserEffects {
    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers),
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map((users) => UserActions.loadUsersSuccess({ users })),
                    catchError((error) => EMPTY)
                )
            )
        )
    );

    constructor(private actions$: Actions, private userService: UserService) { }
}
function createEffect(arg0: () => any) {
    throw new Error('Function not implemented.');
}

function ofType(loadUsers: ActionCreator<"[User] Load Users", () => TypedAction<"[User] Load Users">>): any {
    throw new Error('Function not implemented.');
}

