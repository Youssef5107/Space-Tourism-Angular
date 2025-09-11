import { Component } from "@angular/core";
import { DestinationSubHeaderComponent } from "../destination-sub-header/destination-sub-header.component";

@Component({
    selector:'app-destination-moon',
    imports:[DestinationSubHeaderComponent],
    standalone:true,
    templateUrl:'./moon.component.html',
    styleUrl:'../destination.component.css'
})


export class MoonComponent{}