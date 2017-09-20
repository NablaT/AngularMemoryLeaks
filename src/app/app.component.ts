import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {MdTab} from "@angular/material";

import {routes} from "./app.routing";
import {MemoryLeaksActivationService} from "./shared/services/memoryleaksactivation.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  private routeList: string[] = [];
  public title = "Memory leaks & Observables";
  public leaksActivated = true;

  private ACTIVATED = "Activated";
  private DEACTIVATED = "Deactivated";

  public activationText = this.ACTIVATED;

  constructor(private router: Router, private memoryLeaksActivationService: MemoryLeaksActivationService) {
    routes.forEach((route, index) => index !== 0 ? this.routeList.push(route.path) : null);
    this.propagateUpdateLeaks();
  }

  ngOnInit() {
    this.router.navigate([this.routeList[0]]);
  }

  /**
   * Function to navigate to another page based on user clicks into the tab.
   * @param {{index: number; tab: MdTab}} $event
   */
  navigateTo($event: { index: number, tab: MdTab }) {
    this.router.navigate([this.routeList[$event.index]]);
  }

  /**
   * Function to update the leaks service with the new value of leaksActivated. This value could
   * be changed by the toggle button thanks to the NgModel directive. It also updates the text to display
   * next to the toggle button.
   */
  propagateUpdateLeaks() {
    this.memoryLeaksActivationService.memoryLeaksActivated = this.leaksActivated;
    this.leaksActivated ? this.activationText = this.ACTIVATED : this.activationText = this.DEACTIVATED;
  }
}
