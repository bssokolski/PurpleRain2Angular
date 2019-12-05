import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { OutfitService } from 'src/app/services/outfit.service';
import { Outfit }from 'src/app/models/Outfit';
import {Router} from '@angular/router';

@Component({
  selector: 'app-outfit-delete',
  templateUrl: './outfit-delete.component.html',
  styleUrls: ['./outfit-delete.component.css']
})
export class OutfitDeleteComponent implements OnInit {

  outfit: Outfit;

  constructor(private activatedRoute: ActivatedRoute, private outfitService: OutfitService, private router: Router) { 
    this.activatedRoute.paramMap.subscribe(params => {
      this.outfitService.getOutfit(params.get('id')). subscribe((outfit: Outfit) => {
        this.outfit = outfit;
      });
    });
  }

  ngOnInit() {
  }

  onDelete(){
    this.outfitService.deleteOutfit(this.outfit.OutfitID).subscribe(()=> {
      this.router.navigate(['/outfits']);
    });
  }
}
