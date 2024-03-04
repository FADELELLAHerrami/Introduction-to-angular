import { Injectable } from '@angular/core';
import { Content } from './model/content.model'


@Injectable({
  providedIn: "root"
})
export class ContentsService {
  contents: Content[] = [
    {
      id: 1,
      title:"Modric",
      image: "https://www.leparisien.fr/resizer/2a5OOQOgFo2pxvFaGT_xkdn8IsE=/932x582/arc-anglerfish-eu-central-1-prod-leparisien.s3.amazonaws.com/public/WG26ISNNJ5T2X4IDVYSVL5HAKU.jpg",
      description: "Luka Modrić is a Croatian professional footballer known for his exceptional skill and leadership as a central midfielder. He has played for clubs like Real Madrid and Tottenham Hotspur, winning multiple domestic and international titles, including the UEFA Champions League. Modrić also led Croatia to the 2018 FIFA World Cup Final and was awarded the FIFA Ballon d'Or in 2018.",
      createDate: new Date(),
      likes: 5,
    },
    {
      id: 2,
      title: "Messi",
      image: "https://s.lorientlejour.com/storage/attachments/1231/FW1_SOCCER-SPAIN-FCB-MESSI_0825_11-1598377951_858498.jpg/r/800/FW1_SOCCER-SPAIN-FCB-MESSI_0825_11-1598377951_858498.jpg",
      description: "Lionel Messi is an Argentine footballer widely recognized as one of the greatest players ever, renowned for his exceptional skill and prolific goal-scoring abilities.",
      createDate: new Date(),
      likes: 5,
    },
    {
      id: 3,
      title: "Ronaldo",
      image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/12/08/22/Cristiano-Ronaldo-6.jpg",
      description: "Cristiano Ronaldo is a legendary Portuguese footballer known for his exceptional talent, athleticism, and record-breaking achievements on the field.      ",
      createDate: new Date(),
      likes: 5,
    }
  ]
  getContentById(id: number){
    return this.contents.find((content)=>content.id === id);
  }
  getContents(){
    return this.contents;
  }

  like(id: number){
    let content = this.contents.find((content) => content.id === id);
    if (content) {
      content.likes++;
    } else {
      throw new Error('Content not found!');
    }
  }
  unlike(id: number){
    let content = this.contents.find((content) => content.id === id);
    if (content) {
      content.likes--;
    } else {
      throw new Error('Content not found!');
    }
  }
}
