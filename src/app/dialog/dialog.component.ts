import { Component,Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from './../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  freshnessList = ['Brand New', 'Second Hand', 'Refurbished'];
  TransactionForm!: FormGroup;
  actionBtn: string="Save"
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject( MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.TransactionForm = this.formBuilder.group({
      CompanyName: ['', Validators.required],
      IDNumber: ['', Validators.required],
      ABA: ['', Validators.required],
      Account: ['', Validators.required],
      Amount: ['', Validators.required],
      TransactionType: ['', Validators.required],
      HoldDate: ['', Validators.required],
    });

    if(this.editData){
      this.actionBtn = "Update";
      this.TransactionForm.controls['CompanyName'].setValue(this.editData.CompanyName);
      this.TransactionForm.controls['IDNumber'].setValue(this.editData.IDNumber);
      this.TransactionForm.controls['ABA'].setValue(this.editData.ABA);
      this.TransactionForm.controls['Account'].setValue(this.editData. Account);
      this.TransactionForm.controls['Amount'].setValue(this.editData. Amount);
      this.TransactionForm.controls['TransactionType'].setValue(this.editData.TransactionType);
      this.TransactionForm.controls['HoldDate'].setValue(this.editData.HoldDate);
    }
  }

  addTransaction() {
   if(!this.editData){
    if (this.TransactionForm.valid) {
      this.api.postProduct(this.TransactionForm.value).subscribe({
        next: (res) => {
          alert('Trasaction added successfully');
          this.TransactionForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert('Error while adding transaction');
        },
      });
    }
   }else {
     this.updateTransaction()
   }
  }
  updateTransaction(){
      this.api.putTransaction(this.TransactionForm.value, this.editData.id)
      .subscribe({
        next: (res) => {
          alert("Transaction updated successfully")
          this.TransactionForm.reset();
          this.dialogRef.close("update");
        },
        error:()=>{
          alert("Error while updating the record!");
          
        }
      })
  }
}
