import { Component, ElementRef, HostListener } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DonationService } from 'src/app/services/donation.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpHeaders } from '@angular/common/http';
import { DonationType } from 'src/app/Model/DonationType';
import { AuthenticationPopUpService } from 'src/app/services/authentication-pop-up.service';

@Component({
  selector: 'app-donation-new',
  templateUrl: './donation-new.component.html',
  styleUrls: ['./donation-new.component.css'],
})
export class DonationNewComponent {
  selectedFile!: File;
  constructor(
    public dataService: DonationService,
    private router: Router,
    private el: ElementRef,
    private popUpService: AuthenticationPopUpService
  ) {}

  closeModal() {
    this.router.navigate(['/admin/add-donation']);
  }
  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }

  onSubmit(f: NgForm) {
    const fd = new FormData();

    const jsonData = JSON.stringify(f.value);
    const jsonBlob = new Blob([jsonData], { type: 'application/json' });

    fd.append('data', jsonBlob, 'data.json');
    console.log(f.value);
    console.log(fd.get('data'));
    
    console.log("--------------");
    
    fd.append('image', this.selectedFile);
    console.log(this.selectedFile);
    console.log(fd.get('image'));
    const options = {
      // No need to set headers here; they are set in the FormData
      responseType: 'text',
    };
  
    this.dataService.addDonationTypeJson(fd, options).subscribe((data) => {
      console.log(data); 
      
      if (data.status == 403) {
        this.popUpService.openPopUp();
      }
  
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/admin/add-donation']);
      });
    });
  }
}
