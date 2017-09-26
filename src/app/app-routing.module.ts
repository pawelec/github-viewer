import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    { path: 'users/:name', component: UsersComponent },
    { path: 'about', component: AboutComponent},
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
