import { Component } from '@angular/core';
import { ComponentModalConfig, ModalSize, FuiModal } from 'ngx-fomantic-ui';

interface IAlertModalContext {
    message: string;
    title?: string;
}

@Component({
    selector: 'demo-modal-alert',
    template: `
<div class="header" *ngIf="modal.context.title">{{ modal.context.title }}</div>
<div class="content">
    <p>{{ modal.context.message }}</p>
</div>
<div class="actions">
    <button class="ui green button" (click)="modal.approve(undefined)" autofocus>OK</button>
</div>
`
})
export class AlertModalComponent {
    constructor(public modal: FuiModal<IAlertModalContext, void>) {}
}

export class AlertModal extends ComponentModalConfig<IAlertModalContext, void, void> {
    constructor(message: string, title?: string) {
        super(AlertModalComponent, { message, title });

        this.transitionDuration = 200;
        this.size = ModalSize.Small;
    }
}
