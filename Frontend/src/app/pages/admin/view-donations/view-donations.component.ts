import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Donation } from 'src/app/Model/Donation';
import { AuthenticationPopUpService } from 'src/app/services/authentication-pop-up.service';
import { DonationService } from 'src/app/services/donation.service';


@Component({
  selector: 'app-view-donations',
  templateUrl: './view-donations.component.html',
  styleUrls: ['./view-donations.component.css']
})
export class ViewDonationsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'donation_user', 'donation_date', 'donation_amount', 'donation_type'];
  dataSource: MatTableDataSource<Donation>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  

  constructor(
    private donationService: DonationService,
    private router:Router,
    private popUpService: AuthenticationPopUpService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource<Donation>();
  }
  ngOnInit() {
    this.donationService.getDonations().subscribe({
      next: (data: Donation[]) => {
        console.log("Printing Donations: ", data);
        this.dataSource.data = data;
      },
      error: (error:any) => {
        console.error("Error retrieving Donations");
        if(error.status == 403){
          this.popUpService.openPopUp();
        }
      }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    console.log('Filter Value:', filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}

