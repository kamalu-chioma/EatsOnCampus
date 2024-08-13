import { Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements OnInit {

  @Input() 
  visible =false;

  @Input()
  notFoundMessage = "Not Found";

  @Input()
  resetLinkText = "Reset";

  @Input()
  resetLinkRoute = "/"; 

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  

}
