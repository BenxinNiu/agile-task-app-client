import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {IMiniApp} from '../../model/navBarMiniApp';

@Component({
  selector: 'app-bennergy-navigation-bar',
  templateUrl: './bennergy-navigation-bar.component.html',
  styleUrls: ['./bennergy-navigation-bar.component.scss']
})
export class BennergyNavigationBarComponent implements OnInit, OnDestroy {

  private subscription: Subscription = new Subscription();
  public miniAppList: IMiniApp[];

  constructor() { }

  getMiniApps(): IMiniApp[] {
    return [
      {name: 'New Task  ssss'}, {name: 'Backlog'}, {name: 'D2L'}, {name: 'GitHub'}, {name: 'Mail'}
    ];
  }

  ngOnInit(): void {
    this.miniAppList = this.getMiniApps();
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
