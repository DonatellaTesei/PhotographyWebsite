import { Component } from '@angular/core';
import{Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  constructor(private route: ActivatedRoute,
               private router: Router) { }


         /// =========  EXPAND CARDS ========= ///      
  expandCities= function(){
    const card=document.querySelector(".cities")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/cities-details'], { relativeTo: this.route });
     
    }, 1500);
  }

  ////+++++++++++++  EXPAND CARDS ++++++++++++++////
  expandFood= function(){
    const card=document.querySelector(".food")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/streetfood-details'], { relativeTo: this.route });
     
    }, 1500);
  }
  expandArchi= function(){
    const card=document.querySelector(".archi")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery//architectural-details'], { relativeTo: this.route });
     
    }, 1500);
  }
  expandLandscapes= function(){
    const card=document.querySelector(".landscapes")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/landscapes-details'], { relativeTo: this.route });
     
    }, 1500);
  }
  expandWild= function(){
    const card=document.querySelector(".wild")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/wildelife-details'], { relativeTo: this.route });
     
    }, 1500);
  }
  expandPeople= function(){
    const card=document.querySelector(".people")as HTMLElement;
    card.style.display = "block";
    card.style.zIndex = "100";
    card.style.transition = "all 1.5s linear";
    card.style.zIndex = "100";
    card.style.transform = "rotateZ(360deg) scale(9)"
    card.style.opacity = "0";
    let images = document.querySelectorAll(".cardDiv") as NodeListOf<HTMLElement>;
    images.forEach((image)=>{
      image.style.transition = "all 1.5s linear";
    image.style.opacity = "0";
    })
    
   
    setTimeout(()=>{
      card.style.transition = "none";
      card.style.transform = "scale(1)"
      card.style.opacity = "1";
      card.style.zIndex = "0";
      this.router.navigate(['/gallery/people-details'], { relativeTo: this.route });
     
    }, 1500);
  }

}
