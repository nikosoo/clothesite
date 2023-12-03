import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { ProductCardComponent } from './home/product-card/product-card.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ProductsWomenComponent } from './products/products-women/products-women.component';
import { ProductsMenComponent } from './products/products-men/products-men.component';
import { CartComponent } from './cart/cart.component';
import { ProductsViewComponent } from './products/products-view/products-view.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },

  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: 'women', component: ProductsWomenComponent },
      { path: 'men', component: ProductsMenComponent },
    ],
  },

  { path: 'contact', component: ContactComponent },
  { path: 'productsview', component: ProductsViewComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductCardComponent,
    ProductsComponent,
    ContactComponent,
    ProductsWomenComponent,
    ProductsMenComponent,
    CartComponent,
    ProductsViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
