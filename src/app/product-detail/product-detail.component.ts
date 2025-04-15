import { Component, OnInit } from '@angular/core';
import { product } from '../model.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  ngOnInit(): void {
this.assigninglist()
  }
  productlist: product[] = [
    {
      price: 100,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 0,
      name: 'computer',
      quantity: 1,
      category: 1
    },
    {
      price: 200,
      image_data: 'assets/appliances.jpg',
      rating: 2,
      id: 1,
      name: 'laptop',
      quantity: 1,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 2,
      name: 'phone',
      quantity: 1,
      category: 1
    },
    {
      price: 400,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 3,
      name: 'Tv',
      quantity: 1,
      category: 1
    },
    {
      price: 500,
      image_data: 'assets/appliances.jpg',
      rating: 5,
      id: 4,
      name: 'Home appliances',
      quantity: 1,
      category: 1
    },
    {
      price: 600,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 5,
      name: 'Mobile',
      quantity: 1,
      category: 1
    },
    {
      price: 400,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 6,
      name: 'Appleproduct',
      quantity: 1,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/appliances.jpg',
      rating: 3,
      id: 7,
      name: 'Ac',
      quantity: 1,
      category: 1
    }
  ]
  displaylist:product[]=[]
  autosuggestionlist:product[]=[]
  row:number=3
  currentpage:number =1
 searchvalue: string = ''
  search(e: KeyboardEvent) {

    console.log(this.searchvalue);
    this.displaylist = this.productlist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))
    if(this.searchvalue == ''){
      this.autosuggestionlist =  []
    }else{
      this.autosuggestionlist =  this.productlist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))    
    }
    

  }
  assigninglist() {
    this.displaylist = JSON.parse(JSON.stringify(this.productlist));
  }
  displaylist1(page:any){
const start = this.row*(page-1);
const end = start + this.row
return this.displaylist.slice(start,end)
  }
  setpagination(){
    const page_count = Math.ceil(8/this.row)
    return Array.from({length:page_count},(_,i)=>i+1)
  }
  onpagechange(page:number){
    this.currentpage = page
  }
  itemchose(name:string){
this.searchvalue = name;
this.displaylist = this.displaylist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))
this.autosuggestionlist = []

  }
}
