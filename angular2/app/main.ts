/**
 * Main module
 * Bootstrap app module
 *
 * @author Fang Jin <windmaomao@gmail.com>
 * @date 10/08/16
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
