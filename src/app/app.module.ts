import { CanDeactivateGuard } from './guard/can-deactivate-guard';
import { AuthGuard } from './guard/auth.guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

import { AppRoutingModule } from './app.routing.module';


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
import { DropdownDirective } from './custom-directive/dropdown.directive';
import { PageNotFoundComponent } from './error/page-not-found/page-not-found.component';
import { AuthService } from './auth/auth.service';


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
    DropdownDirective,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule
  ],
  providers: [AuthService, AuthGuard,CanDeactivateGuard, FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
