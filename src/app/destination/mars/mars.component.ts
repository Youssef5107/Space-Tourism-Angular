import { Component } from '@angular/core';
import { DestinationSubHeaderComponent } from '../destination-sub-header/destination-sub-header.component';


@Component({
  selector: 'app-mars',
  standalone: true,
  imports: [DestinationSubHeaderComponent],
  templateUrl: './mars.component.html',
  styleUrl: '../destination.component.css'
})
export class MarsComponent {

}
