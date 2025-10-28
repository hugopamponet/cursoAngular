import { Component } from '@angular/core';
import { HelloWorldComponent } from './helloword/helloworld.component';
import { MinhaPaginaComponent } from './minha-pagina/minha-pagina.component'
import { ListaComprasComponent } from './lista-compras/lista-compras.component';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, MinhaPaginaComponent, ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
