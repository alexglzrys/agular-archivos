import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {IFile} from "../../interfaces/IFile";
import {FileService} from "../../services/file.service";

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() fileInfo!: IFile;
  @ViewChild('myFile') myFileElement!: ElementRef

  constructor(private fileService: FileService) { }

  ngOnInit(): void {

  }

  delete(file: IFile) {
    this.fileService.deleteFile(file).subscribe(response => {
      if (response.code == 200) {
        this.myFileElement.nativeElement.remove()
      }
      console.log(response)
    })
  }

}
