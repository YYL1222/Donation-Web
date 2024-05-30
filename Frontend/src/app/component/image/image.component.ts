import { Component, Input, OnInit } from '@angular/core';
import { DonationType } from 'src/app/Model/DonationType';
import { ImageService } from 'src/app/services/image-service';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  image: any;
  @Input() donationType:DonationType | any;

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    if(this.donationType.image_url){
      this.getImage();
    }
  }
  getImage(): void {
    this.imageService.getImage(this.donationType.id).subscribe({
        next: (data:Blob) => {
          console.log(data);
          this.createImageFromBlob(data);
        }
        // Now, you can handle the binary image data as needed.
      });
  }
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.image = reader.result;
    }, false);
 
    if (image) {
       reader.readAsDataURL(image);
    }
 }
}
