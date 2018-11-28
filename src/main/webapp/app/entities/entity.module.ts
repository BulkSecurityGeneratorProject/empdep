import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { EmpDepRegionModule } from './region/region.module';
import { EmpDepCountryModule } from './country/country.module';
import { EmpDepLocationModule } from './location/location.module';
import { EmpDepDepartmentModule } from './department/department.module';
import { EmpDepTaskModule } from './task/task.module';
import { EmpDepEmployeeModule } from './employee/employee.module';
import { EmpDepJobModule } from './job/job.module';
import { EmpDepJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        EmpDepRegionModule,
        EmpDepCountryModule,
        EmpDepLocationModule,
        EmpDepDepartmentModule,
        EmpDepTaskModule,
        EmpDepEmployeeModule,
        EmpDepJobModule,
        EmpDepJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EmpDepEntityModule {}
