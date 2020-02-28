import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FuiMessageModule, FuiPaginationModule} from './collections/internal';
import {
  FuiAccordionModule,
  FuiCheckboxModule,
  FuiCollapseModule,
  FuiDatepickerModule,
  FuiDimmerModule,
  FuiDropdownModule,
  FuiModalModule,
  FuiPopupModule,
  FuiProgressModule,
  FuiRatingModule,
  FuiSearchModule,
  FuiSelectModule,
  FuiSidebarModule,
  FuiTabsModule,
  FuiToastModule,
  FuiTransitionModule
} from './modules/internal';
import {FuiLocalizationModule} from './behaviors/internal';
import {FuiUtilityModule} from './misc/internal';

@NgModule({
  imports: [],
  exports: [
    FuiMessageModule,
    FuiPaginationModule,

    FuiAccordionModule,
    FuiCheckboxModule,
    FuiCollapseModule,
    FuiDatepickerModule,
    FuiDimmerModule,
    FuiDropdownModule,
    FuiModalModule,
    FuiPopupModule,
    FuiProgressModule,
    FuiRatingModule,
    FuiSearchModule,
    FuiSelectModule,
    FuiSidebarModule,
    FuiTabsModule,
    FuiToastModule,
    FuiTransitionModule,

    FuiLocalizationModule,

    FuiUtilityModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FomanticUIModule {
}
