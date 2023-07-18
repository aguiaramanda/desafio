import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() title: string = '';
  @Input() msg: string = '';
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Sim';

  confirmResult: Subject<boolean> = new Subject;

  constructor(public bsModalRef: BsModalRef) { }

  public ngOnInit(): void {
    this.confirmResult = new Subject();
  }

  public onConfirm(): void {
    this.confirmAndClose(true);
  }

  public onClose(): void {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean): void {
    this.confirmResult.next(value);
    this.bsModalRef.hide();
  }

}
