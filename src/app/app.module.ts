import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


//Importing Components
import { AppComponent } from './app.component';
import  {MyComponent} from './MyComponent'
import { MyNewComponent } from './MyNewComponent';
import {DataAccessComponent} from './DataAccessComponent'
import {IfExampleComponent} from './IfExampleComponent'
import {CustomDirective} from './CustomDirective'
import {CustomExample} from './CustomExample'
import { ProductComponent } from './ProductComponent';
import { ProductArrayComponent } from './ProdArrayComponent';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SortPipe } from './pipe-example/SortPipe';
import { FormExampleComponent } from './form-example/form-example.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CaseStudyFormComponent } from './case-study-form/case-study-form.component';
import { CaseStudeForm2Component } from './case-stude-form2/case-stude-form2.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { ApiServiceInjectionComponent } from './api-service-injection/api-service-injection.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
     //Adding Components
    MyComponent, MyNewComponent, DataAccessComponent, IfExampleComponent,
    CustomDirective, CustomExample, ProductComponent,
    ProductArrayComponent,
    PipeExampleComponent,SortPipe,
     FormExampleComponent, ReactiveFormComponent, CaseStudyFormComponent, CaseStudeForm2Component, DependencyInjectionComponent, ApiServiceInjectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
