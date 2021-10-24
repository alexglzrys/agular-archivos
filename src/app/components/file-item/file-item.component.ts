import {Component, Input, OnInit} from '@angular/core';
import {IFile} from "../../interfaces/IFile";

@Component({
  selector: 'app-file-item',
  templateUrl: './file-item.component.html',
  styleUrls: ['./file-item.component.css']
})
export class FileItemComponent implements OnInit {

  @Input() fileInfo!: IFile;

  constructor() { }

  ngOnInit(): void {

  }

}
