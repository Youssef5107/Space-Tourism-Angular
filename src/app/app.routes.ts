import { Routes } from '@angular/router';
import { DestinationComponent } from './destination/destination.component';
import { HomeComponent } from './home/home.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import { MoonComponent } from './destination/moon/moon.component';
import { MarsComponent } from './destination/mars/mars.component';
import { EuropaComponent } from './destination/europa/europa.component';
import { TitanComponent } from './destination/titan/titan.component';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'', redirectTo:'home', pathMatch:'full'}, 
    {path:'destination', component:DestinationComponent,
         children:[
            {path:'moon', component:MoonComponent},
            {path:'', redirectTo:'moon', pathMatch:'full'},
            {path:'mars', component:MarsComponent},
            {path:'europa', component:EuropaComponent},
            {path:'titan', component:TitanComponent},
            // {path:'**', redirectTo:'moon', pathMatch:'full'}
        ]},
    {path:'crew', component:CrewComponent},
    {path:'technology', component:TechnologyComponent},
    // {path:'**', redirectTo:'home', pathMatch:'full'}
    
];
