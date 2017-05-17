import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { ClinicComponent } from './clinic.component';
import { ClinicDetailComponent } from './clinic-detail.component';
import { ClinicPopupComponent } from './clinic-dialog.component';
import { ClinicDeletePopupComponent } from './clinic-delete-dialog.component';

import { Principal } from '../../shared';

@Injectable()
export class ClinicResolvePagingParams implements Resolve<any> {

  constructor(private paginationUtil: PaginationUtil) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      let page = route.queryParams['page'] ? route.queryParams['page'] : '1';
      let sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
      return {
          page: this.paginationUtil.parsePage(page),
          predicate: this.paginationUtil.parsePredicate(sort),
          ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}

export const clinicRoute: Routes = [
  {
    path: 'clinic',
    component: ClinicComponent,
    resolve: {
      'pagingParams': ClinicResolvePagingParams
    },
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Clinics'
    }
  }, {
    path: 'clinic/:id',
    component: ClinicDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Clinics'
    }
  }
];

export const clinicPopupRoute: Routes = [
  {
    path: 'clinic-new',
    component: ClinicPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Clinics'
    },
    outlet: 'popup'
  },
  {
    path: 'clinic/:id/edit',
    component: ClinicPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Clinics'
    },
    outlet: 'popup'
  },
  {
    path: 'clinic/:id/delete',
    component: ClinicDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'Clinics'
    },
    outlet: 'popup'
  }
];
