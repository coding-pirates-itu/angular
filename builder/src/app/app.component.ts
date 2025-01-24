import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FieldComponent } from "./field/field.component";
import { PickerComponent } from './picker/picker.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FieldComponent, PickerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Builder';
}
