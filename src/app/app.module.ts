import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
// componentes
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HomeComponent } from "./components/home/home.component";
// servicios
import { YoutubeService } from "./services/youtube.service";

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [YoutubeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
