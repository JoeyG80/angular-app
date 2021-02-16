import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { ViewRulesetsComponent } from './components/view-rulesets/view-rulesets.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestParentComponent,
    ViewRulesetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
