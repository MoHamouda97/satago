import { Routes } from "@angular/router";
import { AgencyComponent } from "./agency.component";
import { AgencyDataComponent } from "./pages/agency-data/agency-data.component";
import { AgencyListComponent } from "./pages/agency-list/agency-list.component";


export const AgencyRoutes: Routes  = [
  {
    path: '',
    component: AgencyComponent,
    children: [
      {
        path: 'list',
        component: AgencyListComponent,
        resolve: {}       
      },  
      {
        path: 'agency-data',
        component: AgencyDataComponent,
        resolve: {}       
      },  
    ]
  }
]