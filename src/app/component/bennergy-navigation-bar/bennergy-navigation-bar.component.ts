import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bennergy-navigation-bar',
  templateUrl: './bennergy-navigation-bar.component.html',
  styleUrls: ['./bennergy-navigation-bar.component.scss']
})
export class BennergyNavigationBarComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();

  constructor() { }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
