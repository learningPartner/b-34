import { Routes } from '@angular/router';
import { Admin } from './components/admin/admin';
import { DataBindings } from './components/data-bindings/data-bindings';
import { DataTypes } from './components/data-types/data-types';
import { UserPage } from './components/user-page/user-page';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { StructuralDir } from './components/structural-dir/structural-dir';
import { DyanamicClass } from './components/dyanamic-class/dyanamic-class';
import { GetAPI } from './components/get-api/get-api';
import { CarMaster } from './components/car-master/car-master';
import { Vendors } from './components/vendors/vendors';
import { BatchMaster } from './components/batch-master/batch-master';
import { EnquiryMaster } from './components/enquiry-master/enquiry-master';
import { Enrollments } from './components/enrollments/enrollments';
import { SignalBasic } from './components/signal-basic/signal-basic';
import { BasicReactive } from './components/basic-reactive/basic-reactive';
import { SignlFormBasic } from './components/signl-form-basic/signl-form-basic';
import { PipesEx } from './components/pipes-ex/pipes-ex';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'data-binding',
    pathMatch: 'full',
  },

  {
    path: 'adminpage',
    component: Admin,
  },
  {
    path: 'pipe-ex',
    component: PipesEx,
  },
  {
    path: 'data-binding',
    component: DataBindings,
  },
  {
    path: 'datatypes',
    component: DataTypes,
  },
   {
    path: 'signal-form',
    component: SignlFormBasic,
  },
  {
    path: 'user',
    component: UserPage,
  }, 
  {
    path: 'batch',
    component: BatchMaster,
  }, 
  {
    path: 'enquiry',
    component: EnquiryMaster,
  }, 
  {
    path: 'enrollments',
    component: Enrollments,
  }, 
  {
    path: 'cars',
    component: CarMaster,
  },
   {
    path: 'signal-basic',
    component:SignalBasic,
  },
   {
    path: 'reactive-basic',
    component:BasicReactive,
  },
  {
    path: 'vendor',
    component: Vendors,
  },
  {
    path: 'str-dir-control-flow',
    component: StructuralDir,
  },
  {
    path: 'dynamic-css',
    component: DyanamicClass,
  },
  {
    path: 'get-api',
    component: GetAPI,
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
