import { Component } from '@angular/core';
import { JsonplaceholderService } from '../../apiServices/jsonplaceholder.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})


export class MainComponent {

  posts:any = [];
  
  constructor(private jsonplaceholderService: JsonplaceholderService){
    this.jsonplaceholderService.allPost().subscribe(data => {
      //console.log('All Users:', data);

      this.posts = data;
    });

  }

}
