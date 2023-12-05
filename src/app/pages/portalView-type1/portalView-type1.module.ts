import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalViewType1Component } from './portalView-type1.component';
import { PortalViewType1RoutingModule } from './portalView-type1Routing.routing';

@NgModule({
  imports: [
    CommonModule,
    PortalViewType1RoutingModule
  ],
  declarations: [PortalViewType1Component]
})
export class PortalViewType1Module { }
