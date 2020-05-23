import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { FaqClass } from '../faq';
import { FaqService } from '../faq.service';


@Component({
  selector: 'app-faq-detail',
  templateUrl: './faq-detail.component.html',
  styleUrls: ['./faq-detail.component.scss']
})
export class FaqDetailComponent implements OnInit {

  title = 'FAQ'

  @Input() faq: FaqClass;

  constructor(
    private route: ActivatedRoute,
    private faqService: FaqService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getFaqDetails();
  }
  
  getFaqDetails(): void {
    const slug = + this.route.snapshot.paramMap.get('slug');
    this.faqService.getFaqDetails(slug)
      .subscribe(faq => this.faq = faq);
  }

  goBack(): void {
    this.location.back();
  }

}
