import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-lifecycle',
  template: `<p>Hi {{ name }}. ngOnInit fired: {{ ngOnInitFired }} and ngOnChanges fired: {{ ngOnChangesFired }}</p>`
})
export class LifecycleComponent implements OnInit, OnChanges {
  @Input() name = ''
  ngOnInitFired = false
  ngOnChangesFired = false

  ngOnInit(): void {
    this.ngOnInitFired = true
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnChangesFired = true;
  }
}