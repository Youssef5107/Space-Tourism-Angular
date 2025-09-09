import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Destination } from '../Destination/destination.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Destination],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Space-tourism-app';
}
