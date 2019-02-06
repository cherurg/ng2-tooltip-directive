import { Component, ViewChildren, AfterViewInit } from '@angular/core'
import { TooltipDirective } from 'projects/tooltip/src/lib/tooltip.directive'

@Component({
  selector: 'first-page',
  templateUrl: './first-page.component.html',
})
export class FirstPageComponent implements AfterViewInit {
  tooltipDisplay = false
  someTooltip: any

  tooltipOptions = {
    placement: 'left',
    'show-delay': '500',
    'tooltip-class': 'new-tooltip-class',
  }

  @ViewChildren(TooltipDirective) tooltipDirective

  ngAfterViewInit() {
    this.someTooltip = this.tooltipDirective.find(
      elem => elem.id === 'someTooltip',
    )
  }

  handleTooltipEvents(event: string) {
    console.log(event)
  }
}
