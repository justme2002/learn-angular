import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-spy',
  templateUrl: './spy.component.html',
  styleUrls: ['./spy.component.css']
})

export class SpyComponent implements OnInit, OnDestroy {

  public users = [
    "Huy",
    "Nam",
    "Dung"
  ]

  public type = "text"

  showButton(): void {
    console.log("show!")
  }

  constructor() {}
  ngOnDestroy(): void {
  }

  ngOnInit(): void {
    console.log("init again")
  }
}
