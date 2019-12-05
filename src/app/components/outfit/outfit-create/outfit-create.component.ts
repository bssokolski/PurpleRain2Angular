import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from '@angular/forms';
import {OutfitService} from'src/app/services/outfit.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-outfit-create',
  templateUrl: './outfit-create.component.html',
  styleUrls: ['./outfit-create.component.css']
})
export class OutfitCreateComponent implements OnInit {

  outfitForm: FormGroup;

  constructor(private form: FormBuilder, private outfitService: OutfitService, private activatedRoute: ActivatedRoute, private router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }
  
  createForm(){
    this.outfitForm = this.form.group({
      OutfitName: new FormControl,
      Top: new FormControl,
      Bottom: new FormControl,
    });
  }

  onSubmit(){
    this.activatedRoute.paramMap.subscribe(params => {
    this.outfitService.createOutfit(params.get('id'),this.outfitForm.value).subscribe(() => {
      this.router.navigate(['/outfits']);
    }) 
  })
  } 
}