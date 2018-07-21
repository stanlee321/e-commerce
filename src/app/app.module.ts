import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { CosturaComponent } from './costura/costura.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { FeaturesComponent } from './features/features.component';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { PopularComponent } from './popular/popular.component';
import { DiscountComponent } from './discount/discount.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { HeaderProductComponent } from './header-product/header-product.component';
import { ModalComponent } from './modal/modal.component';
import { ProductOverviewComponent } from './product-overview/product-overview.component';
import { MenComponent } from './galeria/men/men.component';
import { WomenComponent } from './galeria/women/women.component';
import { StuffsComponent } from './galeria/stuffs/stuffs.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo:'home', pathMatch : 'full'},
  { path: 'costura', component: CosturaComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'product/:id', component: SingleViewComponent },
  { path: 'blog', component: BlogComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BlogComponent,
    HomeComponent,
    CosturaComponent,
    GaleriaComponent,
    FeaturesComponent,
    BestSellerComponent,
    PopularComponent,
    DiscountComponent,
    SingleViewComponent,
    HeaderProductComponent,
    ModalComponent,
    ProductOverviewComponent,
    MenComponent,
    WomenComponent,
    StuffsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }) // <-- debugging purposes only
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
