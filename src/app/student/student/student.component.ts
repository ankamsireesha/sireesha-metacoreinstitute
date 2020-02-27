import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/admin/data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   data:any;

  stu=this.ds.loggedinUser;
  constructor(private ds:DataService) { }

 ngOnInit() {
    console.log(this.stu);
      this.ds.readdata(this.stu).subscribe((read)=>{
        this.data=read["message"];
        console.log(this.data);
      })
  }


}
