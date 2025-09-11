import { Component } from '@angular/core';
import { DestinationSubHeaderComponent } from '../destination-sub-header/destination-sub-header.component';

@Component({
  selector: 'app-titan',
  standalone: true,
  imports: [DestinationSubHeaderComponent],
  templateUrl: './titan.component.html',
  styleUrl: '../destination.component.css'
})
export class TitanComponent {

}
