import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FormsComponent } from './forms/forms.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { FormsBuilderComponent } from './forms-builder/forms-builder.component';
import { NameParentComponent } from './component-interaction/name-parent/name-parent.component';
import { NameChildComponent } from './component-interaction/name-child/name-child.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CustomeDirectiveComponent } from './custom-directive/custome-directive/custome-directive.component';
import { CustomeDirectiveDirective } from './custom-directive/custome-directive.directive';
import { UnlessDirective } from './custom-directive/unless.directive';


const appRoutes: Routes = [
  { path: '', component: ReactiveFormsDemoComponent },
  { path: 'customdirective', component: CustomeDirectiveComponent },
  { path: 'forms', component: FormsComponent },
  { path: '@input_@output', component: NameParentComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    FormsComponent,
    ReactiveFormsDemoComponent,
    FormsBuilderComponent,
    NameParentComponent,
    NameChildComponent,
    CockpitComponent,
    ServerElementComponent,
    CustomeDirectiveComponent,
    CustomeDirectiveDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
