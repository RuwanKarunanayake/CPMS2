import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CpmsClinicModule } from './clinic/clinic.module';
import { CpmsDrugModule } from './drug/drug.module';
import { CpmsInvestigationModule } from './investigation/investigation.module';
import { CpmsMedicalHistoryModule } from './medical-history/medical-history.module';
import { CpmsRecordingModule } from './recording/recording.module';
import { CpmsUserinfoModule } from './userinfo/userinfo.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        CpmsClinicModule,
        CpmsDrugModule,
        CpmsInvestigationModule,
        CpmsMedicalHistoryModule,
        CpmsRecordingModule,
        CpmsUserinfoModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CpmsEntityModule {}
