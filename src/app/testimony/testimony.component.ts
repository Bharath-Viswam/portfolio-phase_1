import { TestimoniesService } from './../testimonies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  styleUrls: ['./testimony.component.css']
})
export class TestimonyComponent implements OnInit {
testimonies=[]

  constructor(public TestimoniesService:TestimoniesService) { }

  ngOnInit(): void {
    this.TestimoniesService.gettestmoniesdata().subscribe((data)=>{
      this.testimonies = JSON.parse(JSON.stringify(data));
      console.log(this.testimonies)
    })
  }

}
