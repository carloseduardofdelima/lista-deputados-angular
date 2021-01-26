import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListarDeputadosComponent } from './listar-deputados/listar-deputados.component';
import { DeputadoService } from './model/deputado.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarDeputadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DeputadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
