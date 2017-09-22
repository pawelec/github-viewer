import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {
  searchForm: FormGroup;
  @Output() nameChanged = new EventEmitter < string > ();

  constructor(
    private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      name: [null, Validators.required]
    });
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      this.searchForm.markAsTouched();
      this.searchForm.updateValueAndValidity();
      return;
    }
    this.nameChanged.emit(this.searchForm.controls['name'].value);
  }
}
