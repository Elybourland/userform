import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { UserState } from './state/user.state';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      UserState
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
