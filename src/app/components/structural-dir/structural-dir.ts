import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [NgIf, FormsModule, NgFor],
  selector: 'app-structural-dir',
  styleUrl: './structural-dir.css',
  templateUrl: './structural-dir.html',
})
export class StructuralDir {
  isDiv1Visiable: boolean = false;
  isAddressRequired: boolean = true;

  num1 = '';

  fName = ''
  lName = '';

  
  fullName =''

  generateFullName() {
      this.fullName = this.fName + " " + this.lName;
  }
  num2 = '';

  isDiv4Visiable = false;
  selectedCity: string = '';

  num3 = 0;
  dayName = '';

  cityList: string[] = ['Pune', 'Mumbai', 'Thane', 'Panji', 'Nagpur'];

  employeeList = [
    { empName: 'Sachin', city: 'Mumbai', state: 'MH', isActive: false },
    { empName: 'Rahul', city: 'Bhopal', state: 'MP', isActive: false },
    { empName: 'Suresh', city: 'Delhi', state: 'DL', isActive: true },
    { empName: 'Anand', city: 'Nagpur', state: 'MH', isActive: false },
    { empName: 'Gaurav', city: 'Pune', state: 'MH', isActive: true },
    { empName: 'Manav', city: 'Nagpur', state: 'MH', isActive: false },
  ];

