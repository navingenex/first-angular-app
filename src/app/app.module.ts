import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
