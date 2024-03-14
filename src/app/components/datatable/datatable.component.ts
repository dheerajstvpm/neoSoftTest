import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular'; // AG Grid Component
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-datatable',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './datatable.component.html',
  styleUrl: './datatable.component.scss'
})
export class DatatableComponent implements OnInit {

private http=inject(HttpClient);
rowData:any;

colDefs: ColDef[] = [
  { field: "userId" },
  { field: "id" },
  { field: "title" },
  { field: "body" }
];

ngOnInit(){
this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res=>{
console.log(res);
this.rowData=res;

})
}

}
