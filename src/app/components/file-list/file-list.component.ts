import { Component, OnInit } from '@angular/core';
import {FileService} from "../../services/file.service";
import {IFile} from "../../interfaces/IFile";

@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  files!: IFile[];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.getAllFiles();
  }

  getAllFiles() {
    this.fileService.getAllFiles().subscribe(files => {
      this.files = files;
    })
  }

}
