
import { NgModule } from "@angular/core";
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import {MatGridListModule} from '@angular/material/grid-list';

const myModules = [
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    MatGridListModule
];

@NgModule({
    imports: [
        ...myModules
    ],
    exports:[
        ...myModules
    ]
  })
  export class MaterialModule{}
