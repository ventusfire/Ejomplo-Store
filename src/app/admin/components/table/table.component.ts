import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TableDataSource, TableItem } from './table-datasource';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;;
  @ViewChild(MatSort) sort = {} as MatSort;
  @ViewChild(MatTable) table = {} as MatTable<TableItem>;
  dataSource = {} as TableDataSource;

  displayedColumns = ['id', 'name'];

  ngOnInit(): void{
    this.dataSource = new TableDataSource();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
