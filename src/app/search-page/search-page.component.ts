import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }

  searchTerm:any = ''
  products:any;
  numberOfProducts:Number = 0
  time:String = '0'
  ngOnInit(): void {
    this.searchTerm = this.router.snapshot.paramMap.get("searchTerm")
    this.searchProduct()
    this.time = Math.random().toFixed(2)
  }

  searchProduct() {
    // console.log(this.searchTerm)
    fetch(`http://localhost:3300/search/${this.searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        this.products = data.result
        this.numberOfProducts = data.length
      })
  }

}