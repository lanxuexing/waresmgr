import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appSex' })
export class SexPipe implements PipeTransform {
    transform(value: number): string {
        let exp = '';
        if (value === 1) {
            exp = '男';
        } else if (value === 2) {
            exp = '女';
        }
        return exp;
    }
}
