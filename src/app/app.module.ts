import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageCarouselComponent } from './homepage-carousel/homepage-carousel.component';
import { CategoryDisplayComponent } from './category-display/category-display.component';
import { CategoryFilterNavbarComponent } from './category-filter-navbar/category-filter-navbar.component';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ViewAllPageComponent } from './view-all-page/view-all-page.component';
import { ViewComponent } from './view/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomepageCarouselComponent,
    CategoryDisplayComponent,
    CategoryFilterNavbarComponent,
    CartComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    ViewAllPageComponent,
    ViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
