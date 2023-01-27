import { NgModule } from '@angular/core';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
exports:[
    NzLayoutModule,
    NzTableModule,
]
})

export class ngZorroModule { }