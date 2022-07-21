import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vex-agency-list',
  templateUrl: './agency-list.component.html',
  styleUrls: ['./agency-list.component.scss']
})
export class AgencyListComponent implements OnInit {
  agencies = [
    {
      agency: 'Holiday Store',
      id: 123,
      name: 'Misk travel',
      email: 'm@m.com',
      phone: '01007900500',
      address: '9 ismail el kabani'
    },
    {
      agency: 'Holiday Store',
      id: 123,
      name: 'Misk travel',
      email: 'm@m.com',
      phone: '01007900500',
      address: '9 ismail el kabani'
    },
  ]

  items = [
    {label: 'PDF', icon: 'pi pi-file-pdf'},
    {separator: true},
    {label: 'Excel', icon: 'pi pi-file-excel'}    
  ];

  options = [
    {label: 'Edit', icon: 'pi pi-file-excel'} ,
    {separator: true},
    {label: 'Delete', icon: 'pi pi-trash'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
