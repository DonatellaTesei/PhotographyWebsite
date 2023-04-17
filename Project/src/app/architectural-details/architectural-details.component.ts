import { Component, VERSION, ViewEncapsulation } from "@angular/core";
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
@Component({
  selector: 'app-architectural-details',
  templateUrl: './architectural-details.component.html',
  styleUrls: ['./architectural-details.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ArchitecturalDetailsComponent {
  name = "Angular " + VERSION.major;
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}
