
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanDeactivate } from '@angular/router';

import { NameParentComponent } from './component-interaction/name-parent/name-parent.component';
import { FormsComponent } from './forms/forms.component';
import { CustomeDirectiveComponent } from './custom-directive/custome-directive/custome-directive.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './guard/can-deactivate-guard';
import { AuthGuard } from './guard/auth.guard.service';

const appRoutes: Routes = [
    { path: '', component: ReactiveFormsDemoComponent },
    { path: 'customdirective', component: CustomeDirectiveComponent },
    { path: 'forms', canDeactivate: [CanDeactivateGuard], component: FormsComponent },
    { path: '@input_@output', canActivate: [AuthGuard], component: NameParentComponent },
    { path: 'pagenotfound', component: PageNotFoundComponent },
    { path: '**', redirectTo: 'pagenotfound' }
];
@NgModule({

    imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
    // imports: [RouterModule.forRoot(appRoutes, { useHash: true })],

    exports: [RouterModule]
})
export class AppRoutingModule {

}
