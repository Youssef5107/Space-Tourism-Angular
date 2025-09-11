import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-destination-sub-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './destination-sub-header.component.html',
  styleUrl: './destination-sub-header.component.css'
})
export class DestinationSubHeaderComponent {

}
