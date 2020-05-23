import { Component, OnInit } from '@angular/core';
import { FaqClass } from './faq';
// import { FAQS } from './mock-faq';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {
  title = 'Frequently Asked Questions';
  
  faqs : FaqClass[];
  
  // faq: FaqClass = {
  //   faq_id: 1,
  //   faq_title: 'Test Faq',
  //   faq_slug: 'test_faq',
  //   faq_description: 'test_faq',
  // };

  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.getFaqList();
  }


  // selectedFaq: FaqClass;
  // onSelect(faq: FaqClass): void {
  //   this.selectedFaq = faq;
  // }

  getFaqList(): void {
    this.faqs = this.faqService.getFaqList();
  }

 
 
  

}
