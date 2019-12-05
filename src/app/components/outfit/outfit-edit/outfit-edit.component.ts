import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { OutfitService } from 'src/app/services/outfit.service';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import { Outfit }from 'src/app/models/Outfit';
import {Router} from '@angular/router';

@Component({
  selector: 'app-outfit-edit',
  templateUrl: './outfit-edit.component.html',
  styleUrls: ['./outfit-edit.component.css']
})
export class OutfitEditComponent implements OnInit {

  outfit: Outfit;
  editForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private outfitService: OutfitService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.paramMap.subscribe(params => {
      this.outfitService.getOutfit(params.get('id')).subscribe((outfit: Outfit) => {
        this.outfit = outfit;
        this.createForm();
      })
    })
   }

  ngOnInit() {
  }

  createForm(){
    this.editForm= this.formBuilder.group({
      OutfitID: new FormControl(this.outfit.OutfitID),
      OutfitName: new FormControl(this.outfit.OutfitName),
      Top: new FormControl(this.outfit.Top),
      Bottom: new FormControl(this.outfit.Bottom),
    })
  }

  onSubmit(){
    const updatedOutfit: Outfit= {
        OutfitID: this.editForm.value.OutfitID,
        OutfitName: this.editForm.value.OutfitName,
        Top: this.editForm.value.Top, 
        Bottom: this.editForm.value.Bottom, 
    };
    this.outfitService.updateOutfit(updatedOutfit).subscribe(() => {
     this.router.navigate(['/goals']);
  });
}
}
