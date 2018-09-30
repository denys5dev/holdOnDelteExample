import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.css"]
})
export class CustomerComponent implements OnInit {
  @Input()
  data;
  @Output()
  emitDelete = new EventEmitter();
  progress = 0;

  constructor() {}

  ngOnInit() {}

  deleteData(e, data) {
    this.progress = e / 10;
    if (this.progress > 100) {
      this.emitDelete.emit(data);
    }
  }
}
