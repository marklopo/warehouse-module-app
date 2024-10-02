import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './admin/login/login.component';
import { EquipmentComponent } from './admin/raport/equipment/equipment.component';
import { EmplComponent } from './admin/raport/empl/empl.component';
import { SidenavComponent } from './admin/dash/sidenav/sidenav.component';
import { authguardGuard } from './guard/auth';
import { InspectionComponent } from './admin/raport/inspection/inspection.component';
import { InspComponent } from './admin/insp/insp.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditEquipmentComponent } from './admin/equipment/edit-equipment/edit-equipment.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { AddEquipmentComponent } from './admin/equipment/add-equipment/add-equipment.component';
import { UserdashComponent } from './users/userdash/userdash.component';
import { SidenavForUsersComponent } from './users/dashForUsers/sidenav-for-users/sidenav-for-users.component';
import { authguardGuardUsers } from './guard/authUser';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  {
    path: 'dash',
    component: SidenavComponent,
    canActivate: [authguardGuard],
    children: [
      {
        path: 'add-user',
        component: AddUserComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'add-equipment',
        component: AddEquipmentComponent,
        canActivate: [authguardGuard],
      },

      {
        path: 'add-inspection',
        component: InspComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'inspection',
        component: InspectionComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'users',
        component: EmplComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'equipment',
        component: EquipmentComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'edit-equipment/:id',
        component: EditEquipmentComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'edit-user/:id',
        component: EditUserComponent,
        canActivate: [authguardGuard],
      },
      {
        path: 'admindash',
        component: AdmindashComponent,
        canActivate: [authguardGuard],
      },
    ],
  },
  {
    path: 'userdash',
    component: SidenavForUsersComponent,

    children: [
      {
        path: 'user',
        component: UserdashComponent,
        canActivate: [authguardGuardUsers],
      },
      {
        path: 'add-inspection',
        component: InspComponent,
        canActivate: [authguardGuardUsers],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
