import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(userName: string, genderInput?: string): string {
    if (genderInput == 'M' || genderInput == 'm') return 'Mr. ' + userName;
    else if (genderInput == 'F' || genderInput == 'f') return 'Ms. ' + userName;
    else return userName;
  }
}
