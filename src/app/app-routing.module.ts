import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: 'users/:name', component: UsersComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}