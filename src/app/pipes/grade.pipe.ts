import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appGrade' })
export class GradePipe implements PipeTransform {
    transform(value: number): string {
        let exp = '';
        if (value === 1) {
            exp = '超级会员';
        } else if (value === 2) {
            exp = '普通会员';
        }
        return exp;
    }
}
