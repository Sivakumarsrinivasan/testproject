import { Component, OnInit } from '@angular/core';
import { product } from '../model.component';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  ngOnInit(): void {
    this.assigninglist()
  }
  productlist: product[] = [
    {
      price: 100,
      image_data: 'assets/Aline.jpg',
      rating: 3,
      id: 0,
      name: 'Aline dress',
      quantity: 20,
      category: 1
    },
    {
      price: 200,
      image_data: 'assets/maxi.jpg',
      rating: 2,
      id: 1,
      name: 'Maxi',
      quantity: 35,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/bodycon.jpg',
      rating: 3,
      id: 2,
      name: 'Bodycon',
      quantity: 40,
      category: 1
    },
    {
      price: 400,
      image_data: 'assets/tuxedo.jpg',
      rating: 3,
      id: 3,
      name: 'Tuxedo',
      quantity: 15,
      category: 1
    },
    {
      price: 500,
      image_data: 'assets/suit.jpg',
      rating: 5,
      id: 4,
      name: 'Suit',
      quantity: 20,
      category: 1
    },
    {
      price: 600,
      image_data: 'assets/Blazer.jpg',
      rating: 3,
      id: 5,
      name: 'Blazer and Chinos',
      quantity: 50,
      category: 1
    },
    {
      price: 400,
      image_data: 'assets/kurta.jpg',
      rating: 3,
      id: 6,
      name: 'Kurta',
      quantity: 100,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/pyjama.jpg',
      rating: 3,
      id: 7,
      name: 'Pyjama',
      quantity: 50,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/sherwani.jpg',
      rating: 3,
      id: 7,
      name: 'Sherwani',
      quantity: 50,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/wrap.jpg',
      rating: 3,
      id: 7,
      name: 'Wrap dress',
      quantity: 50,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/peplum.jpg',
      rating: 3,
      id: 7,
      name: 'Peplum dress',
      quantity: 50,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/shift.jpg',
      rating: 3,
      id: 7,
      name: 'Shift dress',
      quantity: 50,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/polo.jpg',
      rating: 3,
      id: 8,
      name: 'Polo',
      quantity: 170,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/leatherjacket.jpg',
      rating: 3,
      id: 8,
      name: 'Leather jacket',
      quantity: 150,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/Denim.jpg',
      rating: 3,
      id: 8,
      name: 'Denim jeans',
      quantity: 30,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/Baggy.jpg',
      rating: 3,
      id: 8,
      name: 'Baggy',
      quantity: 40,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/HighWaisted.jpg',
      rating: 3,
      id: 8,
      name: 'High Waisted',
      quantity: 80,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/H&m.jpg',
      rating: 3,
      id: 8,
      name: 'H&M',
      quantity: 150,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/veshti.jpg',
      rating: 3,
      id: 8,
      name: 'veshti shirt',
      quantity: 400,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/saree.jpg',
      rating: 3,
      id: 8,
      name: 'Saree',
      quantity: 350,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/lehenga.jpg',
      rating: 3,
      id: 8,
      name: 'Lehenga',
      quantity: 150,
      category: 1
    },
    {
      price: 300,
      image_data: 'assets/chudithar.jpg',
      rating: 3,
      id: 8,
      name: 'Chudithar',
      quantity: 150,
      category: 1
    },

  ];
  displaylist: product[] = [];
  autosuggestionlist: product[] = [];
  row: number = 6;
  currentpage: number = 1;
  searchvalue: string = '';

  autosuggestbox() {
    if (this.searchvalue == '') {
      this.autosuggestionlist = []
    } else {
      this.autosuggestionlist = this.productlist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))
    }
  }

  search() {

    // console.log(this.searchvalue);
    // this.displaylist = this.productlist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))
    if(this.searchvalue == ''){
      // this.autosuggestionlist =  []
      this.assigninglist()
    }else{
      // this.autosuggestionlist =  this.productlist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))    
    }


  }
  assigninglist() {
    this.displaylist = JSON.parse(JSON.stringify(this.productlist));
  }
  displaylist1(page: any) {
    const start = this.row * (page - 1);
    const end = start + this.row
    return this.displaylist.slice(start, end)
  }
  setpagination() {
    const page_count = Math.ceil(this.productlist.length / this.row)
    return Array.from({ length: page_count }, (_, i) => i + 1)
  }
  onpagechange(page: number) {
    this.currentpage = page
  }
  itemchose(name: string) {
    this.searchvalue = name;
    this.displaylist = this.displaylist.filter((data) => data.name.toLowerCase().includes(this.searchvalue.toLowerCase()))
    this.autosuggestionlist = []

  }
}
