import { Component, ElementRef, ViewChild } from '@angular/core';
import { GptService } from 'src/app/gpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  question :any= '';
  response = '';
  apiKey = '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';

  constructor(private chatGPTService: GptService) {}

  messages: any[] = [];
  history = '';
  PREDEFINED_RESPONSES = [
    {
      question: 'Hi',
      response: 'Hello there!'
    },
    {
      question: 'How can I view my courses?',
      response: 'You can click the my courses tab on the left side on your home page'
    },
    {
      question: 'What time is it?',
      response: `I'm sorry, I cannot tell time.`
    },
    {
      question: 'How can i report issues?',
      response: `You can click the report issues tab on the left side on your home page`
    }
  ];
 
  @ViewChild('input') input!: ElementRef;
  handleSubmit(): void {
    const query: string = this.input.nativeElement.value.trim();
    const response = this.PREDEFINED_RESPONSES.find((item) => item.question === query);
    if (response) {
      this.history += `You: ${query}\nChatbot: ${response.response}\n`;
      this.input.nativeElement.value = '';
    } else {
      this.history += `You: ${query}\nChatbot: I'm sorry, I don't understand.\n`;
    }
  }
  show=false;
  showImg = true;
  activated(){
    this.show = true;
    this.showImg=false;
  }
  deactivated(){
    this.show = false;
    this.showImg=true;
  }

}
