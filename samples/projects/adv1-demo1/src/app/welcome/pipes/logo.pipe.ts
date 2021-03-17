import {Pipe, PipeTransform} from '@angular/core';

/*
 * Converts an input string into an animal logo, if a corresponding logo is present.

 * Takes a transformation argument that defaults to unspec.
 * Usage:
 *   value | logo:toImage
 * Example:
 *   {{ 'Bulls' |  logo:toImage}}
 *    formats to: <img src="app/core/assets/bulls.png">
 *   {{ 'Bulls' |  logo}}
 *    formats to: Butrue Bulls
 */

export class LogoPipe implements PipeTransform {
  private logos: { [key: string] : { [key: string]: string } } = {
    Bulls: {toImage: 'assets/bulls.png', unspec: 'Butrue Bulls'},
    Tigers: {toImage: 'assets/tigers.png', unspec: 'Langau Tigers'}
  };

  transform(value?: string): string | undefined {
    return void 0;
  }

}
