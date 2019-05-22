import { Injectable } from '@angular/core';
import * as faker from 'faker'

@Injectable({
  providedIn: 'root'
})
export class DataGeneratorService {

  private sidebarMenus = [];

  constructor() {

  }

  getMenus(){
    return this.sidebarMenus;
  }

  createDummyData(){
    return this.sidebarMenus = Array(5)
      .fill(null)
      .map((item,index)=>{
        return{
          title: faker.name.title(),
          description : faker.random.words(50)
        }
      })
  }

  createSideBarMenu(){
    return this.sidebarMenus = Array(10)
        .fill(null)
        .map((item,index)=>{
          return {
            name : faker.name.title(),
            index: index,
          }
        })
  }
}
