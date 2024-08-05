import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-request',
  standalone: true,
  imports: [],
  templateUrl: './api-request.component.html',
  styleUrl: './api-request.component.scss'
})
export class ApiRequestComponent implements AfterViewInit {
  imgSrc = '';

  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this._httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe((data: any) => {
      console.log(data)
      this.imgSrc = data.message;
    })
  }
}
