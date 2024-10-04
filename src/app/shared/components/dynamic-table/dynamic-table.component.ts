import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface TableColumn {
  field: string;
  header: string;
}

export interface TableAction {
  label: string;
  icon: string;
  action: string;
}

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})

export class DynamicTableComponent {

  @Input() columns: TableColumn[] = [];
  @Input() data: any[] = [];
  @Input() pageSizeOptions: number[] = [5, 10, 25];
  @Input() totalItems: number = 0;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() actionClicked: EventEmitter<{ action: string, row: any }> = new EventEmitter<{ action: string, row: any }>();

  @Input() actions: TableAction[] = [];

  onPageChanged(event: any): void {
    this.pageChange.emit(event.pageIndex + 1);
  }
  onActionClicked(action: string, row: any): void {
    this.actionClicked.emit({ action, row });
  }

  getColumnFields(): string[] {
    return this.columns.map(column => column.field);
  }
}
