import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemeService } from './theme.service';
import { ThemeDirective } from './theme.directive';
import { THEMES, ACTIVE_THEME, ThemeOptions } from './symbols';
import { ModuleWithProviders } from '@angular/compiler/src/core';

@NgModule({
  imports: [CommonModule],
  providers: [ThemeService],
  declarations: [ThemeDirective],
  exports: [ThemeDirective]
})
export class ThemeModule {
  static forRoot(options: ThemeOptions): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [
        {
          provide: THEMES,
          useValue: options.themes
        },
        {
          provide: ACTIVE_THEME,
          useValue: options.active
        }
      ]
    };
  }
}
