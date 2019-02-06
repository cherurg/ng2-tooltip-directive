import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouterModule } from '@angular/router'
import { TooltipModule } from 'projects/tooltip/src/public_api'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.routing'
import { FirstPageComponent } from './first-page.component'
import { SecondPageComponent } from './second-page.component'

@NgModule({
  declarations: [AppComponent, FirstPageComponent, SecondPageComponent],
  imports: [
    BrowserModule,
    TooltipModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
