import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { InspComponent } from './admin/insp/insp.component';
import { EquipmentComponent } from './admin/raport/equipment/equipment.component';
import { EmplComponent } from './admin/raport/empl/empl.component';
import { EditUserComponent } from './admin/user/edit-user/edit-user.component';
import { AddUserComponent } from './admin/user/add-user/add-user.component';
import { EditEquipmentComponent } from './admin/equipment/edit-equipment/edit-equipment.component';
import { AddEquipmentComponent } from './admin/equipment/add-equipment/add-equipment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './admin/dash/navbar/navbar.component';
import { SidenavComponent } from './admin/dash/sidenav/sidenav.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { InspectionComponent } from './admin/raport/inspection/inspection.component';
import { AdmindashComponent } from './admin/admindash/admindash.component';
import { MatCardModule } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { UserAuthService } from './auth-service/user-auth.service';
import { UserdashComponent } from './users/userdash/userdash.component';
import { NavbarForUsersComponent } from './users/dashForUsers/navbar-for-users/navbar-for-users.component';
import { SidenavForUsersComponent } from './users/dashForUsers/sidenav-for-users/sidenav-for-users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EquipmentComponent,
    EmplComponent,
    EditUserComponent,
    AddUserComponent,
    EditEquipmentComponent,
    AddEquipmentComponent,
    InspectionComponent,
    NavbarComponent,
    SidenavComponent,
    InspComponent,
    AdmindashComponent,
    UserdashComponent,

    NavbarForUsersComponent,
    SidenavForUsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSidenavModule,
    MatSlideToggleModule,
    CommonModule,
    MatSidenavContainer,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatCard,
    MatButtonModule,
    MatTooltip,
    MatIcon,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync(),
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
