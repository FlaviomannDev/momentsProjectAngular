import { MessagesService } from 'src/app/services/messages.service';
import { MomentService } from './../../../services/moment.service';
import { Moment } from './../../../Moment';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-moment',
  templateUrl: './new-moment.component.html',
  styleUrls: ['./new-moment.component.css'],
})
export class NewMomentComponent implements OnInit {
  btnText = 'Compartilhar!';
  constructor(
    private momentService: MomentService,
    private messageService: MessagesService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  async createdHandler(moment: Moment) {
    const formData = new FormData();

    formData.append('title', moment.title);
    formData.append('description', moment.description);

    if (moment.image) {
      formData.append('image', moment.image);
    }

    // todo

    // enviar para o service
    this.momentService.createMoment(formData).subscribe();

    // exibir msg
    this.messageService.add('Momento adicionado com Sucesso!');

    // redirect
    this.router.navigate(['/']);
  }
}
