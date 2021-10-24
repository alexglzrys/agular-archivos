import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extension'
})
export class ExtensionPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    // Regresar la clase FontAwesome con base a la extensión de archivo
    let classIcon: string;
    switch (value) {
      case 'zip':
        classIcon = 'fas fa-file-archive';
        break;
      case 'mp4':
        classIcon = 'fas fa-file-video';
        break;
      case 'jpg':
        classIcon = 'fas fa-file-image';
        break;
      case 'sql':
        classIcon = 'fas fa-database';
        break;
      case 'txt':
        classIcon = 'fas fa-file-alt';
        break;
      default:
        classIcon = 'fas fa-folder';
    }
    return classIcon;
  }

}
