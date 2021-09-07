import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestParentComponent } from './test-parent/test-parent.component';
import { ViewRulesetsComponent } from './components/view-rulesets/view-rulesets.component';
import { ChildTwoComponent } from './components/child-two/child-two.component';
import { TestSubjectObjectsComponent } from './components/test-subject-objects/test-subject-objects.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestParentComponent,
    ViewRulesetsComponent,
    ChildTwoComponent,
    TestSubjectObjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
