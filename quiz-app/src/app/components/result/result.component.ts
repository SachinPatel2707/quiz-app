import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: string
  noOfQues: string

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.result = this.route.snapshot.paramMap.get('res')
    this.noOfQues = this.route.snapshot.paramMap.get('noOfQues')
  }

}
