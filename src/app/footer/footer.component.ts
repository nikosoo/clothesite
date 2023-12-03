import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {}
export interface DialogData2 {}
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {});
  }
  openDialog2() {
    this.dialog.open(DialogDataExampleDialog2, {});
  }
}

@Component({
  selector: 'dialog-data-example-dialog',
  templateUrl: 'dialog-data-example-dialog.html',
  styleUrls: ['./footer.component.css'],
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
@Component({
  selector: 'dialog-data-example-dialog2',
  templateUrl: 'dialog-data-example-dialog copy2.html',
  styleUrls: ['./footer.component.css'],
})
export class DialogDataExampleDialog2 {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData2) {}
}
