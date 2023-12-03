import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GptService {

  apiUrl = 'http://chat.openai.com/';

  constructor(private http: HttpClient) { }

  chat(question: string, apiKey: string) {
    const prompt = `Q: ${question}\nA: `;
    return this.http.post(this.apiUrl, {
      prompt,
      max_tokens: 50,
      n: 1,
      stop: '\n',
      temperature: 0.7
    }, { headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${apiKey}` } });
  }
}
