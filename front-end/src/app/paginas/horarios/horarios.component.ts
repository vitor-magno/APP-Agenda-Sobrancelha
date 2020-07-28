import {
    ChangeDetectionStrategy,ChangeDetectorRef,Component,Inject,OnDestroy,ViewEncapsulation} from '@angular/core';
  
    
    import {MatCalendarCellCssClasses} from '@angular/material/datepicker';
@Component({
  selector: 'app-horarios',
  templateUrl: 'horarios.component.html',
  styleUrls: ['horarios.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HorariosComponent {
   
  constructor() {}

  dateClass = (d: Date): MatCalendarCellCssClasses => {
    const date = d.getDate();

    // Highlight the 1st and 20th day of each month.
    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
  }


  
}