  productList = [
    {
      farmerProductId: 92,
      farmerId: 101,
      farmerName: 'punam',
      productId: 35,
      productName: 'Dragon Fruits',
      productImage:
        'data:image/jpeg;base64,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',
      pricePerKg: 100.0,
      availableQuantity: 30.0,
      availableDate: '2026-09-13T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 91,
      farmerId: 101,
      farmerName: 'punam',
      productId: 49,
      productName: 'Broccoli',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/40016101_6-fresho-broccoli-florets.jpg?tr=w-154,q-80',
      pricePerKg: 30.0,
      availableQuantity: 50.0,
      availableDate: '2026-09-12T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 88,
      farmerId: 95,
      farmerName: 'FARMER1',
      productId: 40,
      productName: 'Jawar',
      productImage: 'https://www.bbassets.com/media/uploads/p/l/30000207_5-bb-royal-jowar.jpg',
      pricePerKg: 2.0,
      availableQuantity: 2.0,
      availableDate: '2026-07-20T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 87,
      farmerId: 95,
      farmerName: 'FARMER1',
      productId: 41,
      productName: 'Apples',
      productImage:
        'https://www.bbassets.com/media/uploads/p/l/40075384_13-fresho-apple-red-delicious-economy.jpg',
      pricePerKg: 1.0,
      availableQuantity: 10.0,
      availableDate: '2026-07-22T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 86,
      farmerId: 95,
      farmerName: 'FARMER1',
      productId: 46,
      productName: 'Grapes',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/40218331_4-fresho-grapes-thompson-seedless.jpg?tr=w-154,q-80',
      pricePerKg: 1.0,
      availableQuantity: 10.0,
      availableDate: '2026-07-21T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 46,
      farmerId: 93,
      farmerName: 'Farmer',
      productId: 53,
      productName: 'Kera',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/10000070_17-fresho-carrot-orange.jpg?tr=w-154,q-80',
      pricePerKg: 20.0,
      availableQuantity: 20.0,
      availableDate: '2026-07-02T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 45,
      farmerId: 85,
      farmerName: 'sai',
      productId: 53,
      productName: 'Kera',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/10000070_17-fresho-carrot-orange.jpg?tr=w-154,q-80',
      pricePerKg: 10.0,
      availableQuantity: 5.0,
      availableDate: '2026-06-18T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 44,
      farmerId: 35,
      farmerName: 'ramesh ramteke',
      productId: 7,
      productName: 'SPINACH',
      productImage:
        'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80',
      pricePerKg: 45.0,
      availableQuantity: 8.0,
      availableDate: '2026-05-30T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 43,
      farmerId: 35,
      farmerName: 'ramesh ramteke',
      productId: 52,
      productName: 'Onions',
      productImage:
        'https://cdn.britannica.com/21/174321-050-AA81C4C9/onion-Allium-cepa-bulbs.jpg?w=300',
      pricePerKg: 35.0,
      availableQuantity: 15.0,
      availableDate: '2026-05-28T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 38,
      farmerId: 58,
      farmerName: 'Farmer Ashutosh',
      productId: 44,
      productName: 'Coconut Water',
      productImage:
        'https://www.bbassets.com/media/uploads/p/l/40057966_12-fresho-tender-coconut-medium.jpg',
      pricePerKg: 200.0,
      availableQuantity: 20.0,
      availableDate: '2026-05-20T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 37,
      farmerId: 58,
      farmerName: 'Farmer Ashutosh',
      productId: 48,
      productName: 'Capsicum Red',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/40124625_3-fresho-capsicum-red-organically-grown.jpg?tr=w-154,q-80',
      pricePerKg: 200.0,
      availableQuantity: 20.0,
      availableDate: '2026-05-20T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 36,
      farmerId: 58,
      farmerName: 'Farmer Ashutosh',
      productId: 46,
      productName: 'Grapes',
      productImage:
        'https://www.bbassets.com/media/uploads/p/m/40218331_4-fresho-grapes-thompson-seedless.jpg?tr=w-154,q-80',
      pricePerKg: 100.0,
      availableQuantity: 10.0,
      availableDate: '2026-05-20T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 35,
      farmerId: 53,
      farmerName: 'Reddy',
      productId: 2,
      productName: 'Indian Spices',
      productImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800',
      pricePerKg: 40.0,
      availableQuantity: 10.0,
      availableDate: '2026-05-11T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 34,
      farmerId: 17,
      farmerName: 'test',
      productId: 44,
      productName: 'Coconut Water',
      productImage:
        'https://www.bbassets.com/media/uploads/p/l/40057966_12-fresho-tender-coconut-medium.jpg',
      pricePerKg: 1000.0,
      availableQuantity: 1.0,
      availableDate: '2026-05-10T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 33,
      farmerId: 19,
      farmerName: 'Satish Shelke',
      productId: 42,
      productName: 'fresho! Broccoli',
      productImage: 'https://www.bbassets.com/media/uploads/p/l/10000062_25-fresho-broccoli.jpg',
      pricePerKg: 1111.0,
      availableQuantity: 0.98,
      availableDate: '2026-05-10T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 32,
      farmerId: 12,
      farmerName: 'Ram ',
      productId: 35,
      productName: 'Dragon Fruits',
      productImage:
        'data:image/jpeg;base64,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',
      pricePerKg: 1021.0,
      availableQuantity: 1.0,
      availableDate: '2026-05-09T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 30,
      farmerId: 14,
      farmerName: 'manpreetfarmer',
      productId: 25,
      productName: 'Orange',
      productImage: 'https://www.bbassets.com/media/uploads/p/l/20003956_6-fresho-baby-orange.jpg',
      pricePerKg: 12.0,
      availableQuantity: 0.97,
      availableDate: '2026-05-09T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 29,
      farmerId: 19,
      farmerName: 'Satish Shelke',
      productId: 23,
      productName: 'Carrot - Orange',
      productImage:
        'https://www.bbassets.com/media/uploads/p/l/10000070_17-fresho-carrot-orange.jpg',
      pricePerKg: 1131.0,
      availableQuantity: 0.98,
      availableDate: '2026-05-09T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 28,
      farmerId: 42,
      farmerName: 'Admin Vaibhav',
      productId: 41,
      productName: 'Apples',
      productImage:
        'https://www.bbassets.com/media/uploads/p/l/40075384_13-fresho-apple-red-delicious-economy.jpg',
      pricePerKg: 110.0,
      availableQuantity: 6.0,
      availableDate: '2026-05-07T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 27,
      farmerId: 42,
      farmerName: 'Admin Vaibhav',
      productId: 40,
      productName: 'Jawar',
      productImage: 'https://www.bbassets.com/media/uploads/p/l/30000207_5-bb-royal-jowar.jpg',
      pricePerKg: 45.0,
      availableQuantity: 100.0,
      availableDate: '2026-05-08T00:00:00',
      status: 'Available',
    },
    {
      farmerProductId: 25,
      farmerId: 47,
      farmerName: 'Raahul A',
      productId: 4,
      productName: 'milk',
      productImage: 'https://images.unsplash.com/photo-1563636619-e9143da7973b',
      pricePerKg: 10.0,
      availableQuantity: 1.0,
      availableDate: '2026-07-19T00:00:00',
      status: 'Available',
    },
  ];

  toggleDiv4() {
    this.isDiv4Visiable = !this.isDiv4Visiable;
  }
  onShowDiv1() {
    this.isDiv1Visiable = true;
  }

  onHideDiv1() {
    this.isDiv1Visiable = false;
  }
}
