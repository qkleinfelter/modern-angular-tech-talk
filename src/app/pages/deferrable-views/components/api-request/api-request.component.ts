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
  constructor(private _httpClient: HttpClient) {}

  ngAfterViewInit(): void {
    this._httpClient.get('https://dog.ceo/api/breeds/image/random').subscribe((data) => {
      console.log(data)
    })
  }
}
