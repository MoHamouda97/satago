import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrimeModule } from 'src/app/shared/modules/prime.module';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { AgencyComponent } from './agency.component';
import { AgencyRoutes } from './agency.routes';
import { BrandComponent } from './components/brand/brand.component';
import { CreditDepositComponent } from './components/credit-deposit/credit-deposit.component';
import { DataComponent } from './components/data/data.component';
import { DomainsComponent } from './components/domains/domains.component';
import { OverCommisionComponent } from './components/over-commision/over-commision.component';
import { AgencyDataComponent } from './pages/agency-data/agency-data.component';
import { AgencyListComponent } from './pages/agency-list/agency-list.component';



@NgModule({
    declarations: [
        AgencyComponent,
        AgencyListComponent,
        AgencyDataComponent,
        DataComponent,
        DomainsComponent,
        BrandComponent,
        CreditDepositComponent,
        OverCommisionComponent
    ],
    exports: [],
    imports: [
        CommonModule,
        RouterModule.forChild(AgencyRoutes),
        SharedModule,
        PrimeModule,
    ]
})

export class AgencynModule {}
