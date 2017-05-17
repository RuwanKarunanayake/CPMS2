import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { EventManager, AlertService } from 'ng-jhipster';

import { Clinic } from './clinic.model';
import { ClinicPopupService } from './clinic-popup.service';
import { ClinicService } from './clinic.service';
import { Recording, RecordingService } from '../recording';
import { Userinfo, UserinfoService } from '../userinfo';

@Component({
    selector: 'jhi-clinic-dialog',
    templateUrl: './clinic-dialog.component.html'
})
export class ClinicDialogComponent implements OnInit {

    clinic: Clinic;
    authorities: any[];
    isSaving: boolean;

    recordings: Recording[];

    userinfos: Userinfo[];
    constructor(
        public activeModal: NgbActiveModal,
        private alertService: AlertService,
        private clinicService: ClinicService,
        private recordingService: RecordingService,
        private userinfoService: UserinfoService,
        private eventManager: EventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.authorities = ['ROLE_USER', 'ROLE_ADMIN'];
        this.recordingService.query().subscribe(
            (res: Response) => { this.recordings = res.json(); }, (res: Response) => this.onError(res.json()));
        this.userinfoService.query().subscribe(
            (res: Response) => { this.userinfos = res.json(); }, (res: Response) => this.onError(res.json()));
    }
    clear () {
        this.activeModal.dismiss('cancel');
    }

    save () {
        this.isSaving = true;
        if (this.clinic.id !== undefined) {
            this.clinicService.update(this.clinic)
                .subscribe((res: Clinic) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        } else {
            this.clinicService.create(this.clinic)
                .subscribe((res: Clinic) =>
                    this.onSaveSuccess(res), (res: Response) => this.onSaveError(res.json()));
        }
    }

    private onSaveSuccess (result: Clinic) {
        this.eventManager.broadcast({ name: 'clinicListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError (error) {
        this.isSaving = false;
        this.onError(error);
    }

    private onError (error) {
        this.alertService.error(error.message, null, null);
    }

    trackRecordingById(index: number, item: Recording) {
        return item.id;
    }

    trackUserinfoById(index: number, item: Userinfo) {
        return item.id;
    }

    getSelected(selectedVals: Array<any>, option: any) {
        if (selectedVals) {
            for (let i = 0; i < selectedVals.length; i++) {
                if (option.id === selectedVals[i].id) {
                    return selectedVals[i];
                }
            }
        }
        return option;
    }
}

@Component({
    selector: 'jhi-clinic-popup',
    template: ''
})
export class ClinicPopupComponent implements OnInit, OnDestroy {

    modalRef: NgbModalRef;
    routeSub: any;

    constructor (
        private route: ActivatedRoute,
        private clinicPopupService: ClinicPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            if ( params['id'] ) {
                this.modalRef = this.clinicPopupService
                    .open(ClinicDialogComponent, params['id']);
            } else {
                this.modalRef = this.clinicPopupService
                    .open(ClinicDialogComponent);
            }

        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
