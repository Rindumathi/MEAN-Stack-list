import { Component, OnInit } from '@angular/core';
import {UniversityService} from '../university.service';
import {University} from '../university';
@Component({
  selector: 'app-universitylist',
  templateUrl: './universitylist.component.html',
  styleUrls: ['./universitylist.component.css'],
  providers:[UniversityService]
})
export class UniversitylistComponent implements OnInit {
  universities: any;

  constructor(private universityService:UniversityService) { }  


  ngOnInit() {
    this.universityService.getUniversities()
        .subscribe( universities => 
        this.universities = universities); 
  }

}
