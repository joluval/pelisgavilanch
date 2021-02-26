import { AfterViewInit, ChangeDetectorRef, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilidades/rating/rating.component';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclo-vida.component.html',
  styleUrls: ['./ciclo-vida.component.css']
})
export class CicloVidaComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  @Input()
  nombre = String;

  @ViewChild(RatingComponent)
  ratingComponent: RatingComponent;
  
  timer: ReturnType<typeof setInterval>;

  ngDoCheck(): void {
    console.log("Do Check")
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("On Changes");
    console.log(changes);
  }
  ngOnDestroy(): void {
    console.log("On Destroy")
    clearInterval(this.timer);
  }
  ngAfterViewInit(): void {
    console.log("After view Init");
    this.ratingComponent.ratingSeleccionado=3;
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    console.log("On Init");
    this.timer = setInterval(()=>console.log(new Date()),1000)
  }

}
