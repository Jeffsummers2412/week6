import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditrecipePage } from './editrecipe';

@NgModule({
  declarations: [
    EditrecipePage,
  ],
  imports: [
    IonicPageModule.forChild(EditrecipePage),
  ],
})
export class EditrecipePageModule {}
