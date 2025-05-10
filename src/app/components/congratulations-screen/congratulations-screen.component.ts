import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import confetti from 'canvas-confetti';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-congratulations-screen',
  imports: [ButtonModule, CardModule, TranslateModule, RouterLink],
  templateUrl: './congratulations-screen.component.html',
  styleUrl: './congratulations-screen.component.css',
})
export class CongratulationsScreenComponent implements OnInit {
  ngOnInit() {
    confetti.create(
      document.getElementById('confetti-canvas') as HTMLCanvasElement,
      {
        resize: true,
        useWorker: true,
      }
    )({
      particleCount: 300,
      spread: 200,
      origin: { y: 0.5 },
    });
  }
}
