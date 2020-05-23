import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FaqClass } from './faq';
import { FAQS } from './mock-faq';
import { MessageService } from '../../messages/message.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(
    private messageService: MessageService,
  ) { }

  getFaqList(): FaqClass[] {
    return FAQS;
  }

  getFaqDetails(slug: any): Observable<FaqClass> {
    this.messageService.add('FAQ List loaded');
    // return of(FAQS);

    
     return of(FAQS.find(faq => faq.faq_id == slug));


   }

}
