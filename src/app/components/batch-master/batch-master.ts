import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-batch-master',
  styleUrl: './batch-master.css',
  templateUrl: './batch-master.html',
})
export class BatchMaster {

  batchList = signal<any>([]);

  newBatch = {
    batchId: 0,
    batchName: '',
    startDate: '',
    teacher: '',
    endDate: '',
  };

  constructor(private http: HttpClient) {
    this.getBatches();
  }

  getBatches() {
    this.http.get('https://projectapi.gerasim.in/api/InstituteManagement/GetBatches').subscribe({
      next: (res: any) => {
        this.batchList.set(res);
      },
    });
  }

  onSaveBatch() {
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/InstituteManagement/createBatch", this.newBatch).subscribe({
      next:(res:any)=>{
        alert("Batch Created")
        this.getBatches();
      }
    })
  }

  onEdit(data:any) {
    this.newBatch =  data;
  }

  onUpdate( ){
    this.http.put("https://projectapi.gerasim.in/api/InstituteManagement/UpdateBatch?id="+this.newBatch.batchId, this.newBatch).subscribe({
      next:(res:any)=>{
        alert("Updated");
        this.getBatches();
      }
    })
  }

  deleteBatch(id: number) {
    const isConfirm = confirm("Are u sure want to delete");
    if(isConfirm) {
      this.http.delete("https://projectapi.gerasim.in/api/InstituteManagement/DeleteBatchById?id=" +id).subscribe({
        next:(res:any)=>{
          alert("Deleted")
          this.getBatches();
        }
      })
    }
  }
  
}
